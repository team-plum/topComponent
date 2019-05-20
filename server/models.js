const {db}  = require('../db/index.js')


// console.log('expect db', db)

getRestaurantInfoModel = (restaurant, cb) => {
    db.all(
      `SELECT * FROM restaurants
      WHERE id = ${restaurant};`,
      (err, res) => {
        if (err) {
          console.log('ERROR: ', err);
        } else {
          cb(null, res);
        }
      })
    
  // db.serialize(() => {
  //   console.log('expect open db', db)
  //   let restaurantsQuery = db.prepare(
  //     `SELECT * FROM restaurants
  //     WHERE id = ${restaurant};`
  //   )
  //   restaurantsQuery.run(restaurant, (err, data) => {
  //     cb(err, data)
  //   })
  // })
  
  // picturePopUpQueryFunc = () => {
  //   let picturePopUpQuery = 
  //   `SELECT * from picturePopUp
  //   WHERE id = ${restaurantNumber};`
  //   db.all(picturePopUpQuery, (err, data) => {
  //     cb(err, data)
  //   })
  // } 
  // ratingsQueryFunc = () => {
  //   let ratingsQuery = 
  //   `SELECT * FROM ratings
  //   WHERE id = ${restaurantNumber};`
  //   db.all(ratingsQuery, (err, data) => {
  //     cb(err, data)
  //   })
  // }
  // restaurantQueryFunc()
  // picturePopUpQueryFunc()
  // ratingsQueryFunc()
  },
  
    

module.exports = {
  getRestaurantInfoModel
}


