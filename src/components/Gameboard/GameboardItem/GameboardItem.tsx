import styles from "./GameboardItem.module.scss";
import { CellKind } from "../../../global-types/celltype";

type GameboardItemProps = {
  cellFill: CellKind;
  index: number;
  winCombination: number[] | undefined;
  clickHandler: (index: number) => void;
};

const GameboardItem = (props: GameboardItemProps) => {
  const onClickHandler = () => {
    if (props.cellFill !== CellKind.Empty) return;
    props.clickHandler(props.index);
  };

  let style = styles.empty;

  if (props.cellFill === CellKind.Circle) {
    style = styles.circle;
  }

  if (props.cellFill === CellKind.Cross) {
    style = styles.cross;
  }

  if (props.winCombination && props.winCombination.includes(props.index)) {
    style = `${style} ${styles.winner}`;
  }

  if (props.winCombination && !props.winCombination.length) {
    style = `${style} ${styles.draw}`;
  }

  return (
    <div
      onClick={onClickHandler}
      className={`${styles.gameboard_item_div} ${style}`}
    ></div>
  );
};

export default GameboardItem;
