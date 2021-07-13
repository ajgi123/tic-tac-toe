import { useEffect, useRef } from "react";
import { generateEmptyGameState } from "../../../../helpers/generateEmptyGameState";
import Button from "../../../../components/atoms/button/Button";
import { randomAi } from "../../../../logic/AI";
import useUndoRedo from "../../../../hooks/useUndoRedo";
import { CellKind } from "../../../../types/cellKind";

type EasyPropsType = {
  gameState: CellKind[];
  turn: CellKind;
  changeState: (gameState: CellKind[]) => void;
  isWin: boolean;
};

const initialState = [generateEmptyGameState(3)];

const Easy = ({ gameState, turn, changeState, isWin }: EasyPropsType) => {
  const { history, undo, redo, resetHistory, addItemToHistory } = useUndoRedo(
    "history",
    initialState
  );
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    }

    changeState(history.array[history.index]);
  }, [history.index, history.array, changeState]);

  useEffect(() => {
    if (isWin) {
      resetHistory();
      return;
    }

    if (turn === CellKind.Cross) {
      const timeout = setTimeout(() => {
        const gameStateCopy = [...gameState];
        const indexMove = randomAi(gameState);
        gameStateCopy[indexMove] = CellKind.Cross;
        addItemToHistory(gameStateCopy);
      }, 300);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [turn, isWin, gameState, resetHistory, addItemToHistory]);

  return (
    <div>
      <Button
        onClick={redo}
        disabled={history.index >= history.array.length - 1 || isWin}
        name="REDO"
      />
      <Button
        onClick={undo}
        disabled={history.index <= 0 || isWin}
        name="UNDO"
      />
    </div>
  );
};

export default Easy;
