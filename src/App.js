import React, { Component } from "react";
import "./App.css";
import UserData from "./UserData";
import { fetchUsers } from "./Store/actions/fetchUserActions";
import { fetchSingleUser } from "./Store/actions/singleUserActions";
import { connect } from "react-redux";

class App extends Component {
  state = {
    selected: false
  };

  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  onChangeHandler = event => {
    const select = event.target;
    const id = select.children[select.selectedIndex].id;
    this.props.dispatch(fetchSingleUser(id));
    this.setState({ selected: true });
  };

  render() {
    const { users, loading } = this.props.allUsers;
    const { userdata, isLoading } = this.props.singleUserData;
    return (
      <div className="App">
        <select defaultValue={"default"} onChange={this.onChangeHandler}>
          <option value="default" disabled>
            Select your option
          </option>
          {loading && <option>Loading</option>}
          {users.map(i => {
            return (
              <option id={i.id} key={i.id} value={i.name}>
                {i.name}
              </option>
            );
          })}
        </select>
        <br />
        <br />
        {userdata === null ? "" : <UserData {...userdata} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allUsers: state.allUsers,
    singleUserData: state.fetchSingleUser
  };
};

export default connect(mapStateToProps)(App);
