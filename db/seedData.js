const addresses = require('./rawData/addresses.js');

const ratingsGenerator = () => {
  let year = 2019;
  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let numOfRatings = Math.ceil(Math.random() * 100);
  let ratings = [];
  let yrs = [];
  let ratingTupels = [];
  let yrsInBiz = Math.ceil(Math.random() * 5);
  for (let i = 0; i < yrsInBiz; i++) {
    yrs.push(year);
    year--;
  }
  let randomRating = val => {
    let randomNum = Math.ceil(Math.random() * val);
    if (randomNum < 1) randomNum += Math.ceil(Math.random() * val);
    return randomNum;
  };
  for (let i = 0; i < numOfRatings; i++) {
    ratings.push(randomRating(5));
  }
  for (let i = 0; i < numOfRatings; i++) {
    let tupel = [];
    tupel.push(ratings[i]);
    tupel.push(yrs[Math.floor(Math.random() * yrsInBiz)]);
    tupel.push(months[Math.floor(Math.random() * 12)]);
    ratingTupels.push(tupel);
  }

  return ratingTupels;
};


const foodPics = [
  "https://drive.google.com/uc?id=1ie0TH9501aNKP9P746eTIMWZ450KVn8s", 
  "https://drive.google.com/uc?id=1RAc54vvA41Q88sGhhQHpIsxdyK54nswb", 
  "https://drive.google.com/uc?id=1a5kTnNSnGx5-GEyVqmxrnoJw4xV4EZxj", 
  "https://drive.google.com/uc?id=1eeloGOAR0mZTOeB__4Lbowf2nNvNFgw9", 
  "https://drive.google.com/uc?id=1kah49qkIhgAFxWOUMVQKfbVgcp3LtM7z", 
  "https://drive.google.com/uc?id=13Jz0ocp8E5jnWkBVfJo21XJMDlcbUzOz", 
  "https://drive.google.com/uc?id=1C1JNpaWw1oJQJy6KoZBIyr1CaPIwq_14", 
  "https://drive.google.com/uc?id=15gzONShbuPNzQdwwFwMMupMaKJeqKv6c", 
  "https://drive.google.com/uc?id=1L_tp7MonJYAPfhPMf9klwsPJuMcw0d51", 
  "https://drive.google.com/uc?id=1tQ5uQLzFaHrjZqBoqGrcAtL9_Oey8z-r", 
  "https://drive.google.com/uc?id=1HIX0PkmiCAblJP3cOI5ljPZl3JoP14ex", 
  "https://drive.google.com/uc?id=1XXiLJeNh5B2vVAZkwFX5uvqCC7m6-r0U", 
  "https://drive.google.com/uc?id=1K_LRV_7PGo4dHOhXLGdJigIuacsQzl0Q", 
  "https://drive.google.com/uc?id=19fx_eiqWLiP4oq2CX_zRbJo1xXw1GTF_", 
  "https://drive.google.com/uc?id=1K0eZkPvbAlNqY4iJPm6315Nzb0jSA0zb", 
  "https://drive.google.com/uc?id=1FJMz_tF5oGIdR4oefGaQTk18yuVhkmhC", 
  "https://drive.google.com/uc?id=1z7nRk-k7GtRKa-qjbZ3tynb8FmHSrXhl", 
  "https://drive.google.com/uc?id=1Ja_290dx0fQgI_VmxgT0zoQFItUNMPZO", 
  "https://drive.google.com/uc?id=1FRqFdhBeSzyBKB5iXiFKAyP8cy2TpOlo", 
  "https://drive.google.com/uc?id=1XcSCelL25uWY0XclxjoLF8qJqko_XaWJ", 
  "https://drive.google.com/uc?id=1qaHiGxfpT_F8_v7lOw8sofjs6w8o8fad", 
  "https://drive.google.com/uc?id=1VVdEYtJkdkyhHOSOJZ_5-077bcpaNYnD", 
  "https://drive.google.com/uc?id=1LOmBMGfajlVYX26tB3vpTi8OF1JYCjtE", 
  "https://drive.google.com/uc?id=1ricWdsxvml_lMvXbqBEftrsx0ie2x4l_", 
  "https://drive.google.com/uc?id=1IipmSGTSGfDot49KwC78aX7Zal3qlW85", 
  "https://drive.google.com/uc?id=1J6tITCXb_rynaFPRcKX4D6TQ0OTnDJWb", 
  "https://drive.google.com/uc?id=1IlSB-0E7d9pg7px-o6NpAvzDm3Wcx7CW", 
  "https://drive.google.com/uc?id=1-Jzgu9JgTfknEO3Hpo-28bqg0OAs0XJo", 
  "https://drive.google.com/uc?id=1C0odCmOMJ-PYhWP44tGbmDKWiCVLhtPi", 
  "https://drive.google.com/uc?id=1ALGZCX64q9qDzRIseOh2iwAiXajcCwKQ", 
  "https://drive.google.com/uc?id=1fa_ypGhGnJ8cY24S1pya-L48WgZcarE8", 
  "https://drive.google.com/uc?id=1x1FI-lCuW5IAew01hP-QRDHkVRO8wK-d", 
  "https://drive.google.com/uc?id=1whwnmb0Gy_mcyRvWsDPIGhDXDMYh0Rsv", 
  "https://drive.google.com/uc?id=1g7TxQ1sKNrwUPd5gi2MMjoMA7VlH3QbL", 
  "https://drive.google.com/uc?id=1io7ZmU-LYJMV9KPCDrps6dNJbwzXvFlT", 
  "https://drive.google.com/uc?id=1wspHlk7Repjnj258A5C2sOHtRffuKBEA", 
  "https://drive.google.com/uc?id=1IbgG5EKnedhGyandUwb1xWwFthX0i0ZF", 
  "https://drive.google.com/uc?id=12Wm7-K7xdNiRW3lX3K0pU27WCE6Y9HKh", 
  "https://drive.google.com/uc?id=1RHl4pF0rFfSVzA3Aw8gmbg4vh35jKZU5", 
  "https://drive.google.com/uc?id=1YDKbI5ijh69OW_aMHGGmkbZgUTx5Wap2"
];

