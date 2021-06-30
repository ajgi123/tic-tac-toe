import { checkForWinner } from "./checkForWinner";
import { generateEmptyGameState } from "../helpers/generateEmptyGameState";
import { CellKind } from "../global-types/celltype";
import { miniMaxScope, randomAi } from "./AI";

export const simulate = (
  howMany: number,
  circleAi: string,
  crossAi: string
) => {
  let gameState = generateEmptyGameState(3);
  const games = [];
  for (let i = 0; i < howMany; i++) {
    let result;
    while (!result) {
      let firstMove =
        circleAi === "random"
          ? randomAi(gameState)
          : miniMaxScope(gameState, CellKind.Circle, CellKind.Cross);

      gameState[firstMove] = CellKind.Circle;
      result = checkForWinner(gameState);
      if (result) break;

      let secondMove =
        crossAi === "random"
          ? randomAi(gameState)
          : miniMaxScope(gameState, CellKind.Cross, CellKind.Circle);

      gameState[secondMove] = CellKind.Cross;
      result = checkForWinner(gameState);
    }
    games.push({ ...result, gameState: gameState });
    gameState = generateEmptyGameState(3);
  }
  return games;
};

export type ReturnTypeSimulate = ReturnType<typeof simulate>;
