import styles from './FormControls.css';
import classnames from 'classnames';

function FormControl({ label, children }) {
  const className = classnames(styles.FormControl, styles.LabelText);
  return (
    <label className={className}>
      {label}
      {children}
    </label>
  );
}

export function InputControl({ label, ...rest }) {
  return (
    <FormControl label={label}>
      <input {...rest} />
    </FormControl>
  );
}

export function TextAreaControl({ label, ...rest }) {
  return (
    <FormControl label={label}>
      <textarea {...rest} />
    </FormControl>
  );
}

export function SelectControl({
  label,
  children,
  placeholder,
  ...rest
}) {
  return (
    <FormControl label={label}>
      <select {...rest}>
        {placeholder && <option disabled>{placeholder}</option>}
        {children}
      </select>
    </FormControl>
  );
}

export function CheckboxControl({ legend, label, ...rest }) {
  return (
    <fieldset className={styles.CheckboxControl}>
      <legend className={styles.LabelText}>{legend}</legend>
      <label>
        <input type="checkbox" {...rest} />
        {label}
      </label>
    </fieldset>
  );
}

export function FormButton({children, ...rest}) {
  return <button className={styles.FormButton} {...rest}>{children}</button>;
}
