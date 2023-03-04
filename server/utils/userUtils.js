const User = require('../models/User');

const validateUser = async (body) => {
  const { email, username } = body;

  return (
    !!(await User.findOne({ email })) || (await User.findOne({ username }))
  );
};

module.exports = {
  validateUser,
};
