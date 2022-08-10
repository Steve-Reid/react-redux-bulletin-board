import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '@app/store';
import { BASE_URL } from '@utils/contstants';

const USERS_URL = `${BASE_URL}/users`;

export interface User {
  id: number;
  name: string;
}

export type UsersState = User[];

const initialState: User[] = [];

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(USERS_URL);
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => action.payload);
  }
});

export const selectAllUsers = (state: RootState) => state.users;

export default usersSlice.reducer;
