import styles from "./DropdownMenu.module.scss";
import { ReactNode } from "react";

type DropdownMenuPropsType = {
  info: string;
  children: ReactNode;
};

const DropdownMenu = (props: DropdownMenuPropsType) => {
  return (
    <div className={styles.dropdown_menu}>
      <ul className={styles.dropdown_menu_ul}>{props.children}</ul>
      <p className={styles.dropdown_menu_p}>{props.info}</p>
    </div>
  );
};

export default DropdownMenu;
