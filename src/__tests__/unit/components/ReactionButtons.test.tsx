import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactionButtons from '../../../components/ReactionButtons'; // reactionEmoji
import { renderWithContext } from '../../../test-utils';
import { mockPosts } from '../../../utils/fixtures/mockPosts';

const reactionEmoji: { [key: string]: string } = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕'
};

test('should display all reaction buttons', async () => {
  const post = mockPosts[0];
  renderWithContext(<ReactionButtons post={post} />);
  Object.keys(reactionEmoji).map(async key => {
    await screen.findByRole('button', { name: reactionEmoji[key] });
  });
});
