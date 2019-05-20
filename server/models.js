const {db}  = require('../db/index.js')


console.log('expect db', db)

getRestaurantInfoModel = (restaurant, cb) => {
  let queryStr = db.prepare(`SELECT * FROM restaurants
  WHERE id = ${restaurant};`)
  db.serialize(() => {
    queryStr.run( (err, data) => {
      if(err) console.log('err in getting restaurant from db at model', err)
      else console.log('got restaurant from db at model', data)
    })
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


