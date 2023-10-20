const User = require("./user.model");

const insert =async (data) => {
    const user = new User(data);
    await user.save();
    return SendMail(user)
};

const loginUser = (loginData) => {
  return User.findOne(loginData);
};

const modify = (where, data) => {
    return User.findOneAndUpdate(where, data, { new: true });
};

module.exports = {
    insert,
    loginUser,
    modify
}
