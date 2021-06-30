import styles from "./Select.module.scss";

type OptionValue = string | number;

type Option<T extends OptionValue> = {
  value: T;
  label: string;
};

type SelectProps<T extends OptionValue> = {
  options: Option<T>[];
  value: T;
  onChange: (value: string) => void;
  name?: string;
};
const Select = <T extends OptionValue>(props: SelectProps<T>) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChange(e.currentTarget.value);
  };
  return (
    <label className={styles.select_label}>
      {props.name}
      <select
        className={styles.select}
        value={props.value}
        onChange={handleOnChange}
      >
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
