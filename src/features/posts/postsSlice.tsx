import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { sub } from 'date-fns';
import type { RootState } from '@app/store';

type PostReactions = {
  thumbsUp: number;
  wow: number;
  heart: number;
  rocket: number;
  coffee: number;
};

export interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  userId: string;
  reactions: PostReactions;
}

export interface PostsState {
  posts: Post[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: null;
}

interface Reaction {
  postId: string;
  reaction: string;
}

const initialState: PostsState = {
  posts: [],
  status: 'idle',
  error: null
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action: PayloadAction<Post>) => {
        state.posts.push(action.payload);
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
    },
    reactionAdded: (state, action: PayloadAction<Reaction>) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find(post => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction as keyof PostReactions] += 1;
      }
    }
  }
});

export const selectAllPosts = (state: RootState) => state.posts.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
