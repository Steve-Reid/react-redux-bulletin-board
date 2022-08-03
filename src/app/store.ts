/* eslint-disable import/no-cycle */
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postsReducer from '@posts/postsSlice';
import usersReducer from '@users/usersSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
