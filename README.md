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

Then, we define create file to populate data for list query.

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

Now, we need type definition and resolver to pass as parameter to an instance of Apollo Server. Remeber you define your field resolvers separately from the schema

```
// graphql/schema/makgoli.js

const typeDefinitions = `
	scalar ObjectID
	type Makgoli {
		_id : ObjectID
		title : String!		
		area : String
		food_suggestion : String
		brewery_id : String
		image : String
		is_sterilized : Boolean
		description : String
		alcohol_content : String
		awards : String
		ingredient : String
		author : String
		is_claimed : Boolean
		updated : String
		place : [String]
		rating : Float
		sweetness : Float	
	}
	type MakgoliList {
		makgoli : [Makgoli]
	}

	type createMakgoli {
		addMakgoli (input : newMakgoli) : Makgoli
		addMakgoliDetail (input : newMakgoliDetail, _id : ObjectID) : Makgoli
	}
	input newMakgoli {
		title : String!
		area : String
		is_sterilized : Boolean
	}
	input newMakgoliDetail {
		 alcohol_content : String
		 image : String
		 description : String
		 awards : String
		 ingredient : String
		 place : [String]
		 food_suggestion : String
	}
	schema {
	    query: MakgoliList
	    mutation : createMakgoli
	}
`;


module.exports = [typeDefinitions];
```

a collection of functions that are called to actually execute these fields is here

```

//  graphql/resolver.js
const resolveFunctions = {

  MakgoliList: {
    makgoli(obj, { title }, context, info) {
      return context.Makgoli.getMakgoliList();
    },
  },
  createMakgoli : {
  	addMakgoli(obj, oMakgoliData , context, info){
		return context.Makgoli.addMakgoli(oMakgoliData);
  	},
    addMakgoliDetail(obj, oMakgoliData, context, info){
      return context.Makgoli.addMakgoliDetail(oMakgoliData);
    }
  },


};

module.exports = resolveFunctions;
```

Now you have typDef and resolvers to pass to server instance. We are almost there! 
What we need to do is pretty simple :
1. Connect MongoDB
2. Create apollo instance and send typeDef and resolvers as parameter
3. apply appoloserver to middleware

All goes in here 

```
//  app/makgoli.js
const express = require('express');
const bodyParser = require('body-parser');
const Mongoose = require('mongoose');

const PORT = 8080;
const app = express();
const path = '/graphql';


const { ApolloServer, gql, graphiqlExpress } = require('apollo-server-express');


Mongoose.connect('mongodb://localhost/daengdaeng',  { useNewUrlParser : true },  (error) => {
  if (error != null) {
    return error;
  }
  return true;
});


const Schema = require('../graphql/schema/makgoli');
const Resolvers = require('../graphql/resolver');
const Connectors = require('../connector');


const server = new ApolloServer({ typeDefs : Schema, resolvers :Resolvers, context : Connectors });

server.applyMiddleware({app, path});


app.listen(PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${PORT}/graphql`
));

```

run  app/makgoli.js file
```
node  app/makgoli.js
```


I used chrom extension GraphiQL for test. Install any browser extension connecting graphql server to run test queries. Open http://localhost:8080/graphql on your browser


You should be able to get your list like below screenshot

![alt text](https://catasy.cafe24.com/tutorial/graphql/Screen%20Shot%202019-06-18%20at%205.55.46%20PM.png)
