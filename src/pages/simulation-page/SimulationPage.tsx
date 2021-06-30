import styles from "./SimulationPage.module.scss";
import { useState } from "react";
import SimulatedGame from "./simulation-page-components/simulated-game/SimulatedGame";
import AbsoluteWrapper from "../../components/absolute-wrapper/AbsoluteWrapper";
import { ReturnTypeSimulate } from "../../logic/simulate";
import Button from "../../components/atoms/button/Button";
import InputNumber from "../../components/atoms/input-number/InputNumber";
import Select from "../../components/atoms/select/Select";
import Loading from "../../components/atoms/loading/Loading";
import { wrap } from "comlink";
import { PieChart } from "react-minimal-pie-chart";
import { CellKind } from "../../types/cellKind";

const numberInput = {
  min: 1,
  max: 50,
  step: 1,
};

const options = [
  { value: "random", label: "RandomAI" },
  { value: "miniMax", label: "MiniMax" },
];

const SimulationPage = () => {
  const [simulatedGames, setSimulatedGames] =
    useState<null | ReturnTypeSimulate>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [circleAi, setCircleAi] = useState(options[0].value);
  const [crossAi, setCrossAi] = useState(options[0].value);
  const [number, setNumber] = useState(numberInput.min);

  const onClickHandler = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const worker = new Worker("../../worker", {
      name: "simulateWorker",
      type: "module",
    });
    const { simulate } = wrap<import("../../worker").SimulateWorker>(worker);
    const games = await simulate(number, circleAi, crossAi);
    setSimulatedGames(games);
    setIsLoading(false);
  };

  const selectCircleAi = (value: string) => {
    setCircleAi(value);
  };

  const selectCrossAi = (value: string) => {
    setCrossAi(value);
  };

  const changeNumber = (value: number) => {
    setNumber(value);
  };

  let data: [number, number, number];

  if (simulatedGames) {
    data = simulatedGames.reduce<[number, number, number]>(
      (resArray, game) => {
        if (game.winner === CellKind.Empty) {
          resArray[0]++;
        }
        if (game.winner === CellKind.Circle) {
          resArray[1]++;
        }
        if (game.winner === CellKind.Cross) {
          resArray[2]++;
        }
        return resArray;
      },
      [0, 0, 0]
    );
  }

  return (
    <AbsoluteWrapper>
      <div className={styles.simulation_page}>
        <div className={styles.simulation_page_grid_div}>
          <Select
            options={options}
            value={circleAi}
            onChange={selectCircleAi}
            name="Circle AI:"
          />
          <Select
            options={options}
            value={crossAi}
            onChange={selectCrossAi}
            name="Cross AI:"
          />
          <InputNumber
            min={numberInput.min}
            max={numberInput.max}
            step={numberInput.step}
            value={number}
            onChange={changeNumber}
            name="Number of simulation:"
          />
          <Button onClick={onClickHandler} name="Simulate" />
        </div>
        {isLoading && <Loading name="SIMULATING..." />}
        {data!! && (
          <div className={styles.simulation_pie_div}>
            <PieChart
              data={[
                { title: "Draw", value: data[0], color: "#E9B5B4" },
                { title: "Circle", value: data[1], color: "#A5A6BC" },
                { title: "Cross", value: data[2], color: "#BBD0BA" },
              ]}
              label={({ dataEntry }) => {
                if (dataEntry.value > 0) {
                  return `${dataEntry.title} ${dataEntry.value}`;
                }
              }}
              labelStyle={{
                fontSize: "0.35rem",
                fontFamily: "inherit",
              }}
              animate={true}
              labelPosition={50}
            />
          </div>
        )}
        <div className={styles.simulation_page_grid_div}>
          {simulatedGames?.map((game, index) => {
            return (
              <SimulatedGame
                gameState={game.gameState}
                winCombination={game.winCombination}
                index={index + 1}
                winner={game.winner}
              />
            );
          })}
        </div>
      </div>
    </AbsoluteWrapper>
  );
};

export default SimulationPage;
