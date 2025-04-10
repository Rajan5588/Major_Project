const Listing = require("./models/listing");
const review = require("./models/review");

module.exports.isLoggedIn=(req,res,next)=>{
              if (!req.isAuthenticated()){
               req.session.redirectUrl=req.originalUrl;
         req.flash("error","User must be Logged In First")
         return  res.redirect("/login");
              }
              next();
}




module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
     res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}



module.exports.isOwner=async(req,res,next)=>{
     let {id}=req.params;
     let listings= await Listing.findById(id)
     if(!listings.owner.equals(res.locals.curUser._id)){
        req.flash("error","You are not the Owner Of the Listing");
        return res.redirect(`/listings/${id}`)
     }
     next();
}


module.exports.isReviewAuthor=async(req,res,next)=>{
     let {id,reviewId}=req.params;
     let Review= await review.findById(reviewId)
     if(!Review.author.equals(res.locals.curUser._id)){
        req.flash("error","You are not the Author Of the Review");
        return res.redirect(`/listings/${id}`)
     }
     next();
}