const profileThumbs = [
  'https://drive.google.com/uc?id=1t5n7Sa6SZXeRdX-ZBlCTIiclgtFkz9E_',
  'https://drive.google.com/uc?id=1iCxpZQoLyP9aHXc9ul_AfWjtL981rdK8',
  'https://drive.google.com/uc?id=1jtBBgLW2DFZzXStSqHAwiq7NWkPJx0AS',
  'https://drive.google.com/uc?id=1W4NUu4E6pZRPRTGVaf-jsmQsNUEB5buu',
  'https://drive.google.com/uc?id=1kzJAJUSoqBfqZBvl0QP_exqmrP6FNq3p',
  'https://drive.google.com/uc?id=1I651eO1hi3JlOSId2ufoYwcXUwlLoxQf',
  'https://drive.google.com/uc?id=1ca9Tk9ofA_SMcg9T_ULmz1RDR8uB8znK',
  'https://drive.google.com/uc?id=1OjMeFjaGSI7IdLS7twze8l5LwLcMPCf3',
  'https://drive.google.com/uc?id=18akK59I0ptSXHD0YZgbQ63iR5Q8B8VA5',
  'https://drive.google.com/uc?id=1O6eg5qZUG6kE8cOljKbSSj7jygNrsLm5',
  'https://drive.google.com/uc?id=1H9UDVMN7kAuvkP7-zm9lOx0T6-wXjhTJ',
  'https://drive.google.com/uc?id=1cx2M21NlN67WwfPJPQrdaeegd6QHsp8i',
  'https://drive.google.com/uc?id=1pVbwP0v0zHNXjphj3rVQdcsUhoy_I3He',
  'https://drive.google.com/uc?id=15ojyONediqg7RR7GOhykdHCjLJlX9xTt',
  'https://drive.google.com/uc?id=12CG3eVi_MzZgtWr8mKptoKhYY7DYEo_T',
  'https://drive.google.com/uc?id=1uN2nmv214s5WCE7kpI6J3pn0cdc2NCSV',
  'https://drive.google.com/uc?id=1JT17D0eCFbyY38Nr1y7RkTyFIOkWinkE',
  'https://drive.google.com/uc?id=1ZKBz3sPMjUy5r2oLNe8bm46Azt6dmXtM',
  'https://drive.google.com/uc?id=11EY-GcU2nFeIbmoNxYdsCR3rBtGL4Oxz',
  'https://drive.google.com/uc?id=16K2VYEG4QD_3ZDOJpuAt2c8N9ZqescbC'
];

const dollarSignGenerator = () => {
  let dollarSigns = Math.ceil(Math.random() * 4);
  return dollarSigns;
};

let addressesFixer = () => {
  let results = [];
  for (let i = 0; i < addresses.addresses.length; i += 3) {
    let address = `${addresses.addresses[i]} ${addresses.addresses[i + 1]} ${addresses.addresses[i + 2]}`;
    results.push(address);
  }
  return results;
};

