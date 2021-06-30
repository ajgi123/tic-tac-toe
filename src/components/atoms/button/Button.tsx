import styles from "./Button.module.scss";

type ButtonPropsType = {
  name: string;
  onClick: any;
  disabled?: boolean;
};

const Button = (props: ButtonPropsType) => {
  return (
    <button
      className={styles.button}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.name}
    </button>
  );
};

export default Button;
