export const booleanFilter = <T>(
  val: T
): val is Exclude<T, boolean | undefined> => Boolean(val);
