import { GameModesType } from "../global-types/game-mode-type";

export type GameModeInfoType = {
  [Mode in GameModesType]: string;
};

export const GameModeInfo: GameModeInfoType = {
  PvsP: "Play against a friend on 3x3 to 5x5 board",
  AIvsAI: "Watch AI play against other AI",
  Easy: "Play against random AI. You can undo your moves",
  Hard: "Play against unbeatable AI",
};
