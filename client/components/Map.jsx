import React from 'react'

class Map extends React.Component {
  constructor(props){
    super(props)
    // this.state = {

    // }
    // bind
  }



  render () {
    return (
      <div>
        <div>{this.props.restaurantInfo.addressOfRestaurant}</div>
        <div>Get Directions</div>
        <div>{this.props.restaurantInfo.phoneNumber}</div>
        <div>{this.props.restaurantInfo.website}</div>
        <div>Message business</div>
        <div>Send to your Phone</div>
      </div>
    )
  }
}

export default Map