import React, { ReactNode, useState, useEffect } from "react";
import { GameModesType } from "../types/game-mode-type";
import { localStorageService } from "../helpers/localStorageService";


export type GameModeContextType = {
  gameMode: GameModesType;
  setGameMode: (gameMode: GameModesType) => void;
};

const localStorageKey = "gameMode";

const initialGameMode = localStorageService.getItem<GameModesType>(
  localStorageKey,
  "Easy"
);

export const GameModeContext = React.createContext({
  gameMode: initialGameMode,
  setGameMode: (gameMode: GameModesType) => {},
});

type GameModeContextProviderType = {
  children: ReactNode;
};

const GameModeContextProvider = (props: GameModeContextProviderType) => {
  const [gameMode, setGameMode] = useState(initialGameMode);

  useEffect(() => {
    localStorageService.setItem(localStorageKey, gameMode);
  }, [gameMode]);

  const changeGameMode = (gameMode: GameModesType) => {
    setGameMode(gameMode);
  };

  return (
    <GameModeContext.Provider
      value={{ gameMode: gameMode, setGameMode: changeGameMode }}
    >
      {props.children}
    </GameModeContext.Provider>
  );
};

export default GameModeContextProvider;
