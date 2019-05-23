import React from 'react'
import axios from 'axios';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: null
    }
    this.getImages = this.getImages.bind(this)
  }
  
  componentDidMount() {
    this.getImages(this.props.restaurant)
  }
  getImages (restaurant) {
    axios.get('/picturePopUp', {params: {restaurant: restaurant}})
    .then((data) => {
      this.setState({
        images: data.data
      })
    })
    .catch((err) => {
      console.log('failed to get images at client', err)
    })
  }
  
  render () {
    return (
      <div>
        hello from carousel
      </div>
    )
  }
}

export default ImageCarousel