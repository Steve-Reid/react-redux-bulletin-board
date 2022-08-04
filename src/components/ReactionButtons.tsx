import { reactionAdded, Post } from '@features/posts/postsSlice';
import { useAppDispatch } from '@app/hooks';

export const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕'
};

interface ReactionButtonsProps {
  post: Post;
}

const ReactionButtons = ({ post }: ReactionButtonsProps) => {
  const dispatch = useAppDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
    <button
      key={name}
      type="button"
      className="reactionButton"
      onClick={() =>
        dispatch(reactionAdded({ postId: post.id, reaction: name }))
      }
    >
      {emoji} {post.reactions[name as keyof typeof reactionEmoji]}
    </button>
  ));

  return <div>{reactionButtons}</div>;
};
export default ReactionButtons;
