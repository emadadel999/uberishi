import { Formik, Form } from "formik";
import * as yup from "yup";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/authForm/Button";
import FormInput from "../components/authForm/FormInput";
import FormSelect from "../components/authForm/FormSelect";
import FormTextArea from "../components/authForm/FormTextArea";
import Typography from "../components/authForm/Typography";
import { useSelector } from "react-redux";

import { createTrip, getLocations } from "../shared/api/trips";
import { useHistory } from "react-router";

const CreateTrips = () => {
  const { currentUser } = useSelector((state) => state.userReducer);
  // const [availabeLocations, setLocations] = useState([]);
  let history = useHistory();
  // useEffect(() => {
  //   getLocations().then((res) => {
  //     setLocations(() => res);
  //   });
  // }, availabeLocations);
  const availabeLocations = [
    { id: 1, name: "Walmart" },
    { id: 2, name: "Square" },
    { id: 3, name: "Hyvee" },
  ];
  return (
    <Formik
      initialValues={{
        locationFromId: 0,
        locationToId: 0,
        dateTime: "",
        costPerSeat: "",
        numberOfSeats: "",
        note: "",
      }}
      validationSchema={yup.object({
        locationFromId: yup.number().notOneOf([0]).required("required"),
        locationToId: yup.number().notOneOf([0]).required("required"),
        dateTime: yup
          .date()
          .min(new Date().toDateString())
          .required("required"),
        costPerSeat: yup.number().required("required"),
        numberOfSeats: yup.number().notOneOf([0]).required("required"),
      })}
      onSubmit={(values) => {
        values.locationFromId = +values.locationFromId;
        values.locationToId = +values.locationToId;
        values.costPerSeat = +values.costPerSeat;
        values.numberOfSeats = +values.numberOfSeats;
        values.dateTime = new Date(values.dateTime);
        values.driverId = currentUser.id;
        values.rolId = currentUser.idRole;
        createTrip(values, history);
      }}
    >
      {(formik) => (
        <Container>
          <Form className="" onSubmit={formik.handleSubmit}>
            <Typography fontWeight={550} variant="h4">
              Create Trip
            </Typography>
            <FormSelect
              id="locationFromId"
              name="locationFromId"
              values={availabeLocations}
              defaultChoiceText="pick up location..."
            />
            <FormSelect
              id="locationToId"
              name="locationToId"
              values={availabeLocations}
              defaultChoiceText="destination..."
            />

            <FormInput
              id="dateTime"
              name="dateTime"
              type="date"
              placeholder="Date"
            />
            <FormInput
              id="costPerSeat"
              name="costPerSeat"
              placeholder="$ Cost per seat.."
            />
            <FormInput
              id="numberOfSeats"
              name="numberOfSeats"
              placeholder="number of seats.."
            />
            <FormTextArea id="note" name="note" placeholder="note" rows={7} />

            <Button
              variant="secondary"
              type="submit"
              marginTop="1.17rem"
              disabled={!formik.isValid}
            >
              Create
            </Button>
          </Form>
        </Container>
      )}
    </Formik>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export default CreateTrips;
