function FormControl({ label, children }) {
  return (
    <label>
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

export function  CheckboxControl({}){
    return 
    <fieldset>
      <legend>Do you accept?</legend>
      <label className={styles.OptionLabel}>
        <input type="checkbox" />
        Yes
      </label>
    </fieldset>
})
