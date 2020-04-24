import React from "react";
import "./Profile.css";
class Profile extends  React.Component{
  state = {
    name : this.props.user.name,
    age : this.props.user.age,
    pet: this.props.user.pet
  }

  onFormChange = (event) => {
    switch(event.target.name)
    {
      case 'username':
        this.setState({name : event.target.value})
        break;
      case 'age':
        this.setState({age : event.target.value})
        break;
      case 'pet':
        this.setState({age : event.target.value})
        break;
      default:
        return;
    }
  }
  onSubmitForm = (data) => {
    fetch(`http://localhost:3000/profile/${this.props.user.id}` , {
      method : 'post',
      headers : {
        'Content-Type' : 'application/json',
        Authorization: window.sessionStorage.getItem("token"),
    },
      body : JSON.stringify({formInput : data})
    }).then(resp => {
        this.props.toggleModal();
        this.props.loadUser({...this.props.user , ...data})
    }).catch(error => {
      console.log();
    })
  }
  render (){
    const {  toggleModal } = this.props;
    return ( 
      <div className={"profile-modal"}>
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
        <main className="pa4 black-80 w-80">
          <img
            src="http://tachyons.io/img/logo.jpg"
            className="h3 w3 dib"
            alt="avatar"
          />
          <h1>{this.state.name}</h1>
          <h4>Images Submitted: 5</h4>
          <p>Member since: OCT</p>
            <label className="mt2 fw6" htmlFor="username">
              Name:
            </label>
            <input
              className="pa2  ba w-100"
              type="text"
              name="username"
              id="username"
              onChange={this.onFormChange}
            />
            <label className="mt2 fw6" htmlFor="age">
              Age:
            </label>
            <input
              className="pa2  ba w-100"
              type="text"
              name="age"
              id="age"
              onChange={this.onFormChange}
            />
            <label className="mt2 fw6" htmlFor="pet">
              Pet name:
            </label>
            <input
              className="pa2  ba w-100"
              type="text"
              name="pet"
              id="pet"
              onChange={this.onFormChange}
            />
            <div className='mt4' style={{display: 'flex' , justifyContent : "space-evenly"}} >
                <button className='b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20' onClick={(e) => this.onSubmitForm(this.state)}>Save</button>
                <button onClick={toggleModal} className='b pa2 grow pointer hover-white w-40 bg-light-red b--black-20'>Cancel</button>

            </div>
        </main>
        <div className='modal-close' onClick={toggleModal}>&times;</div>
      </article>
    </div>
    )
  }
};

export default Profile;
