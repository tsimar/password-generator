export const generateUppercase = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return characters.charAt(Math.floor(Math.random() * characters.length));
};
