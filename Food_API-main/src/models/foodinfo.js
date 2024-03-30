const mongoose = require('mongoose');
const foodSchema = new mongoose.Schema({
    allergens:String,
    food_group:String,
    description:String,
    ingredients:String,
    serving_size:String,
    certifications:String,
    food_item_name:String,
    health_benefits:String,
    country_of_origin:String,
    preperation_methods:String,
    dietary_restrictions:String,
    brand_or_manufacturer:String,
    nutritional_information:String

})

const FoodItems= new mongoose.model('fooditems',foodSchema);
module.exports=FoodItems;