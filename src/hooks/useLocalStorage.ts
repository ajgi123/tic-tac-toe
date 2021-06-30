import { localStorageService } from "../helpers/localStorageService";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const initialiazeState = () => {
    const localData = localStorageService.getItem<T>(key, initialValue);
    return localData;
  };

  const [storedValue, setStoredValue] = useState<T>(initialiazeState);

  useEffect(() => {
    setStoredValue(initialiazeState);
  }, [key]);

  useEffect(() => {
    localStorageService.setItem(key, storedValue);
  }, [storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
