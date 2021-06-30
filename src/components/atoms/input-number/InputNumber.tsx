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

const InputNumber = (props: InputNumberPropsType) => {
  useEffect(() => {
    let inputNumber = props.value;

    if (inputNumber > props.max || inputNumber < props.min) {
      inputNumber = inputNumber > props.max ? props.max : props.min;
      const timeout = setTimeout(() => {
        props.onChange(inputNumber);
      }, 200);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [props.value]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputNumber = +e.currentTarget.value;
    props.onChange(inputNumber);
  };

  return (
    <label className={styles.input_label}>
      {props.name}
      <input
        className={styles.input}
        type="number"
        value={props.value}
        onChange={onChangeHandler}
        min={props.min}
        max={props.max}
        step={props.step}
      ></input>
    </label>
  );
};

export default InputNumber;
