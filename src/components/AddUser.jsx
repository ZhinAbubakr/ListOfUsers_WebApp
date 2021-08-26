import React, { Component } from "react";

class AddUser extends Component {
  handleOnSubmit = (evt) => {
    evt.preventDefault();
    this.props.onAdd(evt.target.name.value, evt.target.email.value);
    evt.target.name.value = "";
    evt.target.email.value = "";
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <h3>Add User</h3>
          <input placeholder="Name" name="name" />
          <input placeholder="Email" name="email" />
          <button onSubmit={this.handleOnSubmit}>Add</button>
          <hr />
        </form>
      </div>
    );
  }
}

export default AddUser;
