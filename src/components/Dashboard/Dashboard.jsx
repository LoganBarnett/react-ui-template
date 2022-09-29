import {
  CheckboxControl,
  FormButton,
  InputControl,
  SelectControl,
  TextAreaControl,
} from '../Forms/FormControls.jsx';
import { useForm } from '../Forms/useForm.js';
import styles from './Dashboard.css';

export default function Dashboard() {
  const [data, handleChange] = useForm();

  return (
    <div className={styles.Dashboard}>
      <form>
        <InputControl
          label="Name"
          name="name"
          placeholder="your name"
          required
          value={data.name || ''}
          onChange={handleChange}
        />

        <InputControl
          label="Date"
          required
          type="date"
          name="date"
          placeholder="pick a date"
          value={data.date || ''}
          onChange={handleChange}
        />

        <SelectControl
          label="Letter"
          required
          name="letter"
          placeholder="select a letter"
          value={data.letter || ''}
          onChange={handleChange}
        >
          <option value="1">A</option>
          <option value="2">B</option>
          <option value="3">C</option>
        </SelectControl>

        <TextAreaControl
          label="Bio"
          name="bio"
          placeholder="tell us about yourself"
          value={data.bio || ''}
          onChange={handleChange}
        />

        <CheckboxControl
          legend="Do you accept?"
          label="Yes"
          name="accepted"
          checked={data.accepted || false}
          onChange={handleChange}
        />

        <FormButton>Submit</FormButton>
      </form>
      <pre>{JSON.stringify(data, true, 2)}</pre>
    </div>
  );
}
