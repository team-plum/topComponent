import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
    //bind
  }


  render() {
    return (
      <div className="app">
        <div className="restaurantName">
          <h1>Restaurant Name</h1>
        </div>
        
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));