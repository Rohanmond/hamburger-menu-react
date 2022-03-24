import React from "react";
import { StyledBurger } from "./Burger.styled";

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
Burger.propTypes = {
  open: Boolean.isRequired,
  setOpen: Function.isRequired
};
export default Burger;
