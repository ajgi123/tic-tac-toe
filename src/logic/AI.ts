import { CellKind } from "../types/cellKind";
import { checkForWinner } from "./checkForWinner";

const getRandomIntInclusive = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getEmptySpotsArray = (gameState: CellKind[]) => {
  return gameState.reduce<number[]>((prevVal, curVal, index) => {
    if (curVal === CellKind.Empty) {
      prevVal.push(index);
      return prevVal;
    }
    return prevVal;
  }, []);
};

export const randomAi = (gameState: CellKind[]) => {
  const emptySpotsArray = getEmptySpotsArray(gameState);

  const index = getRandomIntInclusive(0, emptySpotsArray.length - 1);

  return emptySpotsArray[index];
};

export const miniMaxScope = (
  gameState: CellKind[],
  aiPlayer: CellKind,
  opponent: CellKind
): number => {
  const miniMax = (
    gameState: CellKind[],
    player: CellKind,
    memo: any = {}
  ): { score: number; index: number } => {
    const target = JSON.stringify(gameState);

    if (target in memo) {
      return memo[target];
    }

    const emptySpotsArray = getEmptySpotsArray(gameState);

    const winner = checkForWinner(gameState);

    if (winner) {
      if (winner.winner === aiPlayer) {
        const result = { score: 10, index: -1 };
        memo[target] = result;
        return result;
      }

      if (winner.winner === opponent) {
        const result = { score: -10, index: -1 };
        memo[target] = result;
        return result;
      }

      if (winner.winner === CellKind.Empty) {
        const result = { score: 0, index: -1 };
        memo[target] = result;
        return result;
      }
    }

    const moves: { index: number; score: number }[] = emptySpotsArray.map(
      (item) => {
        const move: { index: number; score: number } = {
          index: item,
          score: 0,
        };

        const currentGameState = gameState.map((item, index) => {
          if (index === move.index) {
            return player;
          }
          return item;
        });

        if (player === aiPlayer) {
          move.score = miniMax(currentGameState, opponent).score;
        }

        if (player === opponent) {
          move.score = miniMax(currentGameState, aiPlayer).score;
        }

        return move;
      }
    );

    let bestMove = moves[0];

    if (player === aiPlayer) {
      bestMove = moves.reduce((item, curValue) => {
        return item.score > curValue.score ? item : curValue;
      }, moves[0]);
    }

    if (player === opponent) {
      bestMove = moves.reduce((item, curValue) => {
        return item.score < curValue.score ? item : curValue;
      }, moves[0]);
    }
    memo[target] = bestMove;
    return bestMove;
  };

  return miniMax(gameState, aiPlayer).index;
};
