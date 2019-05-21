app.get('/restaurant', getRestaurantInfoController)
  // retrieves restaurant name, phone number, adresss, etc
app.get('/picturePopUp', getPicturePopUpInfoController)
  // retrieves restaurant picture carousel information
app.get('/ratings', getRatingsInfoController)
  // gets ratings for restaurant
  
axios.get('/restaurtants', {params: {restaurantId: 50}})

// response

// [
//     {
//         "id": 50,
//         "nameOfRestaurant": "Mediterranean Grill & Cuisine",
//         "cuisine": "Slovenian Food,Philippino Food,Vietnamese Food",
//         "dollarSigns": 0,
//         "addressOfRestaurant": "554 Edgefield Street  Marshalltown IA 50158",
//         "phoneNumber": "(164) 077-3065",
//         "website": "wwww.MediterraneanGrill&Cuisine.com"
//     }
// ]

axios.get('/picturePopUp', {params: {restaurantId: 50}})

// response

// [
//   {
//       "id": 134216129678,
//       "foodPictureLink": "https://drive.google.com/uc?id=1TDE1MwalOb6CtNhjt6krfCZ2-Vty0XnF",
//       "userThumbnail": "https://drive.google.com/uc?id=1H9UDVMN7kAuvkP7-zm9lOx0T6-wXjhTJ",
//       "userName": "Sarah Maximoff ",
//       "userComment": "I like to wax my legs and stick the hair on my back. Why? Because it keeps my back warm. There's method in my madness.",
//       "userFollowers": 61,
//       "userNumOfReviews": 79,
//       "dateOfPicture": "August 30, 2014",
//       "restaurantId": 50
//   },
//   {
//       "id": 93939129822,
//       "foodPictureLink": "https://drive.google.com/uc?id=1gvVEcWyL7XJOeGTnmzfROeHTxLQRripc",
//       "userThumbnail": "https://drive.google.com/uc?id=1ca9Tk9ofA_SMcg9T_ULmz1RDR8uB8znK",
//       "userName": "Wayne Lee",
//       "userComment": "If I roll once and you roll twice. What does that mean?",
//       "userFollowers": 9,
//       "userNumOfReviews": 247,
//       "dateOfPicture": "November 29, 2084",
//       "restaurantId": 50
//   },
//   {
//       "id": 342163917088,
//       "foodPictureLink": "https://drive.google.com/uc?id=1rcLz1XFr-P0dtQnVGnSdwb_bLatRrv60",
//       "userThumbnail": null,
//       "userName": "Straggler Zelretch ",
//       "userComment": "I have something to shout about. Infact something to sing about. But I'll just keep quiet and let you carry on.",
//       "userFollowers": 104,
//       "userNumOfReviews": 148,
//       "dateOfPicture": "Feburary 13, 2004",
//       "restaurantId": 50
//   },
//   {
//       "id": 300870104305,
//       "foodPictureLink": "https://drive.google.com/uc?id=15c3VG7ZS836gUd_PPyfEXsAH-Gql2MOY",
//       "userThumbnail": "https://drive.google.com/uc?id=1I651eO1hi3JlOSId2ufoYwcXUwlLoxQf",
//       "userName": "Henry Hannigan-spiteri ",
//       "userComment": "I can drive 10 miles",
//       "userFollowers": 213,
//       "userNumOfReviews": 345,
//       "dateOfPicture": "Decemeber 26, 2072",
//       "restaurantId": 50
//   },
//   {
//       "id": 221603644367,
//       "foodPictureLink": "https://drive.google.com/uc?id=1sYJff-MOHkZagsq6vX0nzD04KWPjLUDF",
//       "userThumbnail": "https://drive.google.com/uc?id=1jtBBgLW2DFZzXStSqHAwiq7NWkPJx0AS",
//       "userName": "Stephen Shiki ",
//       "userComment": "say things twice. It can get annoying though",
//       "userFollowers": 26,
//       "userNumOfReviews": 59,
//       "dateOfPicture": "July 10, 2016",
//       "restaurantId": 50
//   },
//   {
//       "id": 949938233392,
//       "foodPictureLink": "https://drive.google.com/uc?id=1LlQb4nsA0g4wU1J784CCSjUdFPaj4hjO",
//       "userThumbnail": "https://drive.google.com/uc?id=18akK59I0ptSXHD0YZgbQ63iR5Q8B8VA5",
//       "userName": "Kyle Lafitte ",
//       "userComment": "Sometimes I wonder if I really can. But then I think to myself",
//       "userFollowers": 6,
//       "userNumOfReviews": 11,
//       "dateOfPicture": "March 01, 2020",
//       "restaurantId": 50
//   },
//   {
//       "id": 22916159434,
//       "foodPictureLink": "https://drive.google.com/uc?id=1ez6swc2e4r6qK6w402KYMATlILgeRG4u",
//       "userThumbnail": "https://drive.google.com/uc?id=1W4NUu4E6pZRPRTGVaf-jsmQsNUEB5buu",
//       "userName": "Wayne Munster ",
//       "userComment": "then why wouldn't you do that? Instead you do this. It makes no sense.",
//       "userFollowers": 232,
//       "userNumOfReviews": 272,
//       "dateOfPicture": "Decemeber 06, 2078",
//       "restaurantId": 50
//   },
//   {
//       "id": 665412067482,
//       "foodPictureLink": "https://drive.google.com/uc?id=15c3VG7ZS836gUd_PPyfEXsAH-Gql2MOY",
//       "userThumbnail": "https://drive.google.com/uc?id=11EY-GcU2nFeIbmoNxYdsCR3rBtGL4Oxz",
//       "userName": "Kenneth Frost ",
//       "userComment": "I'd be back home. Or would I? I'm not sure but that's just how it is.",
//       "userFollowers": 100,
//       "userNumOfReviews": 324,
//       "dateOfPicture": "March 31, 2037",
//       "restaurantId": 50
//   },
//   {
//       "id": 610778739677,
//       "foodPictureLink": "https://drive.google.com/uc?id=1UxxWcMbVoM3ZIiIXqsFX9Rz7aEiRVpgp",
//       "userThumbnail": "https://drive.google.com/uc?id=1cx2M21NlN67WwfPJPQrdaeegd6QHsp8i",
//       "userName": "Wayne Munster ",
//       "userComment": "Loving you Isn't the right thing to do How can I Ever change things that I feel? If I could Maybe I'd give you my world How can I When you won't take it from me?",
//       "userFollowers": 128,
//       "userNumOfReviews": 239,
//       "dateOfPicture": "May 30, 2094",
//       "restaurantId": 50
//   },
//   {
//       "id": 261278021546,
//       "foodPictureLink": "https://drive.google.com/uc?id=1mgNk7c2Fe01E7oYs_zUW4FuQPwRY3NSJ",
//       "userThumbnail": "https://drive.google.com/uc?id=16K2VYEG4QD_3ZDOJpuAt2c8N9ZqescbC",
//       "userName": "Wayne Munster ",
//       "userComment": "then why wouldn't you do that? Instead you do this. It makes no sense.",
//       "userFollowers": 29,
//       "userNumOfReviews": 395,
//       "dateOfPicture": "June 14, 2086",
//       "restaurantId": 50
//   },
//   {
//       "id": 795156060844,
//       "foodPictureLink": "https://drive.google.com/uc?id=16p2G5_YsSe7A5RbAclBlwJNNkZWi8HpH",
//       "userThumbnail": "https://drive.google.com/uc?id=11EY-GcU2nFeIbmoNxYdsCR3rBtGL4Oxz",
//       "userName": "Ida Hopkirk ",
//       "userComment": "that would be good. Maybe it's all a lie?",
//       "userFollowers": 85,
//       "userNumOfReviews": 145,
//       "dateOfPicture": "October 30, 2060",
//       "restaurantId": 50
//   },
//   {
//       "id": 787581921841,
//       "foodPictureLink": null,
//       "userThumbnail": "https://drive.google.com/uc?id=15ojyONediqg7RR7GOhykdHCjLJlX9xTt",
//       "userName": "Travis Smahlt ",
//       "userComment": "Loving you Isn't the right thing to do How can I Ever change things that I feel? If I could Maybe I'd give you my world How can I When you won't take it from me?",
//       "userFollowers": 43,
//       "userNumOfReviews": 210,
//       "dateOfPicture": "Septemeber 28, 2073",
//       "restaurantId": 50
//   },
//   {
//       "id": 138225151057,
//       "foodPictureLink": "https://drive.google.com/uc?id=1gvVEcWyL7XJOeGTnmzfROeHTxLQRripc",
//       "userThumbnail": "https://drive.google.com/uc?id=1OjMeFjaGSI7IdLS7twze8l5LwLcMPCf3",
//       "userName": "Kyle Lafitte ",
//       "userComment": "turned upside down And I'd like to take a minute just sit right there I'll tell you how I became the prince of a town called Bel-air.",
//       "userFollowers": 29,
//       "userNumOfReviews": 203,
//       "dateOfPicture": "June 34, 2001",
//       "restaurantId": 50
//   },
//   {
//       "id": 201902443277,
//       "foodPictureLink": "https://drive.google.com/uc?id=1j3vxEwQt5UhRjt63EtHd_g4fNXsXoKdG",
//       "userThumbnail": "https://drive.google.com/uc?id=1iCxpZQoLyP9aHXc9ul_AfWjtL981rdK8",
//       "userName": "Wayne Lee",
//       "userComment": "If you really wanted to do that",
//       "userFollowers": 17,
//       "userNumOfReviews": 22,
//       "dateOfPicture": "March 31, 2081",
//       "restaurantId": 50
//   },
//   {
//       "id": 760117348001,
//       "foodPictureLink": "https://drive.google.com/uc?id=1llqzvSrv42q9CJmRGv1Nlj3amkoHnYQB",
//       "userThumbnail": "https://drive.google.com/uc?id=1JT17D0eCFbyY38Nr1y7RkTyFIOkWinkE",
//       "userName": "Joseph Sanguina ",
//       "userComment": "Oppan Gangnam Style Gangnam Style Op op op op oppan Gangnam Style Gangnam Style Op op op op oppan Gangnam Style.",
//       "userFollowers": 78,
//       "userNumOfReviews": 492,
//       "dateOfPicture": "Septemeber 09, 2011",
//       "restaurantId": 50
//   },
//   {
//       "id": 325270905280,
//       "foodPictureLink": "https://drive.google.com/uc?id=15c3VG7ZS836gUd_PPyfEXsAH-Gql2MOY",
//       "userThumbnail": null,
//       "userName": "Joseph Sanguina ",
//       "userComment": "that would be good. Maybe it's all a lie?",
//       "userFollowers": 67,
//       "userNumOfReviews": 478,
//       "dateOfPicture": "June 01, 2088",
//       "restaurantId": 50
//   },
//   {
//       "id": 708414557034,
//       "foodPictureLink": "https://drive.google.com/uc?id=1ez6swc2e4r6qK6w402KYMATlILgeRG4u",
//       "userThumbnail": "https://drive.google.com/uc?id=15ojyONediqg7RR7GOhykdHCjLJlX9xTt",
//       "userName": "Sarah Maximoff ",
//       "userComment": "I can drive 10 miles",
//       "userFollowers": 34,
//       "userNumOfReviews": 211,
//       "dateOfPicture": "April 28, 2044",
//       "restaurantId": 50
//   },
//   {
//       "id": 381914807592,
//       "foodPictureLink": "https://drive.google.com/uc?id=1mgNk7c2Fe01E7oYs_zUW4FuQPwRY3NSJ",
//       "userThumbnail": "https://drive.google.com/uc?id=1iCxpZQoLyP9aHXc9ul_AfWjtL981rdK8",
//       "userName": "Minnie De",
//       "userComment": "I see you have something to talk about. Well",
//       "userFollowers": 86,
//       "userNumOfReviews": 106,
//       "dateOfPicture": "July 29, 2022",
//       "restaurantId": 50
//   },
//   {
//       "id": 124909060893,
//       "foodPictureLink": "https://drive.google.com/uc?id=1TDE1MwalOb6CtNhjt6krfCZ2-Vty0XnF",
//       "userThumbnail": "https://drive.google.com/uc?id=1t5n7Sa6SZXeRdX-ZBlCTIiclgtFkz9E_",
//       "userName": "Ida Hopkirk ",
//       "userComment": "that would be good. Maybe it's all a lie?",
//       "userFollowers": 8,
//       "userNumOfReviews": 373,
//       "dateOfPicture": "October 37, 2085",
//       "restaurantId": 50
//   }
// ]

