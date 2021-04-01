import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";

import Typography from "./Typography";
import FormInput from "./FormInput";
import Button from "./Button";
import FormSelect from "./FormSelect";

function SignInForm({ className, onSignIn, serverError, loading }) {
  const ddlValues = [
    {
      value: 1,
      text: "Driver",
    },
    {
      value: 2,
      text: "Passenger",
    },
  ];
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        role: 0,
      }}
      validationSchema={yup.object({
        email: yup.string().email("invalid email address").required("required"),
        password: yup
          .string()
          .max(6, "must be 6 characters or less")
          .required("required"),
        role: yup
          .number()
          .notOneOf([0], "please choose a role")
          .required("required")
      })}
      onSubmit={(values) => {
        values.role = +values.role;
        onSignIn(values);
      }}
    >
      {(formik) => (
        <Form className={className} onSubmit={formik.handleSubmit}>
          <Typography fontWeight={550} variant="h4">
            Sign in
          </Typography>

          <FormInput id="email" name="email" type="email" placeholder="Email" />
          <FormInput
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <FormSelect
            id="role"
            name="role"
            values={ddlValues}
            defaultChoiceText="Select role..."
          />

          {serverError && <div className="form-error">{serverError}</div>}

          {!loading ? (
            <Button
              variant="secondary"
              type="submit"
              marginTop="1.17rem"
              disabled={!formik.isValid}
            >
              Sign in
            </Button>
          ) : (
            <Button
              variant="secondary"
              type="submit"
              marginTop="1.17rem"
              disabled={true}
            >
              Loading...
            </Button>
          )}
        </Form>
      )}
    </Formik>
  );
}

export default SignInForm;
