import { RootState } from '@app/store';
import { PostsState, selectAllPosts, selectPostById } from '@posts/postsSlice';
import { mockPosts } from '@utils/fixtures/mockPosts';

describe('Posts Selectors', () => {
  describe('selectAllPosts', () => {
    test('should return empty array with no posts', () => {
      const state: RootState = {
        users: [],
        posts: {
          status: 'succeeded',
          error: null,
          posts: []
        }
      };

      const result = selectAllPosts(state);
      expect(result).toEqual([]);
    });

    test('should return all posts', () => {
      const state: RootState = {
        users: [],
        posts: {
          status: 'succeeded',
          error: null,
          posts: mockPosts
        }
      };

      const result = selectAllPosts(state);
      expect(result.length).toEqual(2);
    });

    test('should return post when given a postId', () => {
      const state: RootState = {
        users: [],
        posts: {
          status: 'succeeded',
          error: null,
          posts: mockPosts
        }
      };

      const result = selectPostById(state, 2);
      expect(result?.id).toEqual(2);
      expect(result?.body).toEqual(mockPosts[1].body);
    });
  });
});
