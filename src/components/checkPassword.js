import { generateLowercase } from "./generateLowercase";
import { generateNumbers } from "./generateNumbers";
import { generateSymbols } from "./generateSymbols";
import { generateUppercase } from "./generateUppercase";
import { selectItemsPassword } from "./selectItemsPassword";

export const checkPassword = (letter, countIncredibling, typePassword) => {
  let result = "";
  let u = Boolean(countIncredibling?.match(/[A-Z]/));
  let l = Boolean(countIncredibling?.match(/[a-z]/));
  let n = Boolean(countIncredibling?.match(/[0-9]/));
  let s = Boolean(countIncredibling?.match(/[!,@,#,$,%,^,&,*,?]/));
  console.log(letter);
  if (letter === "u") {
    if (u) {
      result = selectItemsPassword(typePassword);
    } else {
      result = generateUppercase();
    }
  } else if (letter === "l") {
    if (l) {
      result = selectItemsPassword(typePassword);
    } else {
      result = generateLowercase();
    }
  } else if (letter === "n") {
    if (n) {
      result = selectItemsPassword(typePassword);
    } else {
      result = generateNumbers();
    }
  } else if (letter === "s") {
    if (s) {
      result = selectItemsPassword(typePassword);
    } else {
      result = generateSymbols();
    }
  }
  return result;
};
