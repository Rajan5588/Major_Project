const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
 const passport = require("passport");
const { saveRedirectUrl } = require("../middileware.js");
const userController=require("../controllers/user.js")


router.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.createsignUp));




router.route("/login")
.get(userController.renderloginForm)
.post(saveRedirectUrl, passport.authenticate('local', 
     { failureRedirect: '/login',failureFlash:true }),
userController.createLogin

)

router.get("/logout",userController.logoutReview);


module.exports=router;