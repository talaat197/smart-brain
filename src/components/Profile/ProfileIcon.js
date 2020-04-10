import React, { Component } from "react";

class ProfileIcon extends Component {
  state = {
    dropdownOpen: false,
  };

  render() {
    return (
      <div className="pa4 tc">
        <img
          src="http://tachyons.io/img/logo.jpg"
          className="br-100 h3 w3 dib"
          alt="avatar"
        />
      </div>
    );
  }
}

export default ProfileIcon;
