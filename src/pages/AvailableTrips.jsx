import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import styled from "styled-components";

const AvailableTrips = () => {
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
    <>
      <div className="container">
        <div className="row">
          {myTrips.map((t, index) => {
            return (
              <div className="card mb-3 col-6">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="..." alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{t.name}</h5>
                      <p className="card-text">
                        {t.description}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          {t.cost}
                        </small>
                      </p>
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

export default AvailableTrips;
