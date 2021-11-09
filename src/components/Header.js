import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1 style={headingStyle}>{title} </h1>
      {/* in line css */}
      {/* <h1 style={{color: 'red', backgroundColor: 'black'}}> {props.title} </h1> */}


      {/* 1. Ternary operator for <Button /> */}
      {/* if location.pathname === '/', show Button, else none */}
      {/* 2. Ternary operator for 'color', 'text' prop */}
      {/* if showAdd === true, AddTask component is being shown, button text should be 'Close', else showAdd === false, AddTask component is hidden, button text should be 'Add' */}
      
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

// Default props object
Header.defaultProps = {
  title: "Task Tracker",
};

// Prop type object
// string, number, bool, array, func ...
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// Heading style css object
const headingStyle = {
  color: "ghostwhite",
  backgroundColor: "deepskyblue",
};

export default Header;
