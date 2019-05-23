import React from 'react';
import ReactDOM from 'react-dom';
import NameReviewsDollarSignsAndCuisines from './components/NameReviewsDollarSignsAndCuisines.jsx'

class App extends React.Component{
  constructor(props){
    super(props)
    // this.state = {

    // }
    //bind
  }


  render() {
    return (
      <div className="app">
        <div className="restaurantName">
          < NameReviewsDollarSignsAndCuisines />
          
        </div>
        
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));