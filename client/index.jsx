import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import NameReviewsDollarSignsAndCuisines from './components/NameReviewsDollarSignsAndCuisines.jsx'
import Map from './components/Map.jsx'
import ImageCarousel from './components/imageCarousel.jsx'

class TopComponent extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      restaurant: null,
      restaurantInfo: {}
    }
    this.getRestaurantInfo = this.getRestaurantInfo.bind(this)
  }

  componentDidMount() {
    this.getRestaurantInfo()
  }



  getRestaurantInfo () {
    let base = window.location.pathname;
    let arr = base.split('/');
    let id = arr[1];
    console.log('printing id in get restinfo in topcomponent =>', id)
    axios.get('http://18.207.242.24:3008/restaurant', {params: {restaurant: id}})
    .then((data) => {
      this.setState({
        restaurantInfo: data.data[0],
        restaurant: id
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
        <br></br>
        <br></br>
        <div className="map">
          <Map 
            restaurantInfo = {this.state.restaurantInfo}
          />
        </div>
        <br></br>
        <br></br>
        <div className="imageCarousel">
          <ImageCarousel
            restaurant = {this.state.restaurant}
          />
        </div>
        
      </div>
    )
  }
}


ReactDOM.render(<TopComponent />, document.getElementById('TopComponent'));