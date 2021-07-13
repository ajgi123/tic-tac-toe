import styles from "./SimulationPage.module.scss";
import React, { useState } from "react";
import Pagination from "./simulation-page-components/pagination/Pagination";
import AbsoluteWrapper from "../../components/absolute-wrapper/AbsoluteWrapper";
import { ReturnTypeSimulate } from "../../logic/simulate";
import Button from "../../components/atoms/button/Button";
import InputNumber from "../../components/atoms/input-number/InputNumber";
import Select from "../../components/atoms/select/Select";
import Loading from "../../components/atoms/loading/Loading";
import SimulatedGame from "./simulation-page-components/simulated-game/SimulatedGame";
import useLocalStorage from "../../hooks/useLocalStorage";
import { ArrayElement } from "../../helpers/ArrayElement";
import { wrap } from "comlink";
import { PieChart } from "react-minimal-pie-chart";
import { CellKind } from "../../types/cellKind";
import {
  useHistory,
  useRouteMatch,
  Switch,
  Route,
  useLocation,
  Redirect,
} from "react-router-dom";

const numberInput = {
  min: 1,
  max: 50,
  step: 1,
};

const options = [
  { value: "random", label: "RandomAI" },
  { value: "miniMax", label: "MiniMax" },
];

const initialInputState = {
  circleAi: options[0].value,
  crossAi: options[0].value,
  number: numberInput.min,
};

const mapSimGames = (game: ArrayElement<ReturnTypeSimulate>, index: number) => {
  return (
    <SimulatedGame
      gameState={game.gameState}
      winCombination={game.winCombination}
      index={game.index}
      winner={game.winner}
      key={index}
    />
  );
};

const SimulationPage = () => {
  const [simulatedGames, setSimulatedGames] =
    useLocalStorage<null | ReturnTypeSimulate>("simGame", null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputsState, setInputsState] = useLocalStorage(
    "inputState",
    initialInputState
  );
  let { pathname } = useLocation();
  let { path } = useRouteMatch();
  let history = useHistory();

  const onClickHandler = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const worker = new Worker("../../worker", {
      name: "simulateWorker",
      type: "module",
    });
    const { simulate } = wrap<import("../../worker").SimulateWorker>(worker);
    const games = await simulate(
      inputsState.number,
      inputsState.circleAi,
      inputsState.crossAi
    );
    setSimulatedGames(games);
    setIsLoading(false);
    history.push(`${path}/1`);
  };

  const selectCircleAi = (value: string) => {
    setInputsState((prevState) => {
      return { ...prevState, circleAi: value };
    });
  };

  const selectCrossAi = (value: string) => {
    setInputsState((prevState) => {
      return { ...prevState, crossAi: value };
    });
  };

  const changeNumber = (value: number) => {
    setInputsState((prevState) => {
      return { ...prevState, number: value };
    });
  };

  const showHideGames = () => {
    if (pathname === path) {
      history.push(`${path}/1`);
      return;
    }

    history.push(`${path}`);
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
            value={inputsState.circleAi}
            onChange={selectCircleAi}
            name="Circle AI:"
          />
          <Select
            options={options}
            value={inputsState.crossAi}
            onChange={selectCrossAi}
            name="Cross AI:"
          />
          <InputNumber
            min={numberInput.min}
            max={numberInput.max}
            step={numberInput.step}
            value={inputsState.number}
            onChange={changeNumber}
            name="Number of simulation:"
          />
          <Button onClick={onClickHandler} name="Simulate" />
        </div>
        {isLoading && <Loading name="SIMULATING..." />}
        {data!! && (
          <React.Fragment>
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
            <Button
              name={path === pathname ? "Show Games" : "Hide Games"}
              onClick={showHideGames}
            />
          </React.Fragment>
        )}
        <Switch>
          <Route
            path={`${path}/:pageNum`}
            render={(props) => {
              if (simulatedGames) {
                return (
                  <Pagination
                    {...props}
                    path={path}
                    array={simulatedGames}
                    mapFunction={mapSimGames}
                  />
                );
              }
              return <Redirect to={path} />;
            }}
          />
        </Switch>
      </div>
    </AbsoluteWrapper>
  );
};

export default SimulationPage;
