import React from "react";
import styled from "styled-components";

import trip from "../shared/images/trip.jpeg";

const ReservedTrips = () => {
  const myTrips = [
    {
      name: "Going to walmart",
      cost: "1$",
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
      <div className="row" style={{ justifyContent: "space-evenly" }}>
        {myTrips.map((t, index) => {
          return (
            <div className="card mb-3 col-5" key={index}>
              <div className="row g-0">
                <ImageContainer className="col-md-5">
                  <Image src={trip} alt="Trip" />
                </ImageContainer>
                <div className="col-md-7">
                  <div className="card-body">
                    <h5 className="card-title">{t.name}</h5>
                    <p className="card-text">{t.description}</p>
                    <p className="card-text">
                      <small className="text-muted">{t.cost}</small>
                    </p>
                    <button
                      className="btn btn-primary"
                      style={{ marginRight: "10px" }}
                    >
                      Edit
                    </button>
                    <button className="btn btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
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

export default ReservedTrips;
