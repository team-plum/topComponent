import React from 'react'
import axios from 'axios'

class NameReviewsDollarSignsAndCuisines extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      ratings: 'sample'
    }
    this.getRatingsInfo = this.getRatingsInfo.bind(this)
  }

  componentDidMount () {
    this.props.getRestaurantInfo(this.props.restaurant)
    this.getRatingsInfo(this.props.restaurant)
  }



  getRatingsInfo(restaurant) {
    axios.get('/ratings', { params: {restaurant: restaurant}})
    .then((data) => {
      this.setState({
        ratings: data.data
      })
      // console.log('expect ratings info => ', data.data)

    })
    .catch((err) => {
      console.log('failed to get ratings info at client', err)
    })
  }

  render() {
    return (
      <div>
        hello from Name
      </div>
    )
  }
}

export default NameReviewsDollarSignsAndCuisines