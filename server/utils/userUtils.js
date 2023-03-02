const User = require("../models/User");

const validateUser = async (body) => {
  const { email, password, username } = body;

  console.log("### email", !!(await User.findOne({ email })));
  console.log("### pass", !!(await User.findOne({ password })));
  console.log("### user", !!(await User.findOne({ username })));

  return (
    !!(await User.findOne({ email })) ||
    !!(await User.findOne({ password })) ||
    !!(await User.findOne({ username }))
  );
};

module.exports = {
  validateUser,
};
