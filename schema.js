const Joi = require('joi');

module.exports.Listingschema = Joi.object({
     listing:Joi.object({
          title:Joi.string().required(),
          description:Joi.string().required(),
          location:Joi.string().required(),
          country:Joi.string().required(),
          price:Joi.number().required().min(0),
          image:Joi.string().allow("",null),
     }).required()
     ,
     
});


// module.exports.Listingschema = Joi.object({
//      listing: Joi.object({
//        title: Joi.string().required(),
//        description: Joi.string().required(),
//        location: Joi.string().required(),
//        country: Joi.string().required(),
//        price: Joi.number().required().min(0),
//        image: Joi.string().allow("", null),
//        geometry: Joi.object({
//          type: Joi.string().valid("Point").required(),
//          coordinates: Joi.array().items(Joi.number()).length(2).required() // [lng, lat]
//        }).required()
//      }).required()
//    });


module.exports.reviewSchema=Joi.object({
     review:Joi.object({
       rating:Joi.number().min(1).max(5).required(),
       comment:Joi.string().required(),
     }).required(),
})