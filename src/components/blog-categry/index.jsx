import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class SearchBox extends React.Component {
  state = {
    categories: []
  };

  componentDidMount() {
    this.loadCategory();
  }

  loadCategory = () => {
    this.setState({
      categories: [
        "Duplex Home",
        "Drawing Rooms",
        "Bedrooms",
        "Kitchen Rooms",
        "Bathrooms",
        "Garden Home",
        "Animation Design"
      ]
    });
  };

  render() {
    const { categories } = this.state;
    return (
      <div className="category-container">
        <h4 className="category-container__title">Categories</h4>
        <ul className="category-container__list">
          {categories.map(category => (
            <li className="category-container__list__item">
              <Link to="#">{category}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchBox;
