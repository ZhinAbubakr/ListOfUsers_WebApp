import React, { Component } from "react";

class User extends Component {
  state = {
    isEdit: false,
  };

  handleEdit = () => {
    this.setState({ isEdit: !this.state.isEdit });
  };

  handleDelete = () => {
    this.props.onDelete(this.props.id);
  };

  handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    this.props.onEdit(
      this.props.id,
      evt.target.name.value,
      evt.target.email.value
    );
    this.setState({ isEdit: !this.state.isEdit });
  };

  render() {
    return (
      <div>
        {this.state.isEdit ? (
          <form onSubmit={this.handleOnEditSubmit}>
            <input
              placeholder="Name"
              name="name"
              defaultValue={this.props.name}
            />
            <input
              placeholder="Email"
              name="email"
              defaultValue={this.props.email}
            />
            <button onSubmit={this.handleOnEditSubmit}>Save</button>
          </form>
        ) : (
          <div className="user">
            <span className="user-name" style={{ paddingRight: 15 }}>
              <h4>Nmae :</h4>
              {this.props.name}
            </span>
            <span className="user-email">
              <h4>Email :</h4>
              {this.props.email}
            </span>

            <div>
              <br />
              <button onClick={this.handleEdit}>Edit</button>
              <button onClick={this.handleDelete}>Delete</button>
              <hr class="dashed" />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default User;
