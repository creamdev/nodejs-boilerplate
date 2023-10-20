const {register,login} = require("../user/user.controller")
let schemas = require("./auth.validation")

router.route("/register").post(validate(schemas.registerValidation), register);
router.route("/login").post(validate(schemas.loginValidation), login);