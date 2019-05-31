import React from 'react'
import axios from 'axios';
import {Modal, ModalBody, Image} from 'react-bootstrap'

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [{foodPictureThumb: ''}, {foodPictureThumb: ''}, {foodPictureThumb: ''}],
      showModal: false
    }
    this.getImages = this.getImages.bind(this)
    this.renderImages = this.renderImages.bind(this)
    this.handleImageClick = this.handleImageClick.bind(this)
    // this.pictureModal=this.pictureModal.bind(this)
  }
  
  componentDidMount() {
    this.getImages(this.props.restaurant)
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
                {console.log('prting full url => ', arr[index].foodPictureFull)}
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

  // pictureModal(picture) {
  //   return  <Modal show={this.state.showModal}>
  //             <ModalBody>
  //             {console.log('printing from pictureModal', picture)}
  //             {/* <img scr={picture}/> */}
  //             </ModalBody> 
  //           </Modal>
  // }
  
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