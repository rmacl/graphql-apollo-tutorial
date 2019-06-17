const Mongoose = require('mongoose');

const MakgoliSchema = Mongoose.Schema({
    
    title : String,		
	food_suggestion : String,
	brewery : {
		title : String,
		states : String,
		address : String,
		phone : String,
		website : String,

	},
	product : {
		image : String,
		is_sterilized : Boolean, 
		description : String,
		alcohol_content : String,
		awards : String,
		ingredient : String,
		}
	}
);

const Makgoli  = Mongoose.model('makgoli', MakgoliSchema);

module.exports = Makgoli;
