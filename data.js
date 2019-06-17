const mongoose = require('mongoose');
const Makgoli  = require('./model/makgoli');

const aMakgoli = [
	{
		title : 'seoul makgoli',		
		food_suggestion : 'seafood pancake',
		brewery : {
			title : 'seoul brewery',
			states : 'seoul',
			address : 'Seoul seojeong-ro 33',
			phone : '00-000-0000',
			website : '',

		},
		product : {
			image : '',
			is_sterilized : false, 
			description : '',
			alcohol_content : '5',
			awards : '',
			ingredient : 'rice, suclouse',
		},
	},
];


mongoose.connect('mongodb://localhost/makgoli' ,  { useNewUrlParser: true });

aMakgoli.map(data => {
    const oMakgoli = new Makgoli(data);
    oMakgoli.save();
});

