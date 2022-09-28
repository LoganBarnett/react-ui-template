import { render, screen } from '@testing-library/react';
import {
  CheckboxControl,
  FormButton,
  InputControl,
  SelectControl,
  TextAreaControl,
} from './FormControls.jsx';

test('Input Control', async () => {
  render(
    <InputControl
      label="User Name"
      name="username"
      required
      placeholder="Your user name"
    />
  );

  const inputControl = screen.getByLabelText('User Name');
  expect(inputControl.name).toBe('username');
  expect(inputControl.placeholder).toBe('Your user name');
  expect(inputControl.required).toBe(true);
});

test('TextArea Control', async () => {
  render(
    <TextAreaControl
      label="Bio"
      name="bio"
      required
      placeholder="about you"
    />
  );

  const textAreaControl = screen.getByLabelText('Bio');
  expect(textAreaControl.name).toBe('bio');
  expect(textAreaControl.required).toBe(true);
  expect(textAreaControl.placeholder).toBe('about you');
});

test('Select Control', async () => {
  render(
    <SelectControl label="Animal" name="animal" required>
      <option>Cat</option>
      <option>Dog</option>
      <option>Bird</option>
    </SelectControl>
  );

  const selectControl = screen.getByLabelText('Animal');
  expect(selectControl.name).toBe('animal');
  expect(selectControl.required).toBe(true);
  expect(selectControl.options.length).toBe(3);
});

test('Select Control with placeholder', async () => {
  render(
    <SelectControl label="Animal" placeholder="choose a pet">
      <option>Cat</option>
      <option>Dog</option>
      <option>Bird</option>
    </SelectControl>
  );

  const selectControl = screen.getByLabelText('Animal');
  expect(selectControl.options.length).toBe(4);
  const placeHolderOption = selectControl.options[0];
  expect(placeHolderOption.textContent).toBe('choose a pet');
  expect(placeHolderOption.disabled).toBe(true);
});

test('Checkbox Control', async () => {
  render(
    <CheckboxControl
      legend="Do you accept?"
      label="Yes"
      name="accept"
      required
    />
  );

  const legend = screen.getByText('Do you accept?');
  expect(legend).not.toBeNull();
  const checkboxControl = screen.getByLabelText('Yes');
  expect(checkboxControl.required).toBe(true);
});

test('Submit Button', async () => {
  render(<FormButton text="Submit Me" />);

  const button = screen.getByRole('button');
  expect(button.textContent).toBe('Submit Me');
});
