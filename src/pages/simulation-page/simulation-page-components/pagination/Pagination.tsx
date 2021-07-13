import styles from "./Pagination.module.scss";
import Button from "../../../../components/atoms/button/Button";
import InputNumber from "../../../../components/atoms/input-number/InputNumber";
import usePagination from "../../../../hooks/usePagination";
import { ArrayElement } from "../../../../helpers/ArrayElement";
import { ReturnTypeSimulate } from "../../../../logic/simulate";
import { useParams } from "react-router";
import { ReactNode } from "react";

type PaginationPropsType = {
  path: string;
  array: ReturnTypeSimulate;
  mapFunction: (
    item: ArrayElement<ReturnTypeSimulate>,
    index: number
  ) => ReactNode;
};

const Pagination = (props: PaginationPropsType) => {
  let { pageNum } = useParams<{ pageNum: string }>();

  const {
    paginatedArray,
    onChange,
    clickHandler,
    prevPage,
    nextPage,
    max,
    howMany,
    page,
  } = usePagination(9, pageNum, props.path, props.array);

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
        {paginatedArray.map(props.mapFunction)}
      </div>
      <div className={styles.pagination_flex_div}>
        <Button onClick={prevPage} disabled={page === 1} name={`<<`} />
        {buttons}
        <Button onClick={nextPage} disabled={page === max} name={`>>`} />
      </div>
    </div>
  );
};

export default Pagination;
