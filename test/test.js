const axios = require('axios');
const sqlite = require('sqlite3');
let fs = require('fs');
let asdf = require('');
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
} = require('../db/seedData.js');
// const picturePopUpSchema = require('../db/picturePopUpSchema.sql')
// const ratingsSchema = require('../db/ratingsSchema.sql')

let sampleRatings = ratingsGenerator();
let sampleFoodPic = foodPics.slice(0, 5);
let sampleProfileThumbs = profileThumbs.slice(0, 5);
let sampleDollarSigns = dollarSignGenerator();
let sampleAddress = addressesArr[1];
let samplePhoneNumber = phoneNumberGenerartor();
let sampleNameOfRestaurant = namesOfRestaurants[0];
let samepleWebsite = websiteGenerator(sampleNameOfRestaurant);
let sampleUserNames = userNames.slice(0, 5);
let sampleComments = userComments.slice(0, 5);
let sampleCuisines = cuisinesGenerator();
let sampleFollowersAndReviews = [];
let sampleDates = [];
let sampleIds = [];
const path = require('path');
const dbPath = path.resolve(__dirname, 'test.db');

for (let i = 0; i < 5; i++) {
  sampleFollowersAndReviews.push(followersAndReviewsGenerator());
  sampleDates.push(dateGenerator());
  sampleIds.push(idGenerator());
}

let testName = `gets restaurant id, name, cuisinse, dollar signs, address, phone number and website`;

test(`${testName}`, () => {
  db = new sqlite.Database('test.db');
  db.all(
    `
  CREATE TABLE (
    id INT NOT NULL,
    foodPictureLink VARCHAR(250),
    userThumbnail VARCHAR(150),
    userName VARCHAR(50),
    userComment VARCHAR(250),
    userFollowers INT,
    userNumOfReviews INT,
    dateOfPicture VARCHAR(50),
    restaurantId INT,
    PRIMARY KEY (id)
  );`,
    (err, row) => {
      if (err) console.log(err);
      else console.log(row);
    }
  );
  db.all(
    `INSERT INTO restaurants 
      (id, nameOfRestaurant, cuisine, dollarSigns, addressOfRestaurant, phoneNumber, website)
      VALUES
      (?, ?, ?, ?, ?, ?, ?)`,
    [
      0,
      sampleNameOfRestaurant,
      sampleCuisines,
      sampleDollarSigns,
      sampleAddress,
      samplePhoneNumber,
      samepleWebsite
    ],
    (err, res) => {
      if (err) console.log(err);
      else console.log(res);
    }
  );

  let expected = db.all(
    `
  SELECT * FROM restaurants`,
    (err, row) => {
      if (err) console.log(err);
      else console.log(row);
    }
  );

  expected(expected).toBe({
    id: 0,
    nameOfRestaurant: `${sampleNameOfRestaurant}`,
    cuisine: `${sampleCuisines}`,
    dollarSigns: `${sampleDollarSigns}`,
    addressOfRestaurant: `${sampleAddress}`,
    phoneNumber: `${samplePhoneNumber}`,
    website: `${samepleWebsite}`
  });
});

//   db.serialize(() => {
//     let tableSchema = db.prepare()
//     tableSchema.run((err, row) => {
//       if(err) console.log(err)
//       else console.log(row)
//     })
//     let populateRestaurants = db.prepare(
//
//     );
//     populateRestaurants.run(]);
//     // populateRestaurants.finalize();
//     let expected = db.all(`SELECT * FROM restaurants`, (err, rows) => {
//       if(err) return err
//       else return rows
//     })

//     console.log(expected)
//     expect(expected

//     ).toBe();
//   });
// });

// test(testName, () => {
//   return axios.get('/restaurtant', { params: { restaurtant: 50 } })
//   .then((data) => {
//     expect(data).toBe({
//       id: 50,
//       nameOfRestaurant: 'Mediterranean Grill & Cuisine',
//       cuisine: 'Slovenian Food,Philippino Food,Vietnamese Food',
//       dollarSigns: 0,
//       addressOfRestaurant: '554 Edgefield Street  Marshalltown IA 50158',
//       phoneNumber: '(164) 077-3065',
//       website: 'wwww.MediterraneanGrill&Cuisine.com'
//     })
//   })
//   .catch((err) => {
//     console.log(`test failed: ${testName} =>
//                   ` , err)
//   })
// });
