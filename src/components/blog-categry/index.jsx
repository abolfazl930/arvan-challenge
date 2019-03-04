import React from "react";
import { Link } from "react-router-dom";
import admin from "../../services/admin";

import "./styles.css";

class SearchBox extends React.Component {
  state = {
    categories: []
  };

  componentDidMount() {
    this.loadCategory();
  }

  loadCategory = async () => {
    console.log("zzzz");
    let response = null;
    try {
      response = await admin.category.get({});
      response = await response.json();

      const categories = response.data.value.result;
      this.setState(
        {
          categories
        },
        () => console.log("categories:", this.state.categories)
      );
    } catch {
      // alert("ارتباط با سرور برقرار نشد");
    }
  };

  render() {
    const { categories } = this.state;
    return (
      <div className="category-container">
        <h4 className="category-container__title">Categories</h4>
        <ul className="category-container__list">
          {categories.map((category, index) => (
            <li className="category-container__list__item" key={index}>
              <Link to="#" key={index}>
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchBox;
