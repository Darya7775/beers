import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
};

type MyData = Comment[];

type FetchingStatus = "idle" | "loading" | "succeeded" | "failed";

interface ExtendedEntityAdapterState {
  status: FetchingStatus
  comments: Comment[],
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
  reducers: {
    addComment: (state, action: PayloadAction<Comment>) => {
      console.log(action.payload)
      state.comments.push(action.payload);
    }
  },
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

export const { addComment } = commentsSlice.actions;
