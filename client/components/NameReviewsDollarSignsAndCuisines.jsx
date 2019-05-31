import React from 'react'
import axios from 'axios'
import claimedImg from '../../stockPics/claimed button.png'
import fullStar from '../../stockPics/full star.png'
import halfStar from '../../stockPics/halfstar.png'
import emptyStar from '../../stockPics/empty star.png'
// import detailsButtonImg from '../../../stockPics/details button.png'
import { CartesianGrid, XAxis, YAxis, AreaChart, Area, BarChart, Bar} from 'recharts'
import { Button, Popover, OverlayTrigger, ButtonGroup, ButtonToolbar} from 'react-bootstrap'

class NameReviewsDollarSignsAndCuisines extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      ratingsInfo: {},
      numberOfRatings: 0,
      averageRating: 0,
      cuisines: '',
      graphData: [],
      barGraphData: [{numOfRatings: 0, num: 0}],
      barGraphDataToggle: false
   }
    this.getRatingsInfo = this.getRatingsInfo.bind(this)
    this.getTotalAndAverageReviews = this.getTotalAndAverageReviews.bind(this)
    this.dollarSignGen = this.dollarSignGen.bind(this)
    this.cuisinesSpacer = this.cuisinesSpacer.bind(this)
    this.starsGen = this.starsGen.bind(this)
    this.detailsYearsButtonGen = this.detailsYearsButtonGen.bind(this)
    this.handleYearButtonClick = this.handleYearButtonClick.bind(this)
    this.getBarGraphInfo = this.getBarGraphInfo.bind(this)
    this.handleDetailsButtonClick = this.handleDetailsButtonClick.bind(this)
    this.barGraphDataKey = this.barGraphDataKey.bind(this)
  }

  componentDidMount () {
    this.props.getRestaurantInfo(this.props.restaurant)
    this.getRatingsInfo(this.props.restaurant)
  }

  getRatingsInfo(restaurant) {
    let yearSorter = (arr) => {
      let results = {}
      for(let i = 0; i < arr.length; i ++ ) {
        if (results.hasOwnProperty(arr[i]['ratingYear'])) {
          results[arr[i]['ratingYear']].push(arr[i])
        } else {
          results[arr[i]['ratingYear']] = [arr[i]]
        }
      }
      return results
    }
   
    axios.get('/ratings', { params: {restaurant: restaurant}})
    .then((data) => {
      let convertedData = yearSorter(data.data)
      this.setState({
        ratingsInfo: convertedData
      })
      this.getTotalAndAverageReviews(data.data)
      this.handleYearButtonClick(2019)
      this.getBarGraphInfo(data.data)
    })
    .catch((err) => {
      console.log('failed to get ratings info at client', err)
    })
  }

  getTotalAndAverageReviews(ratingsInfo) {
    this.setState({
      numberOfRatings: ratingsInfo.length
    })
    let totalRatings = 0
    for(let i = 0; i < ratingsInfo.length; i++) {
      totalRatings += ratingsInfo[i].rating
    }
    let averageRating = Math.round((totalRatings/ratingsInfo.length)*2)/2
    this.setState({
      averageRating: averageRating
    })
  }

  dollarSignGen (num) {
    let dollarSigns = ''
    let dollarSign = '$'
    for(let i = 0; i < num; i ++) {
      dollarSigns += dollarSign
    }
    return dollarSigns
  }

  cuisinesSpacer (cuisinesStr) {
    return cuisinesStr.split(',').join('')
  }

  starsGen (num) {
    let results = []
    while (num >= 1) {
      results.push(<img src={fullStar} />)
      num --
    }
    if (num > 0) {
      results.push(<img src={halfStar} />)
    }
    while (results.length !== 5) {
      results.push(<img src={emptyStar} />)
    }
    return results
  }

  handleDetailsButtonClick () {
    this.setState({
      barGraphDataToggle: !this.state.barGraphDataToggle
    })
  }

  barGraphDataKey () {
    return this.state.barGraphDataToggle ? this.state.barGraphData : null
  }
  detailsYearsButtonGen () {
    let results = []
    for(var key in this.state.ratingsInfo) {
      results.push(
        <ButtonGroup aria-label="years buttons" >
          <Button 
            variant="outline-secondary" 
            key={key} 
            value={key}
            onClick={(e) => {this.handleYearButtonClick(e.target.value)}}
          >
            {key}
          </Button>
        </ButtonGroup>
      )
    }
    return results
  }

  handleYearButtonClick (year) {
    let yearRatingsInfo = this.state.ratingsInfo[year]
    let monthSorter = (arr) => {
      let months = ['zeroIndex', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec']
      let results = []
      let counter = 1
      while (counter < 13) {
        let ratingObj = {}
        let numOfRatings = 0
        let ratingsTotal = 0
        for(let i = 0; i < arr.length; i ++ ) {
          if(arr[i]['ratingMonth'] === counter) {
            ratingsTotal += arr[i]['rating']
            numOfRatings ++
          }
        }
        let averageRating = ratingsTotal / numOfRatings
        if(numOfRatings > 0) {
         averageRating = Math.round((ratingsTotal / numOfRatings) * 2) / 2
        }
        if (numOfRatings === 0 && ratingsTotal === 0 ) {
          averageRating = 0
        }
        ratingObj['month'] = months[counter]
        ratingObj['averageRating'] = averageRating
        // monthTupel.push(averageRating)
        results.push(ratingObj)
        counter ++
      }
      return results
    }
    let graphData = monthSorter(yearRatingsInfo)
    this.setState({
      graphData: graphData
    })
  }

  getBarGraphInfo (data) {
    let results = []
    let counter = 5
    while(counter > 0) {
      let ratingsObj = {}
      ratingsObj.numOfRatings = 0
      ratingsObj.number = counter
      for(let key in data) {
        if(data[key].rating === counter) {
          ratingsObj.numOfRatings ++
        }

      }
      results.push(ratingsObj)
      counter --
    }
    this.setState({
      barGraphData: results
    })
  }

  render() {
    return (
      <div>
        <div>
      {[
        <h1>{this.props.restaurantInfo.nameOfRestaurant}</h1>,
          <img src={claimedImg}/>,
          <div>claimed</div>
      ]}
        </div>
        <div>
          {this.starsGen(this.state.averageRating)}
        </div>
        <div>stars</div>
        <div>{`${this.state.numberOfRatings} reviews`}</div>
        <div>
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={
            <Popover
              id="detailsPopover"
              title="Rating Details"
            >
              <div>
                <ButtonToolbar aria-label="years buttons" >
                {this.detailsYearsButtonGen()}
                </ButtonToolbar>
              </div>
              <div>
                <AreaChart 
                  width={200} 
                  height ={125} 
                  data={this.state.graphData}
                > 
                <CartesianGrid strokeDasharray="1 1"/>
                <XAxis dataKey="month"  type="category"/>
                <YAxis dataKey="averageRating" type="number"/>
                <Area type='monotone' dataKey='averageRating' stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
                <br></br>
                <BarChart 
                  width={200}
                  height={125}
                  data={this.barGraphDataKey()}
                  layout="vertical"
                  >
                <XAxis type="number"/>
                <YAxis type="category" dataKey="number"/>
                <Bar 
                  background label
                  dataKey="numOfRatings" 
                  fill="#8884d8" 
                />
                </BarChart>
              </div>
            </Popover>
          }
        >
        <Button variant="outline-secondary" onClick={()=>{this.handleDetailsButtonClick()}}>
          details
        </Button>
        </OverlayTrigger>
        </div>
        <div>{this.dollarSignGen(this.props.restaurantInfo.dollarSigns)}</div>
        <div>{this.props.restaurantInfo.cuisine}</div>
      </div>
    )
  }
}

export default NameReviewsDollarSignsAndCuisines