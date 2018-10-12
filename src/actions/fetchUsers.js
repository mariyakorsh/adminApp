import {addUsers} from './addUsers';

let fetchUsers = () => {
  return async dispatch => {
    const token = "18476dc1c4fb11f4eebd2c4aaacdb3c14b3cd1e945dd8bc8456b73c8d4ef33cf";
    let result = await fetch(`https://front-test.now.sh/users?token=${token}`);
    let res = await result.json();
    dispatch(addUsers(res.data));

    console.log(res.data);
  };
};

export default fetchUsers;