import { localStorageService } from "../helpers/localStorageService";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const initialiazeState = useCallback(() => {
    const localData = localStorageService.getItem<T>(key, initialValue);
    return localData;
  }, [key, initialValue]);

  const [storedValue, setStoredValue] = useState<T>(initialiazeState);

  useEffect(() => {
    setStoredValue(initialiazeState);
  }, [initialiazeState]);

  useEffect(() => {
    localStorageService.setItem(key, storedValue);
  }, [storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
