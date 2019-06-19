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
```



![alt text](https://catasy.cafe24.com/tutorial/graphql/Screen%20Shot%202019-06-18%20at%205.55.46%20PM.png)
