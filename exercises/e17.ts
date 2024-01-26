export const minBy = <Type>(
  array: Type[],
  cb: (element: Type) => number | string
) => {
  let min;
  if (array[0]) {
    min = array[0];
    for (const element of array) {
      if (cb(element) < cb(min)) {
        min = element;
      }
    }
    return min;
  } else {
    return undefined;
  }
};

export function maxBy<Type>(
  array: Type[],
  cb: (element: Type) => number | string
) {
  let max;
  if (array[0]) {
    max = array[0];
    for (const element of array) {
      if (cb(element) > cb(max)) {
        max = element;
      }
    }
    return max;
  } else {
    return undefined;
  }
}
