import { ReactNode } from "react";
import styles from "./AbsoluteWrapper.module.scss";

type AbsoluteWrapperProps = {
  children: ReactNode;
};

const AbsoluteWrapper = (props: AbsoluteWrapperProps) => {
  return <div className={styles.absolute_wrap_div}>{props.children}</div>;
};

export default AbsoluteWrapper;
