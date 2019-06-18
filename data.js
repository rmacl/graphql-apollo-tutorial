const mongoose = require('mongoose');
const Makgoli  = require('./model/makgoli');

const aMakgoli = [
	{			
		title : 'seoul makgoli',
		area : 'Seoul',
		food_suggestion : 'seafood pancake',
		brewery_id : 'sdfsdf',
		image : 'https://catasy.cafe24.com//dummy/yuseong_star_makgoli.png',
		is_sterilized : false,
		description : 'Medium acidity, medium tannins and dry. Heavy body.',
		alcohol_content : 5,
		awards : 'best rice wine 2019',
		ingredient : 'rice, sticky rice, sucralose, aspartame',
		author : 'googoo@gmail.com',
		is_claimed : false,
	        updated : '',
	        place : ['seoul restaurant','seoul bar'],
	        rating : 4.5,
	        sweetness : 3,
	}
];


mongoose.connect('mongodb://localhost/makgoli' ,  { useNewUrlParser: true });

aMakgoli.map(data => {
    const oMakgoli = new Makgoli(data);
    oMakgoli.save();
});

