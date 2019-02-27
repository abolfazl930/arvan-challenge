import React from "react";
import "./styles.css";

class Button extends React.Component {
  render() {
    const { children, color, value, type, onClick, className } = this.props;
    return (
      <button
        className={["btn", color, className].join(" ")}
        value={value}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;
