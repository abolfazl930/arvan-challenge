import React, { Component } from "react";
import { locale } from "../../configs/strings";
// import moment from "jalali-moment";
import { convertEnNumToFaNum } from "../../utils/convert-num";
import admin from "../../services/admin";

import "./comment-list.css";
// import imgUser from "../../assets/images/user.svg";

class CommentList extends Component {
  state = {
    name: "",
    date: "",
    text: "",
    items: [],
    page: 1,
    pageSize: 100
  };

  async componentDidMount() {
    const { slug } = this.props;
    const { page, pageSize } = this.state;
    try {
      const response = await admin.comment.list({
        slug,
        page,
        pageSize
      });
      const res = await response.json();
      this.setState({
        items: res.data.value.result
      });
    } catch {}
  }

  // getBeautifyDate = published =>
  //   published
  //     ? convertEnNumToFaNum(
  //         moment(new Date(Number(published)))
  //           .locale("fa")
  //           .format("HH:mm در dddd DD MMMM YYYY")
  //       )
  //     : "";

  render() {
    const { items } = this.state;
    const { slug } = this.props;
    return (
      <div className="class__comment__list" slug={slug}>
        <h4 className="class__comment__list__title">Comments</h4>
        {items.length === 0 ? (
          <div className="class__comment__list__comment_item">
            <p>no comment</p>
          </div>
        ) : (
          items.map(item => (
            <div className="class__comment__list__comment_item" key={item.id}>
              <div className="class__comment__list__comment_item__header">
                <img
                  alt=""
                  className="class__comment__list__comment_item__header__img"
                />
                <div className="class__comment__list__comment_item__header__information">
                  <h1>{item.commenterName}</h1>
                  {/* <p>{this.getBeautifyDate(item.commentCreatedDate)}</p> */}
                </div>
              </div>
              <p className="class__comment__list__comment_item__text_body">
                {item.text}
              </p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default CommentList;
