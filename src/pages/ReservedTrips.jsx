import React from "react";
import PassengerTrips from "../components/PassengerTrips";
//import {getListTrips} from "../shared/redux/actions/actionReservation";
import 'font-awesome/css/font-awesome.min.css';
import { connect } from "react-redux";
import {getTrips} from '../shared/api/trips';
import { Card, Media} from 'react-bootstrap';
 class ReservedTrips extends React.Component {
  constructor(props) {super(props);
    this.state = {
      trips: []
    };
  }

componentDidMount() {
  getTrips().then(result => {
    console.log(result);
    this.setState({
    trips: result})
  });

  console.log(this.state.trips);
}
    
formatDate(dateLog) {
  if (dateLog)
    return dateLog.substring(0, 19).replace('T', ' ');
  else return null;
}
render() {
  if(!this.state.trips.length)
  return null;
  
   
  return (
    <div className="container" style={{ paddingTop: "50px" }}>
      <div className="row">
       <div  className="col" >
       {this.state.trips.map((t, index) => {
         console.log(t[index]);
                return (
                    <Card key={index}>
                        <Card.Body>   
                        <Media className="align-items-stretch"> 
                            <div className="align-self-center" >
                                <i className="fa fa-car text-warning" style=
                                {{
                                'fontSize': 60 + 'px',
                                'marginRight':20+ 'px'
                                }} ></i>
                            </div>
                            <div className="media-body">
                                <h4>From {t.locationFromName} to {t.locationToName} </h4>
                                <h6>{this.formatDate(t.dateTime)} </h6>
                                <span>{t.note}</span>
                            </div>
                            <div className="align-self-center">
                                <h1>$ {t.costPerSeat}</h1>
                            </div>
                            </Media>
                            <div style={{'float': 'right'}}>
                            <button className="btn btn-primary" value={t,this.props.create} onClick={() =>this.handleClick(t,this.props.create)}>{this.props.buttonText}</button>
                               </div>
                            
                </Card.Body>
                </Card>)
                })}
      </div>{/* 
      <div  className="col">
      <passengerTrips trips={this.state.trips} title='Reserved Trips' buttonText="Cancel booking" create="false"/>
      </div> */}
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
     trips: state.userReducer.currentUser
   };
}

export default connect(mapStateToProps)(ReservedTrips);
//export default ReservedTrips;
