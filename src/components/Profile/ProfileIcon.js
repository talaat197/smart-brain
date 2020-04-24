import React, { Component } from "react";
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";

class ProfileIcon extends Component {
  state = {
    dropdownOpen: false,
  };
  _toggle = () => {
    this.setState((prevState) => ({ dropdownOpen: !prevState.dropdownOpen }));
  };
  render() {
    return (
      <div className="pa4 tc">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this._toggle}>
          <DropdownToggle
            tag="span"
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}
          >
            <img
              src="http://tachyons.io/img/logo.jpg"
              className="br-100 h3 w3 dib"
              alt="avatar"
            />
          </DropdownToggle>
          <DropdownMenu className="b--transparent shadow-5" right>
            <DropdownItem onClick={this.props.toggleModal}>View Profile</DropdownItem>
            <DropdownItem onClick={() => this.props.onRouteChange('signout')}>Sign Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default ProfileIcon;
