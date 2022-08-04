import postsReducer, {
  Post,
  postAdded,
  reactionAdded
} from '../../../features/posts/postsSlice';
import { mockPosts } from '../../../utils/fixtures/mockPosts';

describe('posts reducer', () => {
  test('should return the initial state when passed an empty action', () => {
    const initialState: Post[] = [];
    const action = { type: '' };
    const result = postsReducer(initialState, action);
    expect(result).toEqual([]);
  });

  test('should add a post to state', () => {
    const initialState: Post[] = [];
    const action = postAdded(
      mockPosts[0].title,
      mockPosts[0].content,
      mockPosts[0].userId
    );
    const result = postsReducer(initialState, action);

    expect(result.length).toEqual(1);
  });

  test('should increment reaction count of a post in state', () => {
    const initialState: Post[] = [{ ...mockPosts[0] }];
    const action = reactionAdded({
      postId: mockPosts[0].id,
      reaction: 'thumbsUp'
    });
    const result = postsReducer(initialState, action);

    expect(result[0].reactions.thumbsUp).toEqual(1);
  });
});
