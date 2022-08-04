import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { getStoreWithState, RootState } from './app/store';
import { Post } from './features/posts/postsSlice';
import { User } from './features/users/usersSlice';

export function renderWithContext(
  element: React.ReactElement,
  state?: RootState
) {
  const store = getStoreWithState(state);
  const utils = render(<Provider store={store}>{element}</Provider>);
  return { store, ...utils };
}

export function getStateWithItems(
  users: User[],
  posts: Post[] = []
): RootState {
  const state: RootState = {
    posts,
    users
  };
  return state;
}
