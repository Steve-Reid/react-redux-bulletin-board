import { screen } from '@testing-library/react';
import PostAuthor from '../../../components/PostAuthor';
import { renderWithContext } from '../../../test-utils';
import { mockUsers } from '../../../utils/fixtures/mockUsers';

test('should display the post author name', () => {
  const userId = mockUsers[0].id;
  renderWithContext(<PostAuthor userId={userId} />);
  screen.findByText(mockUsers[0].name);
});

test('should display "Unknown author", when userId not found', () => {
  const userId = 999;
  renderWithContext(<PostAuthor userId={userId} />);
  screen.findByText('Unknown author');
});
