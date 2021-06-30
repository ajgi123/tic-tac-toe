export const typedObjectKeys = <T>(object: T) => {
  type Keys = keyof typeof object;
  let k: Keys;
  let arr: Keys[] = [];
  for (k in object) {
    arr = [...arr, k];
  }
  return arr;
};
