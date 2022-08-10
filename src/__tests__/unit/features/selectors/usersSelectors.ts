import { RootState } from '@app/store';
import { UsersState, selectAllUsers } from '@users/usersSlice';
import { mockUsers } from '@utils/fixtures/mockUsers';

describe('Users Selectors', () => {
  describe('selectAllUsers', () => {
    test('should return empty array with no users', () => {
      const users: UsersState = [];

      const result = selectAllUsers({ users } as RootState);
      expect(result).toEqual([]);
    });

    test('should return all users', () => {
      const users: UsersState = mockUsers;

      const result = selectAllUsers({ users } as RootState);
      expect(result.length).toEqual(3);
    });
  });
});
