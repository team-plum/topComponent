const sequilze = require('sequelize')

const ratingsGenerator = (numOfRatings, yrsInBiz =5) => {
  let ratings = []
  let ratingTupels = []
  let year = 2019
  let yrs = []
  for(let i = 0; i < yrsInBiz; i++) {
    yrs.push(year)
    year --
  }
  for(let i = 0; i < numOfRatings; i ++) {
    let randomRating = () => {
      let randomNum = Math.floor(Math.random() * 5)
      if(randomNum < 1) randomNum += Math.floor(Math.random() * 5)
      return randomNum
    }
    ratings.push(randomRating())
  }
  for(let i = 0; i < numOfRatings; i++) {
    let tupel = []
    tupel.push(ratings[i])
    tupel.push(yrs[Math.floor(Math.random() * 4)])
    ratingTupels.push(tupel)
  }
  return ratingTupels
}