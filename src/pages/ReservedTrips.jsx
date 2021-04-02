import React from "react";
import passengerTrips from "../components/passengerTrips";
//import {getListTrips} from "../shared/redux/actions/actionReservation";
import 'font-awesome/css/font-awesome.min.css';
import { connect } from "react-redux";
import {getTrips} from '../shared/api/trips';

 class ReservedTrips extends React.Component {
  constructor(props) {super(props);
    this.state = {
      trips: []
    };
  }

  componentWillMount () {
    getTrips.getTrips().then(result => {
      console.log(result);
    this.setState({
      trips: result})
    });

    console.log(this.state.trips);
}

render() {
  const { trips } = this.props;
  console.log(this.props);
    const myTrips = [
    {
      name: "Going to walmart  1",
      cost: "1$",
      description: "Some text about the trip..",
    },
    {
      name: "Going to HyVee",
      cost: "2$",
      description: "Some text about the trip..",
    },
    {
      name: "Going to HyVee",
      cost: "2$",
      description: "Some text about the trip..",
    },
  ];
  
  return (
    <div className="container" style={{ paddingTop: "50px" }}>
      <div className="row">
      <div  className="col" >
          <passengerTrips trips={trips} title='Available trips' buttonText="Book trip" create="true"/>
      </div> 
      <div  className="col">
      <passengerTrips trips={trips} title='Reserved Trips' buttonText="Cancel booking" create="false"/>
      </div>
      </div>
    </div>
  );
};
 }


function mapStateToProps(state) {
 
   let _trips = [];

   if (state.reservationReducer && state.reservationReducer.trips) {
     _trips = state.reservationReducer.trips
   }
   return {
     trips: _trips
   };
}

export default connect(mapStateToProps)(ReservedTrips);
//export default ReservedTrips;
