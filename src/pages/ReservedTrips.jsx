import React from "react";
import styled from "styled-components";
import trip from "../shared/images/trip.jpeg";
import {getPastReservations} from '../shared/api/trips';
import { connect } from "react-redux";
import Rating from '@material-ui/lab/Rating';
import {rateReservation} from '../shared/api/trips';
 class ReservedTrips extends React.Component {
  constructor(props) {super(props);
    this.state = {
      trips: [],
      user: ''
    };
  }
  componentDidMount() {
    if (this.props.currentUser) {
      const userId = this.props.currentUser.id;
      const roleId = this.props.currentUser.idRole;
      getPastReservations(userId, roleId).then(result => {
        this.setState({
        trips: result})
      });
    }
  }
  formatDate(dateLog) {
    if (dateLog)
      return dateLog.substring(0, 19).replace('T', ' ');
    else return null;
  }

  handleRateReserve(t,newValue){
    if (this.props.currentUser) {   
      const userId = this.props.currentUser.id;
      const roleId = this.props.currentUser.idRole;
      rateReservation(userId,roleId,t.id,newValue).then(() => {
        getPastReservations(userId, roleId).then(result => {
          this.setState({
          trips: result})
        });
      });
    } };

  
render() {
  if(!this.state.trips.length)
  return null;
  const { currentUser } = this.props   
   return (
    <>
  {}
      <div className="container" style={{ paddingTop: "50px" }}>
        <div className="row" style={{ justifyContent: "space-evenly" }}>
          {
             this.state.trips.map((t, index) => {
            return (
              <div className="card mb-3 col-5" key={index}>
                <div className="row g-0">
                   <ImageContainer className="col-md-5">
                    <Image src={trip} alt="Trip" />
                  </ImageContainer> 
                  <div className="col-md-7">
                    <div className="card-body">
                      <h4 className="card-title">From {t.locationFromName} to {t.locationToName} ${t.costPerSeat}</h4>
                      <p className="card-text"> {this.formatDate(t.dateTime)} </p>
                      <p className="card-text"> {t.note}</p>
                      <div>
                <h6>Rate your trip: </h6>
                <Rating
                      name="simple-controlled"
                      value={t.rate}
                      onChange={(event, newValue) => {
                        this.handleRateReserve(t,newValue)
                      }}
                    />       
                        </div>
                    </div>
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </>
  );



};
}
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
`;

const Image = styled.img`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 200px;
`;
function mapStateToProps(state) {
  const {currentUser}=state.userReducer;
 return {
  currentUser
};
}
export default connect(mapStateToProps)(ReservedTrips);
//export default ReservedTrips;
