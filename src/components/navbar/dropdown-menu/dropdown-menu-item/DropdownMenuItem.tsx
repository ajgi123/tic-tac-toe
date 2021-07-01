import styles from "./DropdownMenuItem.module.scss";

type DropdownMenuItemProps = {
  name: any;
  onMouseEnterHandler: () => void;
  onClickHandler: () => void;
  isActive?: boolean;
};

const DropdownMenuItem = (props: DropdownMenuItemProps) => {
  const style = props.isActive
    ? `${styles.item} ${styles.active}`
    : styles.item;

  return (
    <div
      className={style}
      onMouseEnter={() => {
        props.onMouseEnterHandler();
      }}
      onClick={() => {
        props.onClickHandler();
      }}
    >
      {props.name}
    </div>
  );
};

export default DropdownMenuItem;
