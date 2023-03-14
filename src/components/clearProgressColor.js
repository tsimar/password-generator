export const clearProgressColor = (objColor) => {
  let newData;

  const objName = Object.keys(objColor);
  newData = { ...objColor };
  for (let index = 0; index < 4; index++) {
    if (index === 0) {
      newData[objName[index]] = "color";
    } else {
      newData[objName[index]] = "";
    }
  }

  return newData;
};
