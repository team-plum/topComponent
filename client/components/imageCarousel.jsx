import React from 'react'
import axios from 'axios';
import {Modal, ModalBody, Image} from 'react-bootstrap'

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [{foodPictureThumb: ''}, {foodPictureThumb: ''}, {foodPictureThumb: ''}],
      showModal: false,
      restaurantInfo: {},
      restaurant: null
    }
    this.getImages = this.getImages.bind(this)
    this.renderImages = this.renderImages.bind(this)
    this.handleImageClick = this.handleImageClick.bind(this)
    this.getRestaurantInfo = this.getRestaurantInfo.bind(this)
    // this.pictureModal=this.pictureModal.bind(this)
  }
  
  componentDidMount() {
    this.getRestaurantInfo()
  }

  getRestaurantInfo () {
    let base = window.location.pathname;
    let arr = base.split('/');
    let id = arr[1];
    console.log('printing id in Image carousel => ', id)
    axios.get('http://18.207.242.24:3008/restaurant', {params: {restaurant: id}})
    .then((data) => {
      this.setState({
        restaurantInfo: data.data[0],
        restaurant: id
      })
      this.getImages(this.state.restaurant)

    })
    .catch((err) => {
      console.log('failed to get restaurant info at client', err)
    })
  }

  renderImages(arr, index) {
     return (
        <div>
          <div>
            <img 
              src={arr[index].foodPictureThumb} 
              onClick={this.handleImageClick}
            />
          </div>
          <div>
            <Modal show={this.state.showModal}>
              <ModalBody>
                <Image scr={arr[index].foodPictureFull} fluid/>
              </ModalBody>  
            </Modal>
          </div>
        </div>
      ) 
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

  handleImageClick() {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  
  
  render () {
    return (
      <div>
        <div>
          {this.renderImages(this.state.images, 0)}
        </div>
        <div>
          {this.renderImages(this.state.images, 1)}
        </div>
        <div>
          {this.renderImages(this.state.images, 2)}
        </div>
      </div>
      
    )
  }

}

export default ImageCarousel