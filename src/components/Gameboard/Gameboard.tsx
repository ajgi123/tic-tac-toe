import styles from "./Gameboard.module.scss";
import { CellKind } from "../../types/cellKind";
import GameboardItem from "./GameboardItem/GameboardItem";

type GameboardProps = {
  gameState: CellKind[];
  winCombination: number[] | undefined;
  clickHandler: (index: number) => void;
};

const Gameboard = (props: GameboardProps) => {
  const gridColumns = Math.sqrt(props.gameState.length);
  return (
    <div
      className={styles.gameboard_div}
      style={{
        gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
        gridTemplateRows: `repeat(${gridColumns}, 1fr)`,
      }}
    >
      {props.gameState.map((item, index) => {
        return (
          <GameboardItem
            key={index}
            index={index}
            cellFill={item}
            clickHandler={props.clickHandler}
            winCombination={props.winCombination}
          />
        );
      })}
    </div>
  );
};

export default Gameboard;
