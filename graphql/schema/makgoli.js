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
