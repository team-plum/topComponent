const addresses = require('./rawData/addresses.js');

const ratingsGenerator = () => {
  let year = 2019;
  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let numOfRatings = Math.floor(Math.random() * 100);
  let ratings = [];
  let yrs = [];
  let ratingTupels = [];
  let yrsInBiz = Math.floor(Math.random() * 40);
  for (let i = 0; i < yrsInBiz; i++) {
    yrs.push(year);
    year--;
  }
  let randomRating = val => {
    let randomNum = Math.floor(Math.random() * val);
    if (randomNum < 1) randomNum += Math.floor(Math.random() * val);
    return randomNum;
  };
  for (let i = 0; i < numOfRatings; i++) {
    ratings.push(randomRating(6));
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
  'https://drive.google.com/uc?id=16p2G5_YsSe7A5RbAclBlwJNNkZWi8HpH',
  'https://drive.google.com/uc?id=1llqzvSrv42q9CJmRGv1Nlj3amkoHnYQB',
  'https://drive.google.com/uc?id=1xIVaTHfUc0MXBFNVm7KhDzEUVZOf1vSK',
  'https://drive.google.com/uc?id=1sYJff-MOHkZagsq6vX0nzD04KWPjLUDF',
  'https://drive.google.com/uc?id=1gvVEcWyL7XJOeGTnmzfROeHTxLQRripc',
  'https://drive.google.com/uc?id=1jsNbfZDk91NFUG6qtK-EXUQC4o-3gK1v',
  'https://drive.google.com/uc?id=1F56_dxhwar7HApUkox7eOa9_pEMgr8u7',
  'https://drive.google.com/uc?id=1p8_UXyQMvRhwB5p-CHSFNQwK5kLG83Vf',
  'https://drive.google.com/uc?id=1ez6swc2e4r6qK6w402KYMATlILgeRG4u',
  'https://drive.google.com/uc?id=127v6l-k5yWgXPh9bglG08XdRNNo_FDbO',
  'https://drive.google.com/uc?id=1UxxWcMbVoM3ZIiIXqsFX9Rz7aEiRVpgp',
  'https://drive.google.com/uc?id=19nRPuG_RPLgR5QxmKks_ikYa9Z_UqpVh',
  'https://drive.google.com/uc?id=1j3vxEwQt5UhRjt63EtHd_g4fNXsXoKdG',
  'https://drive.google.com/uc?id=1TDE1MwalOb6CtNhjt6krfCZ2-Vty0XnF',
  'https://drive.google.com/uc?id=1Ub63h0Q922w_7J34dDoPZSSAM0H1lI14',
  'https://drive.google.com/uc?id=1LlQb4nsA0g4wU1J784CCSjUdFPaj4hjO',
  'https://drive.google.com/uc?id=1iOR69ruoMEydM2WqSgFcy8Kza6o7kLxo',
  'https://drive.google.com/uc?id=1mgNk7c2Fe01E7oYs_zUW4FuQPwRY3NSJ',
  'https://drive.google.com/uc?id=1rcLz1XFr-P0dtQnVGnSdwb_bLatRrv60',
  'https://drive.google.com/uc?id=15c3VG7ZS836gUd_PPyfEXsAH-Gql2MOY'
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
  let dollarSigns = Math.floor(Math.random() * 5);
  if (dollarSignGenerator === 0) dollarSigns += Math.floor(Math.random() * 5);
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
  let num = Math.floor(Math.random() * 4)
  while(num === 0) {
    num += Math.floor(Math.random() * 4)
  }
  let randomNumberOfCalls = (num) => {
    for(let i = 0; i < num; i++ ) {
      let randomInd = Math.floor(Math.random() * cuisines.length)
      if(!results.includes(cuisines[randomInd])) {
        results.push(cuisines[randomInd])

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
