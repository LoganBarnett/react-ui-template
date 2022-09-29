import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import {
  CheckboxControl,
  FormButton,
  InputControl,
  SelectControl,
  TextAreaControl,
} from './FormControls.jsx';

function getValue(target) {
  return target.type === 'checkbox' ? target.checked : target.value;
}

function Test({ onSubmit }) {
  const [data, setData] = useState({});

  const handleChange = ({ target }) => {
    // console.log(target.name, target.value, target.checked);
    setData((data) => ({
      ...data,
      [target.name]: getValue(target),
    }));
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

      <SelectControl
        label="Animal"
        name="animal"
        value={data.animal}
        onChange={handleChange}
      >
        <option value="1">Cat</option>
        <option value="2">Dog</option>
        <option value="3">Bird</option>
      </SelectControl>

      <TextAreaControl
        label="Bio"
        name="bio"
        value={data.bio}
        onChange={handleChange}
      />

      <CheckboxControl
        label="Yes"
        name="accepted"
        value={data.accepted}
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

  // input text
  const input = screen.getByLabelText('User');
  await user.type(input, 'username');

  // select
  const selectControl = screen.getByLabelText('Animal');
  await user.selectOptions(selectControl, '2');

  // input text
  const textArea = screen.getByLabelText('Bio');
  await user.type(textArea, 'my bio');

  // checkbox
  const checkbox = screen.getByLabelText('Yes');
  await user.click(checkbox);

  // click button
  await user.click(screen.getByRole('button'));

  expect(handleSubmit).toHaveBeenCalledWith({
    user: 'username',
    animal: '2',
    bio: 'my bio',
    accepted: true,
  });
});
