const mongoose=require("mongoose");
const express=require("express");
const app=express();
const path=require("path")
const methodOverride=require("method-override")
const ejsMate=require("ejs-mate");
const ExpressError=require("./utils/ExpressError.js")
const listing=require("./router/listing.js");
const review=require("./router/review.js");
const userRouter=require("./router/user.js");
const session=require("express-session");
const MongoStore = require('connect-mongo');
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local")
const User=require("./models/user.js");





if(process.env.NODE_ENV!="production"){




     require('dotenv').config()
}

console.log(process.env.CLOUD_API_SECRET,"sdfrtyuio");


// const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust"
const dburl=process.env.ATLASDB_URL;
main().then(res=>console.log("connection successfull")).catch(err => console.log(err));

async function main() {
   mongoose.connect(dburl);

}
app.use(express.static(path.join(__dirname,"/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))
app.engine('ejs', ejsMate);


const store=MongoStore.create({
     mongoUrl:dburl,
     crypto: {
          secret: process.env.SECRET,
        },
        touchAfter: 24 * 3600, // time period in seconds
})

store.on("error",function(e){
     console.log("session store error",e);
}
)

const sessionOption={
     store:store,
     secret:process.env.SECRET,
     resave:false,
     saveUninitialized:true,
     cookie:{ 
          expires:Date.now()+7*24*60*60*1000,
          maxAge:7*24*60*60*1000,
          httpOnly:true,
     }
}
app.use(session(sessionOption));
app.use(flash());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use((req,res,next)=>{
     res.locals.success=req.flash("success")
     res.locals.error=req.flash("error");
     res.locals.curUser=req.user;
     next();
})
app.use("/listings",listing);
app.use("/listings/:id/reviews", review);
app.use("/",userRouter);




// app.get("/",(req,res)=>{
// res.send("hii, i am root");
// })


// app.get("/testListing",async(req,res)=>{
// let sampleListing=new Listing({
//      title:"My Home",
//      description:"By the Mount",
//      price:2000,
//      location:"calangute , bhopal",
//      country:"India"
// })
// await sampleListing.save();
// console.log("sample was saved to db");
// res.send("successfull testing")

// })

app.all("*",(req,res,next)=>{
     next(new ExpressError(404,"Page Not Found!"))
})

app.use((err,req,res,next)=>{
     let {statusCode=500,message="something went wrong!"}=err;
     res.status(statusCode).send(message);
})
app.listen(8080,()=>{
     console.log("server listen to port 8080");
})