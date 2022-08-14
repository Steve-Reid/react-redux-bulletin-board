import { screen, waitFor } from '@testing-library/react';
import { RootState } from '../../../app/store';
import PostList from '../../../components/PostList';
import { renderWithContext } from '../../../test-utils';
import { mockPosts } from '../../../utils/fixtures/mockPosts';

test('should list several posts', async () => {
  const state: RootState = {
    users: [],
    posts: {
      status: 'succeeded',
      error: null,
      posts: mockPosts,
      count: 0
    }
  };

  renderWithContext(<PostList />, state);
  const articles = screen.getAllByRole('article');

  await waitFor(() => expect(articles.length).toEqual(mockPosts.length));
});

test('Each individual post should contain a title', async () => {
  renderWithContext(<PostList />);
  mockPosts.map(async post => {
    await screen.findByRole('heading', { name: post.title });
  });
});
