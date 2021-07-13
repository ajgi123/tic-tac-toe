import { useEffect } from "react";
import styles from "./InputNumber.module.scss";

type InputNumberPropsType = {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  name?: string;
};

const InputNumber = ({
  value,
  onChange,
  min,
  max,
  step,
  name,
}: InputNumberPropsType) => {
  useEffect(() => {
    let inputNumber = value;

    if (inputNumber > max || inputNumber < min) {
      inputNumber = inputNumber > max ? max : min;
      const timeout = setTimeout(() => {
        onChange(inputNumber);
      }, 200);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [value]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputNumber = +e.currentTarget.value;
    onChange(inputNumber);
  };

  return (
    <label className={styles.input_label}>
      {name}
      <input
        className={styles.input}
        type="number"
        value={value}
        onChange={onChangeHandler}
        min={min}
        max={max}
        step={step}
      ></input>
    </label>
  );
};

export default InputNumber;
