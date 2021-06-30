import styles from "./AIvsAI.module.scss";
import Select from "../../../../components/atoms/select/Select";
import { useState, useEffect } from "react";
import { randomAi, miniMaxScope } from "../../../../logic/AI";
import Button from "../../../../components/atoms/button/Button";
import { bindTrailingArgs } from "../../../../helpers/bindTrailingArgs";
import { CellKind } from "../../../../types/cellKind";

const options = [
  { value: "random", label: "RandomAI" },
  { value: "miniMax", label: "MiniMax" },
];

type AIvsAIpropsType = {
  turn: CellKind;
  moveAI: (aiFunc: (gameState: CellKind[]) => number) => void;
  isWin: boolean;
};

const AIvsAI = ({ isWin, ...props }: AIvsAIpropsType) => {
  const [circleAi, setCircleAi] = useState(options[0].value);
  const [crossAi, setCrossAi] = useState(options[0].value);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      const timeOut = setTimeout(() => {
        console.log("time");
        let aiFunc = randomAi;
        if (props.turn === CellKind.Circle) {
          if (circleAi === "miniMax") {
            aiFunc = bindTrailingArgs(
              miniMaxScope,
              CellKind.Circle,
              CellKind.Cross
            );
          }
        }

        if (props.turn === CellKind.Cross) {
          if (crossAi === "miniMax") {
            aiFunc = bindTrailingArgs(
              miniMaxScope,
              CellKind.Cross,
              CellKind.Circle
            );
          }
        }
        console.log(aiFunc);
        props.moveAI(aiFunc);
      }, 400);
      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [isPlaying, props, circleAi, crossAi]);

  useEffect(() => {
    if (isWin) {
      setIsPlaying(false);
    }
  }, [isWin]);

  const selectCircleAi = (value: string) => {
    setCircleAi(value);
  };

  const selectCrossAi = (value: string) => {
    setCrossAi(value);
  };

  const onClickHandler = () => {
    setIsPlaying(true);
  };

  return (
    <div className={styles.aivsai_div}>
      <Select
        options={options}
        value={circleAi}
        onChange={selectCircleAi}
        name="Circle AI: "
      />
      <Select
        options={options}
        value={crossAi}
        onChange={selectCrossAi}
        name="Cross AI: "
      />
      <Button onClick={onClickHandler} name="Play" />
    </div>
  );
};

export default AIvsAI;
