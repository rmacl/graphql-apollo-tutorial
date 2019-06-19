# graphql-apollo-tutorial

tutorial for graphql API with Apollo, Express, MongoDb


apollo-server, express, graphql, mongoose packages are what we need to start this tutorial!

```
npm init
npm install --save--dev apollo-server express graphql mongoose
```

If you don't have mongodb running background
```
//install mongodb
brew install mongodb

//create data/db directory
mkdir -p /data/db

//give permission to data/db directory
sudo chown $USER /data/db

//run mongodb
mongod
```


Everything is ready to explore apollo&graphql!
First, we are goingto define makgoli schema. Makgoli is korean rice wine, this will be used another tutorial for makgoli tasting app later.

```javascript
//  model/schema/makgoli.js

var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var oMakgoliSchema = new Schema ({
	
	 	title : String,		
	 	area : String,
		food_suggestion : String,
		brewery_id : String,
		image : String,
		is_sterilized : Boolean,  
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
```

Then, we will create file to populate data for list query.

```
// data.js
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
```

You sould be able to save data by running following command :

```
node data.js
```



![alt text](https://catasy.cafe24.com/tutorial/graphql/Screen%20Shot%202019-06-18%20at%205.55.46%20PM.png)
