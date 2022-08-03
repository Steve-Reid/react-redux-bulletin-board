import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';
import type { RootState } from '@app/store';

export interface PostState {
  id: string;
  title: string;
  content: string;
  date: string;
  reactions: {
    thumbsUp: number;
    wow: number;
    heart: number;
    rocket: number;
    coffee: number;
  };
}

const initialState: PostState[] = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: "I've heard good things.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
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
    content: 'The more I say slice, the more I want pizza.',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
    }
  }
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
});

export const selectAllPosts = (state: RootState) => state.posts;

// export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
