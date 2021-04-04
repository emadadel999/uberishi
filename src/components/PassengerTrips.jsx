import React from "react";
import { Card, Media } from "react-bootstrap";

class PassengerTrips extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: "0", title: "" };
  }

  formatDate(dateLog) {
    if (dateLog) return dateLog.substring(0, 19).replace("T", " ");
    else return null;
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        {[this.props.trips].map((t, index) => {
          return (
            <Card key={index}>
              <Card.Body>
                <Media className="align-items-stretch">
                  <div className="align-self-center">
                    <i
                      className="fa fa-car text-warning"
                      style={{
                        fontSize: 60 + "px",
                        marginRight: 20 + "px",
                      }}
                    ></i>
                  </div>
                  <div className="media-body">
                    <h4>
                      From {t[index].locationFromName} to {t.locationToName}{" "}
                    </h4>
                    <h6>{this.formatDate(t.dateTime)} </h6>
                    <span>{t.note}</span>
                  </div>
                  <div className="align-self-center">
                    <h1>$ {t.costPerSeat}</h1>
                  </div>
                </Media>
                <div style={{ float: "right" }}>
                  <button
                    className="btn btn-primary"
                    value={(t, this.props.create)}
                  >
                    {this.props.buttonText}
                  </button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default PassengerTrips;
