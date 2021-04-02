import React from "react";
import { Card, Media} from 'react-bootstrap';
//port {createReservation,deleteReservation} from "../shared/redux/actions/actionReservation";
import { connect } from "react-redux";

class passengerTrips extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: "0",
                        title:"" 
        }
    }
        
    formatDate(dateLog) {
        if (dateLog)
          return dateLog.substring(0, 19).replace('T', ' ');
        else return null;
      }

componentDidMount() {
}

handleClick(t, create){
    console.log(t);
    let passengerId=6;
    if(create=="true"){
        //this.props.dispatch(createReservation(t.id,passengerId));
        console.log("create");
    }
    else{
        //this.props.dispatch(deleteReservation(3,1));
        console.log("edit");
    }
    
  };

    render() {
        return (
        <div>
             <h3>
             {this.props.title}
            </h3>
            {this.props.trips.map((t, index) => {
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
                                <h4>From {t.locationFrom.name} to {t.locationTo.name} </h4>
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
        </div>)
    }
}

function mapStateToProps(state) {
 
    // let _trips = [];
 
    // if (state.reservationReducer && state.reservationReducer.trips) {
    //   _trips = state.reservationReducer.trips
    // }
    return {
     // trips: _trips
    };
 }
export default connect(mapStateToProps)(passengerTrips);
