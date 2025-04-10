
const User=require("../models/user.js");

module.exports.renderSignupForm=(req,res)=>{

     res.render("./users/user.ejs")
};


module.exports.createsignUp=async(req,res,next)=>{
      try {
          const {username,email,password}=req.body;
          const newUser=new User({username,email});
      const registerUser=   await  User.register(newUser,password);
      console.log(registerUser)
      req.login(registerUser,(err)=>{
          if(err){
               next(err)
          }
          req.flash("success","Welcome to WanderLust");
          res.redirect("/listings")
      })
      } catch(e) {
           req.flash("error",e.message + " Please try again");
           res.redirect("/signup");
      }
}


module.exports.renderloginForm=(req,res)=>{
     res.render("./users/login.ejs");
}

module.exports.createLogin=async(req,res)=>{

     req.flash("success","Welcome back to WalderLust");
     let redirectUr=res.locals.redirectUrl || "/listings";
     res.redirect(redirectUr);
}


module.exports.logoutReview=(req,res,next)=>{
     req.logout((err)=>{
               if(err){  
                     next(err);
                 }  

            req.flash("success","You Are Loged Out!");
            res.redirect("/listings");
            
     })
}





