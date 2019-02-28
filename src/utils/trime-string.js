export const trimString = (string, length) => {
  let newString = string.substring(0, length);
  return `${newString}...`;
};
