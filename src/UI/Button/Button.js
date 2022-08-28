import React from "react";
import classes from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={`${classes.button} ${props.className ? props.className : ""}`}
      type={props.type ? props.type : 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;