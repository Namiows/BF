const validateEmail = (email) => {
  const mailRegex = /^(?!_)\w+([.-]?\w+)*@(?!_)\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return mailRegex.test(email);
};

const validateName = (name) => {
  const nameRegex = /^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]+$/;
  if (nameRegex.test(name)) return (name.length >= 12);

  return false;
};

const validatePassword = (password) => {
  if (password.length >= 6) return true;
};

const objFuncs = {
  validateEmail,
  validateName,
  validatePassword,
};

export default objFuncs;