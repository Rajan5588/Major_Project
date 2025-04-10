const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config()


console.log(process.env.CLOUD_NAME)



cloudinary.config({
     cloud_name:process.env.CLOUD_NAME,
     api_key:process.env.CLOUD_API_KEY,
     api_secret:process.env.CLOUD_API_SECRET,


})

const storage=new CloudinaryStorage({
     cloudinary:cloudinary,
     params:{
          folder:'wanderlust-DEV',
          allowerdFornmate:["png","jpeg","jpg"],
     },
})



module.exports={
     cloudinary,
     storage
}

