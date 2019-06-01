const express = require('express')

const { getRestaurantInfoModel,
        getPicturePopUpInfoModel,
        getRatingsInfoModel
      } = require('./models.js')

module.exports = {
  getRestaurantInfoController: (req, res) => {
    console.log('expect rest num =>', req.query)
    let restaurantId = req.query.restaurant
    getRestaurantInfoModel(restaurantId, (err, data) => {
      if(err) {
        res.status(500)
        console.log('failed to retrieve random restaurant at contoller', err)
        res.send()
      } else {
        res.status(200)
        console.log('got random restaurant from db at contoller')
        res.send(data)
      }
    })
  },

  getPicturePopUpInfoController: (req, res) => {
    let restaurantId = req.query.restaurant
    getPicturePopUpInfoModel(restaurantId, (err, data) => {
      if(err) {
        res.status(500)
        console.log('falied to get picturePopUp info at controller =>', err)
        res.send()
      } else {
        res.status(200)
        console.log('got picture pop up info at contorller')
        res.send(data)
      }
    })
  },

  getRatingsInfoController: (req, res) => {
    let restaurantId = req.query.restaurant
    getRatingsInfoModel(restaurantId, (err, data) => {
      if(err) {
        res.status(500)
        console.log('failed to get ratings info at controller =>', err)
        res.send()
      } else {
        res.status(200)
        console.log('got ratings info at controller')
        res.send(data)
      }
    })
  }
  

}
