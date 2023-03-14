export const progressDifficult = (lenght, objColor) => {
  let newData;

  const objName = Object.keys(objColor);
  newData = { ...objColor };
  for (let index = 0; index < lenght; index++) {
    newData[objName[index]] = "color";
  }

  return newData;
};
