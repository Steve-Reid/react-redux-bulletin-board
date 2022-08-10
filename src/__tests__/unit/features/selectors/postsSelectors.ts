import { RootState } from '@app/store';
import { PostsState, selectAllPosts } from '@posts/postsSlice';
import { mockPosts } from '@utils/fixtures/mockPosts';

describe('Posts Selectors', () => {
  describe('selectAllPosts', () => {
    test('should return empty array with no posts', () => {
      const posts: PostsState = {
        status: 'idle',
        error: '',
        posts: []
      };

      const result = selectAllPosts({ posts } as RootState);
      expect(result).toEqual([]);
    });

    test('should return all posts', () => {
      const posts: PostsState = {
        status: 'idle',
        error: '',
        posts: mockPosts
      };

      const result = selectAllPosts({ posts } as RootState);
      expect(result.length).toEqual(2);
    });
  });
});
