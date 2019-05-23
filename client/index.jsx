import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import NameReviewsDollarSignsAndCuisines from './components/NameReviewsDollarSignsAndCuisines.jsx'
import Map from './components/Map.jsx'
import ImageCarousel from './components/ImageCarousel.jsx'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      restaurant: this.randomRestaurant(),
      restaurantInfo: null
    }
    this.randomRestaurant = this.randomRestaurant.bind(this)
    this.getRestaurantInfo = this.getRestaurantInfo.bind(this)
  }

  componentDidMount() {
    
  }

  randomRestaurant () {
    return Math.ceil(Math.random() * 100)
  }

  getRestaurantInfo (restaurant) {
    axios.get('/restaurant', {params: {restaurant: restaurant}})
    .then((data) => {
      this.setState({
        restaurantInfo: data.data[0]
      })
      // console.log('expect restaurant info => ', data.data[0])
    })
    .catch((err) => {
      console.log('failed to get restaurant info at client', err)
    })
  }

  render() {
    return (
      <div className="app">
        <div className="restaurantName">
          <NameReviewsDollarSignsAndCuisines 
            restaurant = {this.state.restaurant}
            getRestaurantInfo = {this.getRestaurantInfo}
            restaurantInfo = {this.state.restaurantInfo}
          />
          
        </div>
        <div className="map">
          <Map 
            restaurantInfo = {this.state.restaurantInfo}
          />
        </div>
        <div className="imageCarousel">
          <ImageCarousel
            restaurant = {this.state.restaurant}
          />
        </div>
        
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));