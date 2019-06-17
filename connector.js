const MakgoliModel = require('./model/makgoli.js');
class Makgoli {
  constructor() {
    this.findMakgoli = (title) => {
      const person = MakgoliModel.find( {}, (error, data) => {
        return data;
      });
      return person;
    };
  }
}
module.exports = { Makgoli }; 
