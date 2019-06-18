var oMakgoli = require('./schema/makgoli');

const Makgoli = {
  getMakgoliList(){
    var oResult =  oMakgoli.find({}, (error, data) => {
      return data;
    });
    return oResult;
  },
  addMakgoli(oMakgoliData){
    var oNewMakgoli = new oMakgoli(oMakgoliData.input);  
    var oResult = oNewMakgoli.save().then((data) => {return data['_id']});
    return oResult;
  },
  addMakgoliDetail(oMakgoliData){
    var sId = oMakgoliData._id;
    oMakgoli.findByIdAndUpdate(sId , {$set :oMakgoliData.input},  { new: true }, function (error, data) {
      if (error) {
      	return handleError(error);
      }
      res.send(data);
    });
  }
}

module.exports =  Makgoli; 
