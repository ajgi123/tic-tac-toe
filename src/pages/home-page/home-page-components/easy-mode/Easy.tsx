import { useEffect } from "react";
import { generateEmptyGameState } from "../../../../helpers/generateEmptyGameState";
import Button from "../../../../components/atoms/button/Button";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import { randomAi } from "../../../../logic/AI";
import { CellKind } from "../../../../types/cellKind";

type EasyPropsType = {
  gameState: CellKind[];
  turn: CellKind;
  moveAI: (index: number) => void;
  changeState: (gameState: CellKind[]) => void;
  isWin: boolean;
};

const initialState = {
  gameStates: [generateEmptyGameState(3)],
  index: 0,
};

const Easy = (props: EasyPropsType) => {
  const [history, setHistory] = useLocalStorage("history", initialState);

  useEffect(() => {
    if (props.isWin) {
      setHistory(initialState);
      return;
    }

    if (props.turn === CellKind.Cross) {
      const timeout = setTimeout(() => {
        const gameStateCopy = [...props.gameState];
        const indexMove = randomAi(props.gameState);
        gameStateCopy[indexMove] = CellKind.Cross;
        setHistory((prevState) => {
          let gameStates = [...prevState.gameStates];
          let index = prevState.index;
          if (index < gameStates.length - 1) {
            gameStates = gameStates.slice(0, prevState.index + 1);
            index = gameStates.length - 1;
          }
          index++;
          return {
            gameStates: [...gameStates, [...gameStateCopy]],
            index: index,
          };
        });
        props.moveAI(indexMove);
      }, 300);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [props.turn, props.isWin]);

  const undo = () => {
    props.changeState(history.gameStates[history.index - 1]);
    setHistory((prevState) => {
      return { ...prevState, index: prevState.index - 1 };
    });
  };

  const redo = () => {
    props.changeState(history.gameStates[history.index + 1]);
    setHistory((prevState) => {
      return { ...prevState, index: prevState.index + 1 };
    });
  };

  return (
    <div>
      <Button
        onClick={redo}
        disabled={history.index >= history.gameStates.length - 1 || props.isWin}
        name="REDO"
      />
      <Button
        onClick={undo}
        disabled={history.index <= 0 || props.isWin}
        name="UNDO"
      />
    </div>
  );
};

export default Easy;
