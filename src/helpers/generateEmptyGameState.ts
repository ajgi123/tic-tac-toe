import { CellKind } from "../types/cellKind";

export const generateEmptyGameState = (size: number) => {
  const length = size * size;
  const gameState = [];

  for (let i = 0; i < length; i++) {
    gameState.push(CellKind.Empty);
  }

  return gameState;
};
