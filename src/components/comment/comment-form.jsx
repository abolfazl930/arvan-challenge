import React, { Component } from "react";

import Input from "../../microcomponents/input";
import Button from "../../microcomponents/button";
import { isEmail } from "../../utils/is-email";
import admin from "../../services/admin";

import "./comment-form.css";

class CommentForm extends Component {
  state = {
    commenterName: "",
    commenterEmail: "",
    text: "",
    hiddenCommentForm: false,
    invalidcommenterName: false,
    invalidcommenterEmail: false,
    invalidtext: false
  };

  onChangeState = name => event => {
    this.setState(
      {
        [name]: event.target.value,
        [`invalid${name}`]: false
      },
      () => {
        console.log(this.state);
      }
    );
  };

  onClickSendComment = async () => {
    let error = false;

    const { commenterName, commenterEmail, text } = this.state;

    const slug = this.props.slug;

    await this.setState({
      invalidcommenterName: false,
      invalidcommenterEmail: false,
      invalidtext: false
    });

    if (commenterName.trim().length === 0) {
      this.setState({
        invalidcommenterName: true
      });
      error = true;
    }

    if (isEmail(commenterEmail) === false) {
      this.setState({
        invalidcommenterEmail: true
      });
      error = true;
    }

    if (text.trim().length === 0) {
      this.setState({
        invalidtext: true
      });
      error = true;
    }

    if (error === false) {
      try {
        const response = await admin.comment.add({
          commenterName,
          commenterEmail,
          text,
          slug
        });
        const res = await response.json();
        alert(res.data.value.message);
        this.setState({
          hiddenCommentForm: true
        });
      } catch {
        alert("ارتباط با سرور برقرار نشد");
      }
    }
  };

  render() {
    const {
      commenterName,
      commenterEmail,
      text,
      hiddenCommentForm,
      invalidcommenterName,
      invalidcommenterEmail,
      invalidtext
    } = this.state;

    const { slug } = this.props;
    return hiddenCommentForm === false ? (
      <div className="class__comment__form" slug={slug}>
        <h4 className="class__comment__form__title">Write Your Comment</h4>
        <div className="class__comment__form__section_top">
          <Input
            className={[
              "class__comment__form__section_top__name_input",
              invalidcommenterName && "class__comment__form--invalid"
            ].join(" ")}
            onChange={this.onChangeState("commenterName")}
            value={commenterName}
            type="text"
            placeholder="name"
          />
          <Input
            className={[
              "class__comment__form__section_top__email_input",
              invalidcommenterEmail && "class__comment__form--invalid"
            ].join(" ")}
            onChange={this.onChangeState("commenterEmail")}
            value={commenterEmail}
            type="email"
            placeholder="email"
          />
        </div>
        <div
          className={[
            "class__comment__form__section_bottom",
            invalidtext && "class__comment__form--invalid"
          ].join(" ")}
        >
          <Input
            onChange={this.onChangeState("text")}
            value={text}
            placeholder="text"
          />

          <Button
            className="class__comment__form__section_bottom__submit_button"
            onClick={this.onClickSendComment}
            color="primary"
          >
            submit
          </Button>
        </div>
      </div>
    ) : (
      <p className="class__comment__form__send_successful">
        your email has been sent!{" "}
      </p>
    );
  }
}

export default CommentForm;
