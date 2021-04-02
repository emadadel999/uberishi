import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useField } from "formik";
import theme from "./Theme";

const FormTextArea = ({required = false, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <StyledInput {...field} {...props} isError={meta.error} isTouched={meta.touched} />
      {meta.touched && meta.error ? (
        <FormError className="form-error">{meta.error}</FormError>
      ) : null}
    </>
  );
};

FormTextArea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "password", "number", "date"]),
  required: PropTypes.bool,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number
};

// styling
const StyledInput = styled.textarea`
  background-color: ${prop => prop.isError && prop.isTouched ? "#ffd1d1" : theme.color.grey};
  border: 1px solid ${prop => prop.isError && prop.isTouched ? "red" : theme.color.grey};
  border-radius: 4px;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  outline: none;
  font-size: "1rem";
  transition: ${theme.transition.base({ el: "border" })};

  &:focus {
    border: 1px solid ${theme.color.primary};
    transition: ${theme.transition.base({ el: "border" })};
  }
`;
const FormError = styled.div`
  color: red;
  font-size: 0.775rem;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-weight: 550;
`;

export default FormTextArea;
