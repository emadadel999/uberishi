import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { signUserOut } from "../shared/redux/actions/actions";

const Signout = ({ children }) => {
  const dispatch = useDispatch();
  const onSignout = () => {
    dispatch(signUserOut());
  }
  return <SignOutBtn onClick={onSignout}>{children}</SignOutBtn>;
};

export const SignOutBtn = styled.div`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

export default Signout;
