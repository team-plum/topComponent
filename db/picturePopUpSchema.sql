CREATE TABLE picturePopUp (
  id INT NOT NULL,
  foodPictureLink VARCHAR(500),
  userThumbnail VARCHAR(500),
  userName VARCHAR(50),
  userComment VARCHAR(250),
  userFollowers INT,
  userNumOfReviews INT,
  dateOfPicture VARCHAR(50),
  restaurantId INT,
  PRIMARY KEY (id)
)

