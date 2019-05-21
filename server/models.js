const {db}  = require('../db/index.js');


getRestaurantInfoModel = (restaurant, cb) => {
	db.all(
		`SELECT * FROM restaurants
    WHERE id = 50;`,
		(err, res) => {
		  if (err) console.log('failed to get restaurtant info from db at model =>', err);
		  else cb(null, res);
		}
	);
}

getPicturePopUpInfoModel = (restaurant, cb) => {
  db.all(
    `SELECT * FROM picturePopUp
    WHERE restaurantId = 50`,
    (err, res) => {
      if(err) console.log('falied to get picturePopUp info from db at model =>', err)
      else cb(null, res)
    }
  )
}

getRatingsInfoModel = (restaurant, cb) => {
  db.all(
    `SELECT * FROM ratings
    WHERE restaurantID = 50`,
    (err, res) => {
      if (err) console.log('failed to get ratings info form db at model', err)
      else cb(null, res)
    }
  )
}


module.exports = {
  getRestaurantInfoModel,
  getPicturePopUpInfoModel,
  getRatingsInfoModel
}


