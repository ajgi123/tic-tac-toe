import styles from "./DropdownMenuItem.module.scss";

type DropdownMenuItemProps = {
  name: any;
  onMouseEnterHandler: () => void;
  onClickHandler: () => void;
};

const DropdownMenuItem = (props: DropdownMenuItemProps) => {
  return (
    <div
      className={styles.item}
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
