import styles from "./NavbarItem.module.scss";

import { useState } from "react";
import { Link } from "react-router-dom";

type NavbarItemProps = {
  name: string;
  route: string;
  children: JSX.Element;
};

const NavbarItem = (props: NavbarItemProps) => {
  const [open, setOpen] = useState(false);

  const onMouseEnterHandler = () => {
    setOpen(true);
  };

  const onMouseLeaveHandler = () => {
    setOpen(false);
  };
  return (
    <li
      className={styles.nav_item}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <Link to={props.route} className={styles.nav_item_button}>
        {props.name}
      </Link>
      {open && props.children}
    </li>
  );
};

export default NavbarItem;
