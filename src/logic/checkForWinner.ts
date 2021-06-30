import { GameState } from "../global-types/game-state-type";
import { CellKind } from "../global-types/celltype";

export const checkForWinner = (gameState: GameState) => {
  const lengthSqrt = Math.sqrt(gameState.length);

  const rowSet = new Set<CellKind>();
  const rowKeys: number[] = [];

  const columnSet = new Set<CellKind>();
  const columnKeys: number[] = [];

  const diagonalSet = new Set<CellKind>();
  const diagonalKeys: number[] = [];

  const checkForDrawSet = new Set<CellKind>();

  for (let i = 0; i < lengthSqrt; i++) {
    let indexDiagonal = i;
    for (let j = 0; j < lengthSqrt; j++) {
      let indexRow = i * lengthSqrt + j;
      let indexColumn = i + lengthSqrt * j;
      rowSet.add(gameState[indexRow]);
      rowKeys.push(indexRow);

      columnSet.add(gameState[indexColumn]);
      columnKeys.push(indexColumn);

      checkForDrawSet.add(gameState[indexRow]);

      if (i === 0) {
        diagonalSet.add(gameState[indexDiagonal]);
        diagonalKeys.push(indexDiagonal);
        indexDiagonal += lengthSqrt + 1;
      }

      if (i === lengthSqrt - 1) {
        diagonalSet.add(gameState[indexDiagonal]);
        diagonalKeys.push(indexDiagonal);
        indexDiagonal += lengthSqrt - 1;
      }
    }

    if (rowSet.size === 1 && !rowSet.has(CellKind.Empty)) {
      const winner: CellKind = rowSet.values().next().value;
      return { winner: winner, winCombination: rowKeys };
    }

    if (columnSet.size === 1 && !columnSet.has(CellKind.Empty)) {
      const winner: CellKind = columnSet.values().next().value;
      return { winner: winner, winCombination: columnKeys };
    }

    if (diagonalSet.size === 1 && !diagonalSet.has(CellKind.Empty)) {
      const winner: CellKind = diagonalSet.values().next().value;
      return { winner: winner, winCombination: diagonalKeys };
    }

    rowSet.clear();
    rowKeys.length = 0;

    columnSet.clear();
    columnKeys.length = 0;

    diagonalSet.clear();
    diagonalKeys.length = 0;
  }

  if (!checkForDrawSet.has(CellKind.Empty)) {
    return { winner: CellKind.Empty, winCombination: [] };
  }

  return null;
};

export type CheckForWinnerReturnType = ReturnType<typeof checkForWinner>;
