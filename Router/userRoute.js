let Router = require("express");
let {
  register,
  loginUser,
  getinfromationByEmail,
  getinfromationById,
} = require("../controlers/usercontrolers");

let verifytoken = require('../middlewares/verifiedToken')

const router = Router();

router.route("/register").post(register);
router.route("/login").patch(loginUser);
router.route("/usermail/:email").get(verifytoken,getinfromationByEmail);
router.route("/informationbyID/:_id").get(getinfromationById);


// router.route("/logout").post(verifyJWT,  logoutUser)

module.exports = router;
