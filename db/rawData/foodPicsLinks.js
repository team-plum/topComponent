const {food} = require('./food.js')

// console.log(food.results[0])

let linksGrabber = (arr) => {
  let results = []
  for(let i = 0; i < arr.length; i ++) {
    let tupel = []
    tupel.push(arr[i].urls.regular)
    tupel.push(arr[i].urls.thumb)
    results.push(tupel)
  }
  return results
}

console.log(linksGrabber(food.results))