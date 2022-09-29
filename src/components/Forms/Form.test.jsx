import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import {
  CheckboxControl,
  FormButton,
  InputControl,
  LabelText,
  SelectControl,
  TextAreaControl,
} from './FormControls.jsx';

function Test({ onSubmit }) {
  const [data, setData] = useState({});

  const handleChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputControl
        name="user"
        label="User"
        value={data.user || ''}
        onChange={handleChange}
      />

      <FormButton>Submit</FormButton>
    </form>
  );
}

test('Control changes update data', async () => {
  const user = userEvent.setup();

  // use a jest mock function to track what onSubmit returned
  const handleSubmit = jest.fn();

  render(<Test onSubmit={handleSubmit} />);

  const input = screen.getByLabelText('User');
  await user.type(input, 'username');

  // click button
  await user.click(screen.getByRole('button'));

  expect(handleSubmit).toHaveBeenCalledWith({
    user: 'username',
  });
});
