import { useCallback, useMemo } from "react";
import useLocalStorage from "./useLocalStorage";

const useUndoRedo = <T extends any[]>(key: string, initialArray: T) => {
  const initialiazeState = useMemo(() => {
    return { array: initialArray, index: 0 };
  }, [initialArray]);

  const [history, setHistory] = useLocalStorage(key, initialiazeState);

  type ArrayItemType = typeof history.array[0];

  const addItemToHistory = useCallback(
    (item: ArrayItemType) => {
      setHistory((prevState) => {
        let array = [...prevState.array] as T;
        let index = prevState.index;
        if (index < array.length - 1) {
          array = array.slice(0, index + 1) as T;
          index = array.length - 1;
        }
        index++;
        array = [...array, [...item]] as T;
        return { array, index };
      });
    },
    [setHistory]
  );

  const resetHistory = useCallback(() => {
    setHistory(initialiazeState);
  }, [setHistory, initialiazeState]);

  const undo = () => {
    setHistory((prevState) => {
      return { ...prevState, index: prevState.index - 1 };
    });
  };

  const redo = () => {
    setHistory((prevState) => {
      return { ...prevState, index: prevState.index + 1 };
    });
  };

  return { undo, redo, addItemToHistory, history, setHistory, resetHistory };
};

export default useUndoRedo;
