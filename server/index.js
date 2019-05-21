const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { getRestaurantInfoController,
        getPicturePopUpInfoController,
        getRatingsInfoController
      } = require('./controllers')
const port = 3000

let app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))

// app.use(express.static(__dirname + 'relative path to bundle'))

app.get('/restaurant', getRestaurantInfoController)
app.get('/picturePopUp', getPicturePopUpInfoController)
app.get('/ratings', getRatingsInfoController)
// app.get('/logo', '../logo.png')
// app.get('googleMap')


app.listen(port, () => {
  console.log(`listening on ${port}!`)
})