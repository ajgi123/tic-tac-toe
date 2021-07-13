import { useMemo, useState, useEffect } from "react";
import { useHistory } from "react-router";
import useLocalStorage from "./useLocalStorage";

const usePagination = <T extends any[]>(
  howManymin: number,
  pageNum: string,
  path: string,
  arrayToPaginate: T
) => {
  const howManyInitialState = useMemo(() => {
    return {
      inputValue: howManymin,
      passedValue: howManymin,
    };
  }, [howManymin]);

  const [page, setPage] = useState(1);
  const [howMany, setHowMany] = useLocalStorage("howMany", howManyInitialState);

  let history = useHistory();

  useEffect(() => {
    if (howMany.passedValue !== howMany.inputValue) {
      const timeout = setTimeout(() => {
        setHowMany((prevState) => {
          return { ...prevState, passedValue: prevState.inputValue };
        });
        history.push(`${path}/1`);
      }, 500);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [howMany.inputValue, setHowMany, path, howMany.passedValue, history]);

  let max = 1;
  const startIndex = (page - 1) * howMany.passedValue;
  const endIndex = page * howMany.passedValue;

  max = Math.ceil(arrayToPaginate.length / howMany.passedValue);
  const paginatedArray = arrayToPaginate.slice(startIndex, endIndex) as T;

  useEffect(() => {
    if (isNaN(+pageNum) || +pageNum < 1) {
      history.push(`${path}/1`);
      return;
    }
    if (+pageNum > max) {
      history.push(`${path}/${max}`);
      return;
    }

    setPage(+pageNum);
  }, [pageNum, history, path, max]);

  const onChange = (value: number) => {
    setHowMany((prevState) => {
      return { ...prevState, inputValue: value };
    });
  };

  const clickHandler = (index: number) => {
    history.push(`${path}/${index}`);
  };

  const prevPage = () => {
    history.push(`${path}/${page - 1}`);
  };

  const nextPage = () => {
    history.push(`${path}/${page + 1}`);
  };

  return {
    paginatedArray,
    onChange,
    clickHandler,
    prevPage,
    nextPage,
    max,
    howMany,
    page,
  };
};

export default usePagination;
