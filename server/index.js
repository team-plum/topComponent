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

// let fileToServePath = path.resolve(__dirname, '../build/')

app.use(express.static(fileToServePath))
app.use('/:id', express.static(fileToServePath));

app.get('/restaurant', getRestaurantInfoController)
app.get('/picturePopUp', getPicturePopUpInfoController)
app.get('/ratings', getRatingsInfoController)
app.get('/api/questions/:num', getRestaurantInfoController)


app.listen(port, () => {
  console.log(`listening on ${port}! printing dirname => ${__dirname}`)
})


