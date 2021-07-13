import { useEffect, useState, Dispatch } from "react";

const useStateRelatedToProp = <T>(
  prop: T
): [T, Dispatch<React.SetStateAction<T>>] => {
  const [state, setState] = useState(prop);

  useEffect(() => {
    setState(prop);
  }, [prop]);

  return [state, setState];
};

export default useStateRelatedToProp;
