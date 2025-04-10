const express=require("express");
const router=express.Router();
const Listing=require("../models/listing.js");
const wrapAsync=require("../utils/wrapAsync.js")
const {Listingschema}=require("../schema.js");
const {isLoggedIn, isOwner}=require("../middileware.js")
const ExpressError=require("../utils/ExpressError.js")
const  listingController=require("../controllers/listing.js")
const multer  = require('multer');
const {storage}=require("../cloudConfig.js");
const upload = multer({ storage })




const validateListing=(req,res,next)=>{
   const {error}=Listingschema.validate(req.body);
   if(error){
       const msgerr=error.details.map((el)=>el.message).join(",");
       throw new ExpressError(400,msgerr);
   }else{
   next();
   }
}

router.route("/")
.get( wrapAsync( listingController.index))
.post( isLoggedIn,   upload.single('listing[image]'),validateListing, wrapAsync(listingController.createListing))

//index route 


// new route
router.get("/new",isLoggedIn,listingController.renderNewForm)



router.route("/:id")
.get( wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner, upload.single('listing[image]'),validateListing, wrapAsync(listingController.updateListing)
).delete(isLoggedIn,isOwner, wrapAsync(listingController.destroyListing))


// show route


//create route






// edit route
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm)
)




module.exports=router;