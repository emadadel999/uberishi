import { Formik, Form } from "formik";
import React from "react";
import styled from "styled-components";
import Button from "../components/authForm/Button";
import FormTextArea from "../components/authForm/FormTextArea";
import Typography from "../components/authForm/Typography";
import { useSelector } from "react-redux";

import { editTrip } from "../shared/api/trips";
import { useHistory, useLocation } from "react-router";

const ModifyTrip = () => {
  let location = useLocation();
  const { currentUser } = useSelector((state) => state.userReducer);

  const { trip } = location.state;
  console.log(trip);
  let history = useHistory();
  return (
    <Formik
      initialValues={{
        note: trip.note,
      }}
      onSubmit={(values) => {
        trip.driverId = currentUser.id;
        trip.rolId = currentUser.idRole;
        trip.note = values.note;
        editTrip(trip, history);
      }}
    >
      {(formik) => (
        <Container>
          <Form className="" onSubmit={formik.handleSubmit}>
            <Typography fontWeight={550} variant="h4">
              Modify Trip
            </Typography>
            <FormTextArea id="note" name="note" placeholder="note" rows={7} />
            <Button
              variant="secondary"
              type="submit"
              marginTop="1.17rem"
              disabled={!formik.isValid}
            >
              Submit
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

export default ModifyTrip;
