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
  followersAndReviewsGenerator,
  dateGenerator,
  cuisinesGenerator,
  idGenerator
} = require('./seedData.js');

require('require-sql');
const restaurantsSchema = require('./restaurantsSchema.sql');
const picturePopUpSchema = require('./picturePopUpSchema.sql');
const ratingsSchema = require('./ratingsSchema.sql');
const {db} = require('./index.js')

db.serialize(() => {
  db.run(restaurantsSchema);
  let populateRestaurants = db.prepare(
    `INSERT INTO restaurants 
    (id, nameOfRestaurant, cuisine, dollarSigns, addressOfRestaurant, phoneNumber, website)
    VALUES
    (?, ?, ?, ?, ?, ?, ?)`

  );
  for (let i = 0; i < 100; i++) {
    let restaurantName = namesOfRestaurants[i]
    populateRestaurants.run([
      i+1,
      restaurantName,
      cuisinesGenerator().toString(),
      dollarSignGenerator(),
      addressesArr[i],
      phoneNumberGenerartor(),
      websiteGenerator(restaurantName)
    ])
  }
  populateRestaurants.finalize()

  db.each('SELECT * FROM restaurants', (err, data) => {
    if(err) throw err
    else console.log(data)
  })
});

db.serialize(() => {
  db.run(picturePopUpSchema)
  let populatePicturePopUp = db.prepare(
    `INSERT INTO picturePopUp
    (
      id, 
      foodPictureFull,
      foodPictureThumb,
      userThumbnail, 
      userName, 
      userComment, 
      userFollowers, 
      userNumOfReviews, 
      dateOfPicture, 
      restaurantId
    )
    VALUES
    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  );
  for(let i = 1; i <= 100; i++) {
    let randomNumOfPics = Math.ceil(Math.random() * 20)
    while(randomNumOfPics < 3) randomNumOfPics += Math.ceil(Math.random() * 17)
    let randomIndex = (arr) => {
      return Math.floor(Math.random() * (arr.length + 1))
    }
    let foodPicIndexGen = () => {
      let returned = []
      let numGen = () => {
        let num = Math.floor(Math.random() * 10) * 2
        if(!returned.includes(num)) {
          returned.push(num)
          return num
        } else {
          numGen()
        }
      }
      return numGen()
    }
    for(let j = 0; j < randomNumOfPics; j ++) {
      let foodPicIndex = foodPicIndexGen()
      let followersAndReviews = followersAndReviewsGenerator()
      let followers = followersAndReviews[0]
      let reviews = followersAndReviews[1]
      populatePicturePopUp.run([
        idGenerator(),
        foodPics[foodPicIndex],
        foodPics[(foodPicIndex + 1)],
        profileThumbs[randomIndex(profileThumbs)],
        userNames[randomIndex(userNames)],
        userComments[randomIndex(userComments)],
        followers,
        reviews,
        dateGenerator(),
        i,
      ])
    }
  }
  populatePicturePopUp.finalize()

  db.each('SELECT * FROM picturePopUp', (err, data) => {
    if(err) throw err
    else console.log(data)
  })
});

db.serialize(() => {
  db.run(ratingsSchema)
  let populateRatings = db.prepare(
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
      populateRatings.run([
        idGenerator(),
        year,
        rating,
        month,
        i
      ])
    }
  }
  populateRatings.finalize()
  db.each('SELECT * FROM ratings', (err, data) => {
    if(err) throw err
    else console.log(data)
  })
})


