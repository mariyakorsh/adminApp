import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import fetchUsers from "../../actions/fetchUsers";
import { Table, Label } from "semantic-ui-react";

const mapStateToProps = state => {
  return {
    users: state.users.users,
    isLoaded: state.users.isLoaded,
    adminInfo: state.auth.userInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers());
    }
  };
};

class UserList extends Component {
  componentDidMount() {
    if (!this.props.isLoaded) {
      this.props.fetchUsers();
    }
  }
  render() {
    if (!this.props.isLoaded && !this.props.adminInfo) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div className="header">
         
        </div>
        <div className="userlist">
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {this.props.users.map(user => {
                return (
                  <Table.Row key={user.id}>
                      <Table.Cell>{user.id}</Table.Cell>
                      <Table.Cell>{user.firstName}</Table.Cell>
                      <Table.Cell>{user.lastName}</Table.Cell>
                   
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
