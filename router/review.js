const express=require("express");
const router=express.Router({mergeParams:true});
const Review=require("../models/review.js");
const {reviewSchema}=require("../schema.js");
const wrapAsync=require("../utils/wrapAsync.js")
const Listing=require("../models/listing.js");
const ExpressError=require("../utils/ExpressError.js");
const { isLoggedIn, isReviewAuthor } = require("../middileware.js");
const reviewController=require("../controllers/reviews.js")








const validateReview=(req,res,next)=>{
     const {error}=reviewSchema.validate(req.body);
     if(error){
         const msgerr=error.details.map((el)=>el.message).join(",");
         throw new ExpressError(400,msgerr);
     }else{
     next();
     }
  }




  
  router.post("/" ,isLoggedIn, validateReview, wrapAsync(reviewController.createReview))

router.delete("/:reviewId", isLoggedIn,  isReviewAuthor, wrapAsync(reviewController.destroyReviews))


module.exports=router;