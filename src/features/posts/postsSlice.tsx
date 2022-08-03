import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { sub } from 'date-fns';
import type { RootState } from '@app/store';

export interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  userId: string;
  reactions: {
    thumbsUp: number;
    wow: number;
    heart: number;
    rocket: number;
    coffee: number;
  };
}

const initialState: Post[] = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: "I've heard good things.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    userId: '1',
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
    userId: '2',
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
  reducers: {
    postAdded: {
      reducer: (state, action: PayloadAction<Post>) => {
        state.push(action.payload);
      },
      prepare: (title, content, userId) => ({
        payload: {
          id: nanoid(),
          title,
          content,
          date: new Date().toISOString(),
          userId,
          reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
          }
        }
      })
    }
  }
});

export const selectAllPosts = (state: RootState) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
