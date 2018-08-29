import React, { Component } from "react";
import "./index.css";

class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (
      this.props.issues &&
      this.props.issues.issues &&
      this.props.issues.issues.length
    ) {
      const user = this.props.issues.issues[0].user;
      console.log(this.props);
      return (
        <section className="user-info-wrapper">
          {/* <a href={user.html_url} target="_blank" className="avatar">
            <img src={user.avatar_url} id="profileImage" alt={user.login} />
          </a> */}
          <div className="git-info">
            <span>{this.props.params.gituser} / {this.props.params.gitrepo}</span>
          </div>
        </section>
      );
    } else {
      return "";
    }
  }
}

export default UserInfo;
