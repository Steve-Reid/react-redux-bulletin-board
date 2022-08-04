/* eslint-disable import/no-cycle */
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postsReducer from '@features/posts/postsSlice';
import usersReducer from '@features/users/usersSlice';

const reducer = {
  posts: postsReducer,
  users: usersReducer
};

export const store = configureStore({
  reducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export function getStoreWithState(preloadedState?: RootState) {
  return configureStore({ reducer, preloadedState });
}