let addressesArr = addressesFixer()

let phoneNumberGenerartor = () => { 
  let phoneNumber = '';
  for (i = 0; i < 10; i++) {
    phoneNumber += Math.floor(Math.random() * 10);
  }
  phoneNumber = `\(${phoneNumber.slice(0, 3)}\) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6)}`;
  return phoneNumber;
};

let namesOfRestaurants = [
  'Rosa Linda Mexican',
  'Double Diamond Arcade',
  'Five Corners Restaurant',
  'Tony Freez',
  'Ravenwood Golf Club',
  "Joe's Pizza Place & Restaurant",
  'Area 516 Night Club',
  'Alabama Kitchen Inc.',
  'Deer Park Grill',
  'Stella Espresso Company',
  "Mrs. Field's Cookies & Pretzel Maker",
  'Grenville Baker Boys & Girls Club',
  'Cocina Fusion',
  'Sweet Bean And More',
  'Ye Olde Stage House',
  'Snappy Dog',
  'Iannuzzi Italian Deli',
  'Main Moon Take Out Kitchen',
  "Jaden's Star Cafe",
  'Irving Farm Coffee Roasters',
  "Sbarro's At Greece Ridge",
  'Holy Smoke Restaurant',
  'Dark Horse Coffee & Catering',
  "Angelo's Pizza Of So St",
  'Stormville Pizza & More',
  "Mirelle's Restaurant & Catering",
  'Mepham H S',
  'Panera Bread Fishkill 4356',
  'Diaz Grocery Store',
  'Coffee Shop At The Villager',
  'Rey Del Pollo',
  'Centenarios',
  "Emperor's Choice Restaurant",
  'Towne Elementary Cafeteria',
  'Pig Niks Bbq Commissary',
  'Adk Mountain Grill',
  'L.a Distributing',
  'Caffe Ladro',
  'Jamaica Lick Finger Restaurant',
  'Portage Park Day Nursery',
  'Golden Wok Corporation',
  'Mariscos El Caribe',
  'Peacock Patio',
  'Bywater Bistro',
  "Cris' Sweet Creamery",
  'Pasha',
  'Comfort Inn Of Fort Collins',
  'Rocky Mountain Bbq Mobile',
  'J&j Pizzeria & New York Deli',
  'Mediterranean Grill & Cuisine',
  'Island Eatery',
  "Water's Edge Restaurant",
  'William P. Brooks Hose Company',
  "Big Mama's Country Kitchen & Deli",
  'Fast Food El Mexicano',
  'Town Of Pawlin',
  "Carter's Creative Catering",
  'Oaks B And B Hotel',
  'Orleans Veterans Club',
  'Sterlington Station',
  'Dunns River Lounge',
  'Walking With Jesus',
  'T Club',
  "Elena's",
  'Leray Heights',
  'Red Camper',
  'Pleasant Ridge II Restaurant',
  'Marilyn Pizzeria & Restaurant',
  'Stop-n- Buy Inc',
  "Amazona's Restaurant",
  'Camp Powerhouse City Of Deliverance Churc',
  "Dina's Food",
  'Mary Nevinger Cakes',
  'Bethlehem Food Mart Inc.',
  'Brown Palace Arms',
  'Janets Community Daycare Inc.',
  'Taco Bar',
  'Turkois Grille',
  "It's A Kidz World",
  'Hooters Of Syracuse',
  'Taco & Burrito Palace',
  'Diamond Dreams At Cooperstown Snack Bar',
  'Cmm Catering Company',
  'Timeless Ar',
  'Paleteria Oso Polar',
  'Dunkir',
  'Ciao Amore',
  'Sonya Food Market',
  'Inc',
  'Que Rico Supermercado',
  'I Love Ny Deli & Grocery',
  'Percy Jackson Youth Center',
  "Herman's Hot Dogs",
  'Gyro Hut',
  "Giuseppe's Pizzeria Of Moravia",
  "Johnson's Joint",
  "Mama's Boy",
  'Rathbuns Pizzeria',
  "Carson's Ribs",
  'The Bleeding Heart Bakery',
  'Irvin E. Henry Campus'
];

let websiteGenerator = (restaurantName) => {
    let website = `wwww.${restaurantName.split(' ').join('')}.com`;
    return website
};

