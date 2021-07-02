import styles from "./HomePage.module.scss";
import { useState, useEffect, useContext, useCallback } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import Gameboard from "../../components/Gameboard/Gameboard";
import AbsoluteWrapper from "../../components/absolute-wrapper/AbsoluteWrapper";
import AIvsAI from "./home-page-components/AivsAi-mode/AivsAi";
import PvsP from "./home-page-components/PvsP-mode/PvsP";
import Easy from "./home-page-components/easy-mode/Easy";
import Button from "../../components/atoms/button/Button";
import { GameModeContext } from "../../context/gameMode-context";
import { miniMaxScope } from "../../logic/AI";
import { bindTrailingArgs } from "../../helpers/bindTrailingArgs";
import {
  checkForWinner,
  CheckForWinnerReturnType,
} from "../../logic/checkForWinner";
import { CellKind } from "../../types/cellKind";
import { generateEmptyGameState } from "../../helpers/generateEmptyGameState";

let initialState = {
  turn: CellKind.Circle,
  gameState: generateEmptyGameState(3),
};

type GameboardState = typeof initialState;

const HomePage = () => {
  const [win, setWin] = useState<CheckForWinnerReturnType | null>(null);
  const { gameMode } = useContext(GameModeContext);
  const [state, setState] = useLocalStorage<GameboardState>(
    gameMode,
    initialState
  );

  useEffect(() => {
    const winner = checkForWinner(state.gameState);
    if (winner || win) {
      setWin(winner);
    }
  }, [state.gameState, gameMode]);

  const move = useCallback(
    (index: number) => {
      if (win) return;
      setState((prevState) => {
        const changedGameboardState = [...prevState.gameState];

        changedGameboardState[index] = prevState.turn;

        let turn = CellKind.Circle;

        if (prevState.turn === CellKind.Circle) {
          turn = CellKind.Cross;
        }

        const curState: GameboardState = {
          turn: turn,
          gameState: changedGameboardState,
        };
        return curState;
      });
    },
    [win]
  );

  const aiMove = (aiFunc: (gameState: CellKind[]) => number) => {
    if (win) return;
    const index = aiFunc(state.gameState);
    move(index);
  };

  useEffect(() => {
    if (gameMode === "Hard" && state.turn === CellKind.Cross) {
      const timeout = setTimeout(() => {
        const bindedMinimax = bindTrailingArgs(
          miniMaxScope,
          CellKind.Cross,
          CellKind.Circle
        );
        aiMove(bindedMinimax);
      }, 300);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [state.turn, gameMode]);

  const humanMove = (index: number) => {
    if (gameMode === "AIvsAI") return;
    if (
      (gameMode === "Easy" || gameMode === "Hard") &&
      state.turn === CellKind.Cross
    )
      return;
    move(index);
  };

  const restartState = () => {
    setState((prevState) => {
      return {
        turn: CellKind.Circle,
        gameState: generateEmptyGameState(
          Math.sqrt(prevState.gameState.length)
        ),
      };
    });
    setWin(null);
  };

  const changeState = (gamestate: CellKind[]) => {
    if (win) return;
    setState({
      turn: CellKind.Circle,
      gameState: gamestate,
    });
  };

  const changeGridSize = (size: number) => {
    setState({ ...initialState, gameState: generateEmptyGameState(size) });
    setWin(null);
  };

  let turn: string | CellKind = state.turn;

  if (gameMode === "Easy" || gameMode === "Hard") {
    if (state.turn === CellKind.Cross) {
      turn = "AI";
    }

    if (state.turn === CellKind.Circle) {
      turn = "Your";
    }
  }

  let winText = "Winner: ";

  if (win) {
    winText = winText + win.winner;
    if (win.winner === CellKind.Empty) {
      winText = "Draw";
    }
  }

  return (
    <AbsoluteWrapper>
      <div className={styles.homepage}>
        {!win && <h1>{`${turn} turn`}</h1>}
        {win && <h1>{winText}</h1>}
        {gameMode === "PvsP" && (
          <PvsP
            onChange={changeGridSize}
            initialSize={Math.sqrt(state.gameState.length)}
          />
        )}
        {gameMode === "AIvsAI" && (
          <AIvsAI turn={state.turn} moveAI={aiMove} isWin={win !== null} />
        )}
        {gameMode === "Easy" && (
          <Easy
            gameState={state.gameState}
            turn={state.turn}
            moveAI={move}
            changeState={changeState}
            isWin={win !== null}
          />
        )}
        <div className={styles.homepage_div_gameboard}>
          <Gameboard
            gameState={state.gameState}
            winCombination={win?.winCombination}
            clickHandler={humanMove}
          />
        </div>
        {win && <Button onClick={restartState} name="Restart" />}
      </div>
    </AbsoluteWrapper>
  );
};

export default HomePage;
