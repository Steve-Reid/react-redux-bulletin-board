import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { getStoreWithState, RootState } from './app/store';
import { PostsState } from './features/posts/postsSlice';
import { User } from './features/users/usersSlice';
import { mockPosts } from './utils/fixtures/mockPosts';
import { mockUsers } from './utils/fixtures/mockUsers';

export function renderWithContext(
  element: React.ReactElement,
  state?: RootState
) {
  const store = getStoreWithState(state);
  const utils = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>{element}</MemoryRouter>
    </Provider>
  );
  return { store, ...utils };
}

export function getStateWithItems(
  users: User[] = mockUsers,
  posts: PostsState = {
    status: 'idle',
    error: null,
    posts: mockPosts,
    count: 0
  }
): RootState {
  const state: RootState = {
    posts,
    users
  };
  return state;
}
