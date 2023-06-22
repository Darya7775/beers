import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// запрос на авторизацию
export const fetchAuthorization = createAsyncThunk("session/authorization", async (body) => {
  const response = await fetch('/api/v1/users/sign?fields=token%2Cprofile(name)',{
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  });

  const result = await response.json();

  if(result.result) {
    localStorage.setItem('token', result.result.token);
  } else {
    localStorage.removeItem('token');
  }

  return result;
});

// запрос на валидность токена
export const fetchCheck = createAsyncThunk("session/check", async() => {
  const token = localStorage.getItem('token');

  let result;
  if(token) {
    const response = await fetch('/api/v1/users/self?fields=token%2Cprofile(name)', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Token': token
      }
    });
    result = await response.json();
  } else {
    result = "session no";
  }

  return {result, token};
})

// запрос на выход
export const fetchSignOut = createAsyncThunk("session/signOut", async () => {

  const token = localStorage.getItem("token");

  const response = await fetch('/api/v1/users/sign', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'X-Token': token
    }
  })

  const result = await response.json();

  if(result.result) {
    localStorage.removeItem('token');
  } else {
    console.log(result.result.error.message)
  }

  return result;
});

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    authorization: false,
    token: "",
    status: "idle",
    name: ""
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAuthorization.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAuthorization.fulfilled, (state, action) => {
        state.status = "succeeded";
        if(action.payload.error) {
          state.error = action.payload.error.message;
        } else {
          state.authorization = true;
          state.token = action.payload.result.token;
          state.name = action.payload.result.user.profile.name;
          state.error = "";
        }
      })
      .addCase(fetchAuthorization.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.error.message;
      })
      .addCase(fetchSignOut.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSignOut.fulfilled, (state) => {
        state.status = "succeeded";
        state.error = "";
        state.authorization = false;
        state.token = "";
        state.name = "";
        state.error = "";
      })
      .addCase(fetchSignOut.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.error.message;
      })
      .addCase(fetchCheck.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCheck.fulfilled, (state, action) => {
        state.status = "succeeded";
        if(action.payload.error) {
          state.error = action.payload.error.message;
        } else {
          state.authorization = true;
          state.token = action.payload.token;
          state.name = action.payload.result.result.profile.name;
          state.error = "";
        }
      })
      .addCase(fetchCheck.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.error.message;
      })
  }
});

export default sessionSlice.reducer;
