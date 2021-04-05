import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";

import { getDriverTrips, deleteTrip } from "../shared/api/trips";
import trip from "../shared/images/trip.jpeg";

const Trips = () => {
  let history = useHistory();
  const [myTrips, setTrips] = useState([]);
  const { currentUser } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (currentUser) {
      getDriverTrips(currentUser.id, currentUser.idRole).then((res) => {
        setTrips(res);
      });
    }
  }, currentUser);

  const onModify = (trip) => {
    history.push({
      pathname: "/editTrip",
      state: { trip },
    });
  };

  const onDelete = (trip) => {
    deleteTrip(trip.id, currentUser.idRole).then(() => {
      getDriverTrips(currentUser.id, currentUser.idRole).then((res) => {
        setTrips(res);
      });
    });
  };

  return (
    <>
      <div className="container" style={{ paddingTop: "50px" }}>
        <div className="row" style={{ justifyContent: "space-evenly" }}>
          {myTrips
            ? myTrips.map((t, index) => {
                return (
                  <div className="card mb-3 col-5" key={index}>
                    <div className="row g-0">
                      <ImageContainer className="col-md-5">
                        <Image src={trip} alt="Trip" />
                      </ImageContainer>
                      <div className="col-md-7">
                        <div className="card-body">
                          <h5 className="card-title">
                            {t.locationFromName} to {t.locationToName}
                          </h5>
                          <p className="card-text">
                            <small className="text-muted">
                              $ {t.costPerSeat}
                            </small>
                          </p>
                          <p className="card-text">
                            <small className="text-muted">
                              {t.numberOfSeats}  seats allowed
                            </small>
                          </p>
                          <p className="card-text">
                            <small className="text-muted">
                              {new Date(t.dateTime).toLocaleDateString()}
                            </small>
                          </p>
                          <p className="card-text"><b>notes: </b>{t.note}</p>
                          <button
                            className="btn btn-primary mr-5"
                            onClick={() => onModify(t)}
                          >
                            Modify
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => onDelete(t)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

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

export default Trips;
