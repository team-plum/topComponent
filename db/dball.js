const {
  ratingsGenerator,
  foodPics,
  profileThumbs,
  dollarSignGenerator,
  addressesArr,
  phoneNumberGenerartor,
  namesOfRestaurants,
  websiteGenerator,
  userNames,
  userComments,
  followersAndReivewsGenerartor,
  dateGenerator,
  cuisinesGenerator,
  idGenerator
} = require('./seedData.js');

require('require-sql');
const restaurantsSchema = require('./restaurantsSchema.sql');
const picturePopUpSchema = require('./picturePopUpSchema.sql');
const ratingsSchema = require('./ratingsSchema.sql');
const {db1} = require('../db/index.js')


  db1.all(restaurantsSchema, (err, data) => {
    if(err) throw err
    else console.log('restaurants table created', data)
  });

  let populateRestaurants = (
    `INSERT INTO restaurants 
    (id, nameOfRestaurant, cuisine, dollarSigns, addressOfRestaurant, phoneNumber, website)
    VALUES
    (?, ?, ?, ?, ?, ?, ?)`
  );

  for (let i = 0; i < 100; i++) {
    let restaurantName = namesOfRestaurants[i]
    db1.all(populateRestaurants, [
      i+1,
      restaurantName,
      cuisinesGenerator().toString(),
      dollarSignGenerator(),
      addressesArr[i],
      phoneNumberGenerartor(),
      websiteGenerator(restaurantName)
    ])
  }

  db1.each('SELECT * FROM restaurants', (err, data) => {
    if(err) throw err
    else console.log(data)
  })



  db1.all(picturePopUpSchema)
  let populatePicturePopUp =(
    `INSERT INTO picturePopUp
    (
      id, 
      foodPictureLink,
      userThumbnail, 
      userName, 
      userComment, 
      userFollowers, 
      userNumOfReviews, 
      dateOfPicture, 
      restaurantId
    )
    VALUES
    (?, ?, ?, ?, ?, ?, ?, ?, ?)`
  );
  for(let i = 1; i <= 100; i++) {
    let randomNumOfPics = Math.floor(Math.random() * 20)
    while(randomNumOfPics < 3) randomNumOfPics += Math.floor(Math.random() * 17)
    let randomIndex = (arr) => {
      return Math.floor(Math.random() * (arr.length + 1))
    }    
    for(let j = 0; j < randomNumOfPics; j ++) {
      let followersAndReivews = followersAndReivewsGenerartor()
      let followers = followersAndReivews[0]
      let reviews = followersAndReivews[1]
      db1.all(populatePicturePopUp, 
        [
        idGenerator(),
        foodPics[randomIndex(foodPics)],
        profileThumbs[randomIndex(profileThumbs)],
        userNames[randomIndex(userNames)],
        userComments[randomIndex(userComments)],
        followers,
        reviews,
        dateGenerator(),
        i,
        ]
      )
    }
  }
  // populatePicturePopUp.finalize()

  db1.each('SELECT * FROM picturePopUp', (err, data) => {
    if(err) throw err
    else console.log(data)
  })



  db1.all(ratingsSchema)
  let populateRatings =(
    `INSERT INTO ratings
    (id, ratingYear, rating, ratingMonth, restaurantId)
    VALUES
    (?, ?, ?, ?, ?)`
  )
  for(let i = 0; i <=100; i++) {
    let ratings = ratingsGenerator()
    for(let j = 0; j < ratings.length; j++) {
      let year = ratings[j][1]
      let rating = ratings[j][0]
      let month = ratings[j][2]
      db1.all(populateRatings, 
        [
        idGenerator(),
        year,
        rating,
        month,
        i
        ]
      )
    }
  }
  db1.each('SELECT * FROM ratings', (err, data) => {
    if(err) throw err
    else console.log(data)
  })




