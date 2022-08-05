import postsReducer, {
  PostsState,
  postAdded,
  reactionAdded
} from '../../../features/posts/postsSlice';
import { mockPosts } from '../../../utils/fixtures/mockPosts';

describe('posts reducer', () => {
  test('should return the initial state when passed an empty action', () => {
    const initialState: PostsState = {
      status: 'idle',
      error: null,
      posts: []
    };
    const action = { type: '' };
    const result = postsReducer(initialState, action);
    expect(result.posts).toEqual([]);
  });

  test('should add a post to state', () => {
    const initialState: PostsState = {
      status: 'idle',
      error: null,
      posts: []
    };
    const action = postAdded(
      mockPosts[0].title,
      mockPosts[0].body,
      mockPosts[0].userId
    );
    const result = postsReducer(initialState, action);

    expect(result.posts.length).toEqual(1);
  });

  test('should increment reaction count of a post in state', () => {
    const initialState: PostsState = {
      status: 'idle',
      error: null,
      posts: [{ ...mockPosts[0] }]
    };
    const action = reactionAdded({
      postId: mockPosts[0].id,
      reaction: 'thumbsUp'
    });
    const result = postsReducer(initialState, action);

    expect(result.posts[0].reactions.thumbsUp).toEqual(1);
  });
});
