var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var oMakgoliSchema = new Schema ({
	
	 	title : String,		
	 	area : String,
		food_suggestion : String,
		brewery_id : String,
		image : String,
		is_sterilized : Boolean, //살균 - 생막걸리(비살균) 
		description : String,
		alcohol_content : String,
		awards : String,
		ingredient : String,
		author : String,
		is_claimed : Boolean,
	    updated : { type: Date, default: Date.now },
	    place : [],
	    rating : Number,
	    sweetness : Number,
	});
  
  
var oMakgoliModel  = Mongoose.model('makgoli', oMakgoliSchema)
module.exports = oMakgoliModel;
