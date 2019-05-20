const express = require('express')
const { getRestaurantInfoModel } = require('./models.js')

module.exports = {
  getRestaurantInfoController: (req, res) => {
    let restaurantId = req.query.restaurant
    getRestaurantInfoModel(restaurantId, (err, data) => {
      if(err) {
        res.status(500)
        console.log('failed to retrieve random restaurant from db at contoller', err)
        res.send()
      } else {
        res.status(200)
        console.log('got random restaurant from db at contoller', data)
        res.send(data)
      }
    })
  },

}