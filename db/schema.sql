DROP DATABASE IF EXISTS yelpTopComponent;

CREATE DATABASE yelpTopComponent;

USE yelpTopComponent;

DROP TABLE IF EXISTS restaurants;

CREATE TABLE restaurants (
  id INT NOT NULL AUTO_INCREMENT,
  nameOfRest VARCHAR(150) NOT NULL,
  cuisine VARCHAR(150),
  dollarSigns INT,
  addressOfRest VARCHAR(250) NOT NULL,
  phoneNumber INT(10),
  website VARCHAR(150),
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS picturePopUp;
 
CREATE TABLE picturePopUp(
  id INT NOT NULL AUTO_INCREMENT,
  foodPictureLink VARCHAR(150) NOT NULL,
  userThumbnail VARCHAR(150),
  userName VARCHAR(50),
  userComment VARCHAR(250),
  userFollowers INT,
  userNumOfReviews INT,
  dateOfPicture VARCHAR(50),
  restaurantId INT,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS ratings;

CREATE TABLE ratings (
  id INT NOT NULL AUTO_INCREMENT,
  ratingYear INT NOT NULL,
  rating INT NOT NULL,
  restaurantId INT NOT NULL,
  PRIMARY KEY (id)
);


ALTER TABLE picturePopUp ADD FOREIGN KEY (restaurantID) REFERENCES restaurants(id);

ALTER TABLE ratings ADD FOREIGN KEY (restaurantID) REFERENCES restaurants(id);
