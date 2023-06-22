import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// получение данных пользователя
export const fetchUser = createAsyncThunk("user/data", async (token) => {
  const response = await fetch('/api/v1/users/self', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Token': token
    }
  })

  const result = await response.json();

  return result;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    status: "idle",
    name: "",
    telephone: "",
    email: ""
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        if(action.payload.error) {
          state.error = action.payload.error.message;
        } else {
          state.telephone = action.payload.result.profile.phone;
          state.email = action.payload.result.email;
          state.name = action.payload.result.profile.name;
          state.error = "";
        }
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.error.message;
      })
  }
});

export default userSlice.reducer;
