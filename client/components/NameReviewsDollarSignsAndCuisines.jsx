import React from 'react'
import axios from 'axios'

class NameReviewsDollarSignsAndCuisines extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      restaurant: 'sample'
    }
    this.randomRestaurant = this.randomRestaurant.bind(this)
    this.getRestaurantInfo = this.getRestaurantInfo.bind(this)
  }

  componentDidMount () {
    this.getRestaurantInfo()
  }

  randomRestaurant () {
    return Math.ceil(Math.random() * 100)
  }

  getRestaurantInfo () {
    let restaurantNum = this.randomRestaurant()
    axios.get('/restaurant', {params: {restaurant: restaurantNum}})
    .then((data) => {
      this.setState({
        restaurant: data.data[0]
      })
      console.log('expect restaurant info => ', data.data[0])
    })
    .catch((err) => {
      console.log('failed to get restaurant info at client', err)
    })
  }

  render() {
    return (
      <div>
        {/* {this.state.restaurant} */}
      </div>
    )
  }
}

export default NameReviewsDollarSignsAndCuisines