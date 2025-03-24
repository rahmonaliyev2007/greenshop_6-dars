import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  liked: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("liked")) || [] : [],
};

const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const isLiked = state.liked.includes(action.payload);
      if (isLiked) {
        state.liked = state.liked.filter((id) => id !== action.payload);
      } else {
        state.liked.push(action.payload);
      }
      localStorage.setItem("liked", JSON.stringify(state.liked));
    },
  },
});

export const { toggleLike } = likedSlice.actions;
export default likedSlice.reducer;