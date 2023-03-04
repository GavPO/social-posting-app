const validateBody = async (params, body) => {
  const bodyArray = params.filter((param) => !Object.keys(body).includes(param));
  if (bodyArray.length > 0) {
    return bodyArray;
  } else return true;
};

module.exports = {
  validateBody,
};