// An awesome function with ES2020 new feature
const Hello = (str: string): string[] => {
  const prep = str
    .trimRight()
    .toLowerCase()
    .split('')
    .filter((c, i, arr) => arr.indexOf(c) === i);

  return prep;
};

export default Hello;
