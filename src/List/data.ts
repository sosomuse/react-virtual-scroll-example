const DATA_COUNT = 10000;

const getArray = (count: number) => {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr[i] = i;
  }
  return arr;
};
export const DATA = getArray(DATA_COUNT);
