import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@app/store';

export interface User {
  id: string;
  name: string;
}

const initialState: User[] = [
  { id: '0', name: 'Arty Fischel' },
  { id: '1', name: 'Harry Balzack' },
  { id: '2', name: 'Steve Reid' }
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
});

export const selectAllUsers = (state: RootState) => state.users;

export default usersSlice.reducer;
