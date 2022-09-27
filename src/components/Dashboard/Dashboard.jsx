import styles from './Dashboard.css';

export default function Dashboard() {
  return (
    <div className={styles.Dashboard}>
      <form>
        <label>
          Name
          <input name="name" placeholder="your name" />
        </label>

        <label>
          Date
          <input
            required
            type="date"
            name="date"
            placeholder="pick a date"
          />
        </label>

        <label>
          Option
          <select required>
            <option disabled selected value="">
              Select an Option...
            </option>
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
          </select>
        </label>

        <label>
          Bio
          <textarea name="bio" placeholder="tell us about yourself" />
        </label>

        <fieldset>
          <legend>Do you accept?</legend>
          <label className={styles.OptionLabel}>
            <input type="checkbox" />
            Yes
          </label>
        </fieldset>

        <button>Submit</button>
      </form>
    </div>
  );
}
