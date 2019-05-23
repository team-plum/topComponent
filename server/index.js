const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const { getRestaurantInfoController,
        getPicturePopUpInfoController,
        getRatingsInfoController
      } = require('./controllers')
const port = 3008

let app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
let fileToServePath = path.resolve(__dirname, '../dist/')
app.use(express.static(fileToServePath))

app.get('/restaurant', getRestaurantInfoController)
app.get('/picturePopUp', getPicturePopUpInfoController)
app.get('/ratings', getRatingsInfoController)
// app.get('/logo', '../logo.png')
// app.get('googleMap')



app.listen(port, () => {
  console.log(`listening on ${port}!`)
})


