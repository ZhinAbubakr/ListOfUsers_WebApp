import React, { Component } from "react";
import User from "../User";
import AddUser from "../AddUser";
import "antd/dist/antd.css";
import { Spin } from "antd";

export default class Todos extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }))
      .catch((error) => console.log(error));
  }

  onAdd = async (name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status !== 201) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        this.setState({ users: [...this.state.users, data] });
      })
      .catch((error) => console.log(error));
  };

  onEdit = async (id, name, email) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        const updatedUsers = this.state.users.map((user) => {
          if (user.id === id) {
            user.name = name;
            user.email = email;
          }

          return user;
        });

        this.setState({ users: updatedUsers });
      })
      .catch((error) => console.log(error));
  };

  onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          this.setState(
            this.state.users({
              users: () => {
                return this.state.users.id !== id;
              },
            })
          );
        }
      })
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <AddUser onAdd={this.onAdd} />
        {this.state.users.length > 0 ? (
          <div>
            {this.state.users.map((user) => (
              <User
                id={user.id}
                key={user.id}
                name={user.name}
                email={user.email}
                onEdit={this.onEdit}
                onDelete={this.onDelete}
              />
            ))}
          </div>
        ) : (
          <div className="example">
            <Spin size="large" />
          </div>
        )}
      </div>
    );
  }
}
