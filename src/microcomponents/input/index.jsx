import React from "react";
import "./styles.css";

class Input extends React.Component {
  onChange = event => {
    const { onChange } = this.props;
    onChange(event.target.value);
  };
  render() {
    const { placeholder, type, className, onChange, value } = this.props;
    return (
      <input
        className={["input-element", className].join(" ")}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        value={value}
      />
    );
  }
}

export default Input;
