const typeDefinitions = `
	type Makgoli {
			title : String		
			food_suggestion : String
			brewery : Brewery
			product : Product
		
	}
	type Brewery {
			title : String
			states : String
			address : String
			phone : String
			website : String
	}
	type Product {
			image : String
			is_sterilized : Boolean
			description : String
			alcohol_content : String
			awards : String
			ingredient : String
				
	}
	type RootQuery {
	  makgoli : [Makgoli]
	  product : Product
	  brewery : Brewery
	}
	schema {
	  query: RootQuery
	}
`;


module.exports = [typeDefinitions];
