import React from "react";
import styled from "styled-components";

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
    <>
      {myTrips.map((t, index) => {
        return (
          <Card key={t.name}>
            <Inner>
              <Image>image..</Image>
              <Details>
                <Title>{t.name}</Title>
                <TripCost>{t.cost}</TripCost>
                <TripDescription>{t.description}</TripDescription>
              </Details>
            </Inner>
            <BtnContainer>
              <EditBtn>Edit</EditBtn>
              <DeleteBtn>Delete</DeleteBtn>
            </BtnContainer>
          </Card>
        );
      })}
    </>
  );
};

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  text-align: center;
  font-family: arial;

`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
`;

const Details = styled.div`
  width: 70%;
  text-align: left;
  padding-left: 10px;
`;

const Title = styled.h2``;

const TripCost = styled.p`
  color: grey;
  font-size: 22px;
`;
const TripDescription = styled.p``;

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  background-color: cyan;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  button {
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }
  button:hover {
    opacity: 0.7;
  }
`;

const EditBtn = styled.button`
  background-color: black;
`;
const DeleteBtn = styled.button`
  background-color: red;
`;

export default ReservedTrips;
