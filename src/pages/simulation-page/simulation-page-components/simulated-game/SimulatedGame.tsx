import styles from "./SimulatedGame.module.scss";
import { CellKind } from "../../../../types/cellKind";
import Gameboard from "../../../../components/Gameboard/Gameboard";

type SimulatedGamePropsType = {
  gameState: CellKind[];
  winCombination: number[] | undefined;
  index: number;
  winner: CellKind;
};

const SimulatedGame = (props: SimulatedGamePropsType) => {
  let result = `${props.winner} won`;

  if (props.winner === CellKind.Empty) {
    result = "Draw";
  }

  return (
    <div className={styles.simulated_game}>
      <h1>{`Game: ${props.index}`}</h1>
      <h2>{`Result: ${result}`}</h2>
      <div className={styles.simulated_game_gameboard_div}>
        <Gameboard
          gameState={props.gameState}
          winCombination={props.winCombination}
          clickHandler={() => {}}
        />
      </div>
    </div>
  );
};

export default SimulatedGame;
