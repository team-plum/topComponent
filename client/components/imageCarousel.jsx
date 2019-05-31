import React from 'react'
import axios from 'axios';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [{foodPictureThumb: ''}, {foodPictureThumb: ''}, {foodPictureThumb: ''}]
    }
    this.getImages = this.getImages.bind(this)
    this.renderImages = this.renderImages.bind(this)
  }
  
  componentDidMount() {
    this.getImages(this.props.restaurant)
  }

  renderImages(arr, index) {
    return <img src={arr[index]['foodPictureThumb']} />    
  }
  getImages (restaurant) {
    axios.get('http://18.207.242.24:3008/picturePopUp', {params: {restaurant: restaurant}})
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
        {this.renderImages(this.state.images, 0)}
        {this.renderImages(this.state.images, 1)}
        {this.renderImages(this.state.images, 2)}
      </div>
    )
  }
}

export default ImageCarousel