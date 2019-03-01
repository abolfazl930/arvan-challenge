import React from "react";
import "./styles.css";

class Input extends React.Component {
  render() {
    const { placeholder, type, className } = this.props;
    return (
      <input
        className={["input-element", className].join(" ")}
        placeholder={placeholder}
        type={type}
      />
    );
  }
}

export default Input;