let userNames = [
  'Sarah Maximoff ',
  'Minnie De',
  'Anna Orlok ',
  'Bertha Dornez ',
  'Henry Hannigan-spiteri ',
  'Kenneth Frost ',
  'Wayne Lee',
  'Michael Yorke ',
  'Joseph Sanguina ',
  'Henry Ji ',
  'Kenneth Grippen ',
  'Michael Otonashi ',
  'Wayne Munster ',
  'Stephen Shiki ',
  'Travis Smahlt ',
  'Kyle Lafitte ',
  'Straggler Zelretch ',
  'Lynn Hio ',
  'Armand Tachibana ',
  'Ida Hopkirk ',
  'Gloria Paddock ',
  'Zizou Sto'
];

let userComments = [
  'I see you have something to talk about. Well',
  "I have something to shout about. Infact something to sing about. But I'll just keep quiet and let you carry on.",
  'Sometimes I wonder if I really can. But then I think to myself',
  "maybe I can't. But if I could",
  "that would be good. Maybe it's all a lie?",
  "I like to wax my legs and stick the hair on my back. Why? Because it keeps my back warm. There's method in my madness.",
  'If you really wanted to do that',
  "then why wouldn't you do that? Instead you do this. It makes no sense.",
  'I like to say things twice',
  'say things twice. It can get annoying though',
  'annoying though.',
  'I can drive 10 miles',
  'walk 50 feet. Turn around and before I know it',
  "I'd be back home. Or would I? I'm not sure but that's just how it is.",
  'Oppan Gangnam Style Gangnam Style Op op op op oppan Gangnam Style Gangnam Style Op op op op oppan Gangnam Style.',
  "Loving you Isn't the right thing to do How can I Ever change things that I feel? If I could Maybe I'd give you my world How can I When you won't take it from me?",
  'Now this is the story all about how My life got flipped',
  "turned upside down And I'd like to take a minute just sit right there I'll tell you how I became the prince of a town called Bel-air.",
  'If I could I would. Wether or not I should',
  'I still would.',
  'If I roll once and you roll twice. What does that mean?',
  "Look! In the sky. It's a bird",
  "it's a plane. Or is it a hellicopter? No actually I think it is a bird. Or maybe I'm just seeing things. Who knows... After 10 shots of Whiskey things start to get a bit strange.",
  'I see you have something to talk about. Well',
  "I have something to shout about. Infact something to sing about. But I'll just keep quiet and let you carry on."
];

let followersAndReviewsGenerator = () => {
  let results = [];
  let reviews = Math.floor(Math.random() * 500);
  let followers = Math.floor(Math.random() * reviews);
  results.push(followers);
  results.push(reviews);
  return results;
};

let dateGenerator = () => {
  let months = [
    'Janurary',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'Septemeber',
    'October',
    'November',
    'Decemeber'
  ];
  let year =
    '20' + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
  let day = '' + Math.floor(Math.random() * 4) + Math.floor(Math.random() * 10);
  if (day[0] === 0) day = day[1];
  if (day > 31) day -= Math.floor(Math.random() * 10);
  let month = months[Math.floor(Math.random() * months.length)];
  let date = `${month} ${day}, ${year}`;
  return date;
};

let cuisines = [
  "Portuguese Food", 
  "Jewish Food", 
  "Italian Food", 
  "South African Cuisine", 
  "Street Food", 
  "Mauritian Food", 
  "Lebanese Cuisine", 
  "Jamaican Food", 
  "Slovenian Food", 
  "Pakistani Cuisine", 
  "Tibetan Food", 
  "Japanese Cuisine", 
  "Philippino Food", 
  "New Nordic Cuisine", 
  "Copenhagen Cuisine", 
  "Indian Food", 
  "Tahitian Food", 
  "Turkish Food", 
  "Korean Food", 
  "Vietnamese Food", 
  "Sichuan Hot Pot", 
  "Polish Food"
  ]

let cuisinesGenerator = () => {
  let results = []
  let num = Math.ceil(Math.random() * 4)
  let randomNumberOfCalls = (num) => {
    for(let i = 0; i < num; i++ ) {
      let randomInd = Math.floor(Math.random() * cuisines.length)
      if(!results.includes(cuisines[randomInd])) {
        results.push(' ' + cuisines[randomInd])
      }
    }
  }
  randomNumberOfCalls(num)
  return results
}

let idGenerator = () =>{
  let uniqueId = 1
  let nums = [1]
  numGen = () => {
    uniqueId = Math.floor(Math.random() * 1000000000000)
    if(nums.includes(uniqueId)) numGen()
    else {
      nums.push(uniqueId)
      return uniqueId
    }
  }
  return numGen()
}


module.exports = {
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
};
