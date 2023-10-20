const mongoose = require("mongoose");
const env = require("../../env")
const db = mongoose.connection;

db.once("open", () => {
  console.log("DB Connected ...!");
});

const mongooseConnect = async () => {
  await mongoose.connect(
    `mongodb://${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

module.exports = {mongooseConnect}