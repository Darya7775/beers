import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type MyData =  {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}[];

type FetchingStatus = "idle" | "loading" | "succeeded" | "failed";

interface ExtendedEntityAdapterState {
  status: FetchingStatus
  comments: {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
  }[],
  error: string
};

const initialState: ExtendedEntityAdapterState = {
  comments: [],
  status: "idle",
  error: ''
};

export const fetchComments = createAsyncThunk('comments/fetchComments', async (beerId: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${beerId}`);

  return (await response.json()) as MyData;
});

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.status = "failed";
        state.error = "failed";
      })
  }
});

export default commentsSlice.reducer;