axios.get('/ratings', {params: {restaurantId: 50}})

// response

// [
//   {
//       "id": 962319702013,
//       "ratingYear": 2016,
//       "rating": 4,
//       "ratingMonth": 2,
//       "restaurantId": 50
//   },
//   {
//       "id": 409331395365,
//       "ratingYear": 2016,
//       "rating": 1,
//       "ratingMonth": 10,
//       "restaurantId": 50
//   },
//   {
//       "id": 901183790790,
//       "ratingYear": 2018,
//       "rating": 5,
//       "ratingMonth": 4,
//       "restaurantId": 50
//   },
//   {
//       "id": 668930389755,
//       "ratingYear": 2018,
//       "rating": 5,
//       "ratingMonth": 12,
//       "restaurantId": 50
//   },
//   {
//       "id": 67726050626,
//       "ratingYear": 2016,
//       "rating": 2,
//       "ratingMonth": 1,
//       "restaurantId": 50
//   },
//   {
//       "id": 62207247296,
//       "ratingYear": 2017,
//       "rating": 4,
//       "ratingMonth": 10,
//       "restaurantId": 50
//   },
//   {
//       "id": 420933536368,
//       "ratingYear": 2016,
//       "rating": 2,
//       "ratingMonth": 3,
//       "restaurantId": 50
//   },
//   {
//       "id": 932851710238,
//       "ratingYear": 2017,
//       "rating": 2,
//       "ratingMonth": 7,
//       "restaurantId": 50
//   },
//   {
//       "id": 260790019559,
//       "ratingYear": 2018,
//       "rating": 3,
//       "ratingMonth": 6,
//       "restaurantId": 50
//   },
//   {
//       "id": 625858745792,
//       "ratingYear": 2016,
//       "rating": 2,
//       "ratingMonth": 9,
//       "restaurantId": 50
//   },
//   {
//       "id": 481120480582,
//       "ratingYear": 2017,
//       "rating": 3,
//       "ratingMonth": 3,
//       "restaurantId": 50
//   },
//   {
//       "id": 512141266026,
//       "ratingYear": 2019,
//       "rating": 4,
//       "ratingMonth": 9,
//       "restaurantId": 50
//   },
//   {
//       "id": 171622605338,
//       "ratingYear": 2018,
//       "rating": 4,
//       "ratingMonth": 10,
//       "restaurantId": 50
//   },
//   {
//       "id": 805845717617,
//       "ratingYear": 2019,
//       "rating": 3,
//       "ratingMonth": 8,
//       "restaurantId": 50
//   },
//   {
//       "id": 33044619539,
//       "ratingYear": 2018,
//       "rating": 2,
//       "ratingMonth": 8,
//       "restaurantId": 50
//   },
//   {
//       "id": 606732920026,
//       "ratingYear": 2016,
//       "rating": 5,
//       "ratingMonth": 5,
//       "restaurantId": 50
//   },
//   {
//       "id": 554851763686,
//       "ratingYear": 2017,
//       "rating": 5,
//       "ratingMonth": 1,
//       "restaurantId": 50
//   },
//   {
//       "id": 11669270168,
//       "ratingYear": 2018,
//       "rating": 3,
//       "ratingMonth": 7,
//       "restaurantId": 50
//   },
//   {
//       "id": 424894546431,
//       "ratingYear": 2017,
//       "rating": 1,
//       "ratingMonth": 5,
//       "restaurantId": 50
//   },
//   {
//       "id": 62114775211,
//       "ratingYear": 2019,
//       "rating": 5,
//       "ratingMonth": 7,
//       "restaurantId": 50
//   },
//   {
//       "id": 594278932706,
//       "ratingYear": 2018,
//       "rating": 2,
//       "ratingMonth": 11,
//       "restaurantId": 50
//   },
//   {
//       "id": 370846565800,
//       "ratingYear": 2016,
//       "rating": 2,
//       "ratingMonth": 7,
//       "restaurantId": 50
//   },
//   {
//       "id": 271312775861,
//       "ratingYear": 2019,
//       "rating": 5,
//       "ratingMonth": 12,
//       "restaurantId": 50
//   },
//   {
//       "id": 403798164582,
//       "ratingYear": 2018,
//       "rating": 2,
//       "ratingMonth": 4,
//       "restaurantId": 50
//   },
//   {
//       "id": 477570649906,
//       "ratingYear": 2018,
//       "rating": 4,
//       "ratingMonth": 4,
//       "restaurantId": 50
//   },
//   {
//       "id": 61143993309,
//       "ratingYear": 2017,
//       "rating": 4,
//       "ratingMonth": 6,
//       "restaurantId": 50
//   },
//   {
//       "id": 470496399323,
//       "ratingYear": 2018,
//       "rating": 1,
//       "ratingMonth": 7,
//       "restaurantId": 50
//   },
//   {
//       "id": 376785410205,
//       "ratingYear": 2018,
//       "rating": 4,
//       "ratingMonth": 3,
//       "restaurantId": 50
//   },
//   {
//       "id": 320152113886,
//       "ratingYear": 2017,
//       "rating": 2,
//       "ratingMonth": 7,
//       "restaurantId": 50
//   },
//   {
//       "id": 490632837727,
//       "ratingYear": 2019,
//       "rating": 3,
//       "ratingMonth": 5,
//       "restaurantId": 50
//   },
//   {
//       "id": 301889520872,
//       "ratingYear": 2017,
//       "rating": 3,
//       "ratingMonth": 7,
//       "restaurantId": 50
//   },
//   {
//       "id": 271596480507,
//       "ratingYear": 2016,
//       "rating": 2,
//       "ratingMonth": 8,
//       "restaurantId": 50
//   },
//   {
//       "id": 15181651381,
//       "ratingYear": 2017,
//       "rating": 5,
//       "ratingMonth": 5,
//       "restaurantId": 50
//   },
//   {
//       "id": 71763119532,
//       "ratingYear": 2019,
//       "rating": 3,
//       "ratingMonth": 2,
//       "restaurantId": 50
//   },
//   {
//       "id": 175540551546,
//       "ratingYear": 2016,
//       "rating": 5,
//       "ratingMonth": 4,
//       "restaurantId": 50
//   },
//   {
//       "id": 497002049031,
//       "ratingYear": 2017,
//       "rating": 2,
//       "ratingMonth": 7,
//       "restaurantId": 50
//   },
//   {
//       "id": 166294831670,
//       "ratingYear": 2018,
//       "rating": 5,
//       "ratingMonth": 5,
//       "restaurantId": 50
//   },
//   {
//       "id": 637221334114,
//       "ratingYear": 2016,
//       "rating": 2,
//       "ratingMonth": 7,
//       "restaurantId": 50
//   },
//   {
//       "id": 405192505110,
//       "ratingYear": 2019,
//       "rating": 5,
//       "ratingMonth": 5,
//       "restaurantId": 50
//   },
//   {
//       "id": 499777373710,
//       "ratingYear": 2016,
//       "rating": 0,
//       "ratingMonth": 6,
//       "restaurantId": 50
//   },
//   {
//       "id": 516310882979,
//       "ratingYear": 2017,
//       "rating": 5,
//       "ratingMonth": 3,
//       "restaurantId": 50
//   },
//   {
//       "id": 901701941798,
//       "ratingYear": 2016,
//       "rating": 3,
//       "ratingMonth": 11,
//       "restaurantId": 50
//   },
//   {
//       "id": 313645265719,
//       "ratingYear": 2017,
//       "rating": 5,
//       "ratingMonth": 1,
//       "restaurantId": 50
//   },
//   {
//       "id": 852351362011,
//       "ratingYear": 2018,
//       "rating": 4,
//       "ratingMonth": 4,
//       "restaurantId": 50
//   },
//   {
//       "id": 742028797644,
//       "ratingYear": 2018,
//       "rating": 1,
//       "ratingMonth": 12,
//       "restaurantId": 50
//   },
//   {
//       "id": 715449352474,
//       "ratingYear": 2019,
//       "rating": 3,
//       "ratingMonth": 6,
//       "restaurantId": 50
//   },
//   {
//       "id": 240328940645,
//       "ratingYear": 2018,
//       "rating": 5,
//       "ratingMonth": 10,
//       "restaurantId": 50
//   },
//   {
//       "id": 82002217368,
//       "ratingYear": 2018,
//       "rating": 5,
//       "ratingMonth": 5,
//       "restaurantId": 50
//   },
//   {
//       "id": 450422925120,
//       "ratingYear": 2017,
//       "rating": 2,
//       "ratingMonth": 6,
//       "restaurantId": 50
//   },
//   {
//       "id": 971609309421,
//       "ratingYear": 2019,
//       "rating": 1,
//       "ratingMonth": 6,
//       "restaurantId": 50
//   },
//   {
//       "id": 565437678058,
//       "ratingYear": 2018,
//       "rating": 5,
//       "ratingMonth": 6,
//       "restaurantId": 50
//   },
//   {
//       "id": 780491195107,
//       "ratingYear": 2017,
//       "rating": 0,
//       "ratingMonth": 7,
//       "restaurantId": 50
//   },
//   {
//       "id": 192044020400,
//       "ratingYear": 2016,
//       "rating": 2,
//       "ratingMonth": 10,
//       "restaurantId": 50
//   },
//   {
//       "id": 343029012672,
//       "ratingYear": 2016,
//       "rating": 3,
//       "ratingMonth": 12,
//       "restaurantId": 50
//   },
//   {
//       "id": 189573059177,
//       "ratingYear": 2017,
//       "rating": 2,
//       "ratingMonth": 1,
//       "restaurantId": 50
//   },
//   {
//       "id": 257140450640,
//       "ratingYear": 2017,
//       "rating": 1,
//       "ratingMonth": 3,
//       "restaurantId": 50
//   },
//   {
//       "id": 65465808992,
//       "ratingYear": 2018,
//       "rating": 3,
//       "ratingMonth": 7,
//       "restaurantId": 50
//   },
//   {
//       "id": 410630779191,
//       "ratingYear": 2018,
//       "rating": 1,
//       "ratingMonth": 5,
//       "restaurantId": 50
//   },
//   {
//       "id": 512576097609,
//       "ratingYear": 2019,
//       "rating": 1,
//       "ratingMonth": 1,
//       "restaurantId": 50
//   },
//   {
//       "id": 785202660018,
//       "ratingYear": 2019,
//       "rating": 1,
//       "ratingMonth": 12,
//       "restaurantId": 50
//   }
// ]
