import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUsers as addUsersActionCreator} from '../../actions/addUsers'

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUsers: (users) => { dispatch(addUsersActionCreator(users))
    }
  }
}

class UserList extends Component {
  async componentDidMount() {
    const token = '18476dc1c4fb11f4eebd2c4aaacdb3c14b3cd1e945dd8bc8456b73c8d4ef33cf';
    let result = await fetch(`https://front-test.now.sh/users?token=${token}`)
    let res  = await result.json()
    this.props.addUsers(res.data);
    console.log(res.data)
  }
  render() {
    return (
      <div className="userlist">
        {this.props.users.map((user, index) => {
          return (
            <div key={index}>
             {index + 1}. <Link to={`/users/` + user.id}>{user.firstName} {user.lastName}</Link>
            </div>)
        })}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
