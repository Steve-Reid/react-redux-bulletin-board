import { sub } from 'date-fns';
import { Post } from '../../features/posts/postsSlice';

export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    body: "I've heard good things.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    userId: 1,
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
    }
  },
  {
    id: '2',
    title: 'Slices...',
    body: 'The more I say slice, the more I want pizza.',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    userId: 2,
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
    }
  }
];
