export const bindTrailingArgs = <T extends (...args: any) => ReturnType<T>>(
  func: T,
  ...boundArgs: Parameters<T>[number][]
) => {
  return (...args: Parameters<T>[number][]) => {
    const allArgs = [...args, ...boundArgs];
    return func(...allArgs);
  };
};
