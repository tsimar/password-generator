import { generateLowercase } from "./generateLowercase";
import { generateNumbers } from "./generateNumbers";
import { generateSymbols } from "./generateSymbols";
import { generateUppercase } from "./generateUppercase";

export const selectItemsPassword = (typePassword) => {
  let symbols;
  let result = Math.floor(Math.random() * 4);

  if (typePassword.uppercase === true && result === 0) {
    symbols = generateUppercase();
  } else if (typePassword.lowercase === true && result === 1) {
    symbols = generateLowercase();
  } else if (typePassword.symbols === true && result === 2) {
    symbols = generateSymbols();
  } else {
    symbols = generateNumbers();
  }
  return symbols;
};
