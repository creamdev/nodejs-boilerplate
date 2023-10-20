const JWT = require("jsonwebtoken");
const env = require("../../../env")

const authenticateToken = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1] || null;
  if (token === null)
    return res
      .status(401)
      .send({ error: "You must be logged in to do this." });
  JWT.verify(token, env.ACCESS_TOKEN_SECRET_KEY, (err, user) => {
    if (err) return res.status(403).send({ error: err });
    req.user = user?._doc;
    next();
  });
};

module.exports = authenticateToken;