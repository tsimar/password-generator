export const generateLowercase = () => {
  const characters = "abcdefghijklmnopqrstuwxyz";
  return characters.charAt(Math.floor(Math.random() * characters.length));
};
