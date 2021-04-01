import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useField } from "formik";
import theme from "./Theme";

const FormSelect = ({
  required = false,
  values,
  defaultChoiceText,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <StyledSelect
      {...field}
      {...props}
      isError={meta.error}
      isTouched={meta.touched}
    >
      <option defaultValue>
        {defaultChoiceText}
      </option>
      {values.map((obj, index) => {
        return <option key={index} value={obj.value}>{obj.text}</option>;
      })}
      {meta.touched && meta.error ? (
        <FormError className="form-error">{meta.error}</FormError>
      ) : null}
    </StyledSelect>
  );
};

FormSelect.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  size: PropTypes.number,
};

// styling
const StyledSelect = styled.select`
  background-color: ${(prop) =>
    prop.isError && prop.isTouched ? "#ffd1d1" : theme.color.grey};
  border: 1px solid
    ${(prop) => (prop.isError && prop.isTouched ? "red" : theme.color.grey)};
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
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 550;
`;

export default FormSelect;
