import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RootState } from '../../../app/store';
import AddPostForm from '../../../components/AddPostForm';
import { renderWithContext } from '../../../test-utils';
import { mockPosts } from '../../../utils/fixtures/mockPosts';
import { mockUsers } from '../../../utils/fixtures/mockUsers';

describe('AddPostForm', () => {
  const cases = ['Add a New Post', 'Post Title', 'Author', 'Content'];

  test.each(cases)(
    'Should render the text %p in the component',
    (arg: string) => {
      renderWithContext(<AddPostForm />);
      screen.findByText(arg);
    }
  );

  test('save button should be disabled when an input is empty', async () => {
    const state: RootState = {
      users: mockUsers,
      posts: {
        status: 'succeeded',
        error: null,
        posts: mockPosts
      }
    };

    renderWithContext(<AddPostForm />, state);
    const button = await screen.findByRole('button', { name: 'Save Post' });

    const titleField = screen.getByLabelText(/Post Title:/i);
    userEvent.clear(titleField);
    userEvent.type(titleField, 'Unit Test 1');
    expect(button).toBeDisabled();

    await userEvent.selectOptions(screen.getByRole('combobox'), ['Steve Reid']);
    expect(
      screen.getByRole<HTMLOptionElement>('option', { name: 'Steve Reid' })
        .selected
    ).toBe(true);
    expect(button).toBeDisabled();

    const contentField = screen.getByLabelText(/Content:/i);
    await userEvent.clear(contentField);
    await userEvent.type(contentField, 'This is a test post');
    expect(button).not.toBeDisabled();
  });
});
