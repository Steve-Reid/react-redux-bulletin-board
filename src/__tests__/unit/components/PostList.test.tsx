import { screen } from '@testing-library/react';
import PostList from '../../../components/PostList';
import { renderWithContext } from '../../../test-utils';
import { mockPosts } from '../../../utils/fixtures/mockPosts';

test('should list several posts', () => {
  renderWithContext(<PostList />);
  const articles = screen.getAllByRole('article');
  expect(articles.length).toEqual(mockPosts.length);
});

test('Each individual post should contain a title', async () => {
  renderWithContext(<PostList />);
  mockPosts.map(async post => {
    await screen.findByRole('heading', { name: post.title });
  });
});
