import React from 'react'
import axios from 'axios'
import PopUp from 'react-popup'

class NameReviewsDollarSignsAndCuisines extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      ratingsInfo: [],
      numberOfRatings: 0,
      averageRating: 0,
      cuisines: ''

    }
    this.getRatingsInfo = this.getRatingsInfo.bind(this)
    this.getTotalAndAverageReviews = this.getTotalAndAverageReviews.bind(this)
    this.dollarSignGen = this.dollarSignGen.bind(this)
    this.cuisinesSpacer = this.cuisinesSpacer.bind(this)
  }

  componentDidMount () {
    this.props.getRestaurantInfo(this.props.restaurant)
    this.getRatingsInfo(this.props.restaurant)
  }

  getRatingsInfo(restaurant) {
    axios.get('/ratings', { params: {restaurant: restaurant}})
    .then((data) => {
      this.setState({
        ratingsInfo: data.data
      })
      this.getTotalAndAverageReviews(data.data)
    })
    .catch((err) => {
      console.log('failed to get ratings info at client', err)
    })
  }

  getTotalAndAverageReviews(ratingsInfo) {
    this.setState({
      numberOfRatings: ratingsInfo.length
    })
    let totalRatings = 0
    for(let i = 0; i < ratingsInfo.length; i++) {
      totalRatings += ratingsInfo[i].rating
    }
    let averageRating = Math.round((totalRatings/ratingsInfo.length)*2)/2
    this.setState({
      averageRating: averageRating
    })
  }

  dollarSignGen (num) {
    let dollarSigns = ''
    let dollarSign = '$'
    for(let i = 0; i < num; i ++) {
      dollarSigns += dollarSign
    }
    return dollarSigns
  }

  cuisinesSpacer (cuisinesStr) {
    return cuisinesStr.split(',').join('')
  }
  render() {
    return (
      <div>
        <h1>{this.props.restaurantInfo.nameOfRestaurant}</h1> 
        <div>claimed</div>
        <div>stars</div>
        <div>{`${this.state.numberOfRatings} ratings`}</div>
        <div>details button</div>
        <div>{this.dollarSignGen(this.props.restaurantInfo.dollarSigns)}</div>
        <div>{this.props.restaurantInfo.cuisine}</div>
      </div>
    )
  }
}

export default NameReviewsDollarSignsAndCuisines