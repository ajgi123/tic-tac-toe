import styles from "./Pagination.module.scss";
import SimulatedGame from "../simulated-game/SimulatedGame";
import Button from "../../../../components/atoms/button/Button";
import InputNumber from "../../../../components/atoms/input-number/InputNumber";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import { ReturnTypeSimulate } from "../../../../logic/simulate";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";

type PaginationPropsType = {
  path: string;
  games: ReturnTypeSimulate | null;
};

const Pagination = (props: PaginationPropsType) => {
  const [page, setPage] = useState(1);
  const [howMany, setHowMany] = useLocalStorage("howMany", {
    inputValue: 9,
    pasedValue: 9,
  });
  let history = useHistory();
  let { pageNum } = useParams<{ pageNum: string }>();

  useEffect(() => {
    if (!props.games) {
      history.replace(props.path);
    }
  }, [props.games]);

  useEffect(() => {
    if (howMany.pasedValue !== howMany.inputValue) {
      const timeout = setTimeout(() => {
        setHowMany((prevState) => {
          return { ...prevState, pasedValue: prevState.inputValue };
        });
        history.push(`${props.path}/1`);
      }, 500);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [howMany.inputValue]);

  let max = 1;
  const startIndex = (page - 1) * howMany.pasedValue;
  const endIndex = page * howMany.pasedValue;

  let array: ReturnTypeSimulate = [];

  if (props.games) {
    max = Math.ceil(props.games.length / howMany.pasedValue);
    array = props.games.slice(startIndex, endIndex);
  }

  useEffect(() => {
    if (isNaN(+pageNum) || +pageNum < 1) {
      history.push(`${props.path}/1`);
      return;
    }
    if (+pageNum > max) {
      history.push(`${props.path}/${max}`);
      return;
    }

    setPage(+pageNum);
  }, [pageNum]);

  const onChange = (value: number) => {
    setHowMany((prevState) => {
      return { ...prevState, inputValue: value };
    });
  };

  const clickHandler = (index: number) => {
    history.push(`${props.path}/${index}`);
  };

  const prevPage = () => {
    history.push(`${props.path}/${page - 1}`);
  };

  const nextPage = () => {
    history.push(`${props.path}/${page + 1}`);
  };

  const buttons = [];

  for (let i = 1; i <= max; i++) {
    let button = (
      <Button
        onClick={() => [clickHandler(i)]}
        key={i}
        disabled={page === i}
        name={`${i}`}
      />
    );
    buttons.push(button);
  }

  return (
    <div className={styles.pagination}>
      <InputNumber
        min={9}
        max={15}
        step={1}
        value={howMany.inputValue}
        onChange={onChange}
        name={"Numbers of games per page"}
      />
      <div className={styles.pagination_grid_div}>
        {array.map((game, index) => {
          return (
            <SimulatedGame
              gameState={game.gameState}
              winCombination={game.winCombination}
              index={index + 1 + startIndex}
              winner={game.winner}
              key={index + startIndex}
            />
          );
        })}
      </div>
      <div>
        <Button onClick={prevPage} disabled={page === 1} name={`<<`} />
        {buttons}
        <Button onClick={nextPage} disabled={page === max} name={`>>`} />
      </div>
    </div>
  );
};

export default Pagination;
