import React from "react";
import Input from "../../microcomponents/input";
import imgSearchIcon from "../../assets/images/search.svg";
import "./styles.css";

class SearchBox extends React.Component {
  render() {
    return (
      <div className="input-container">
        <img src={imgSearchIcon} className="input-container__icon" />
        <Input
          type="search"
          placeholder="search..."
          className="input-container__input"
        />
      </div>
    );
  }
}

export default SearchBox;
