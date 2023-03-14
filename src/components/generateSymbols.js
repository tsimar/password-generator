export const generateSymbols = () => {
  const characters = "!,@,#,$,%,^,&,*,?";

  return characters.charAt(Math.floor(Math.random() * characters.length));
};
