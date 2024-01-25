export default function authHeader() {
  let user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      return { Authorization: 'Bearer ' + user.token };
      // const data = {
      //   'Authorization': 'Bearer ' + user.token,
      //   'Content-Type': 'application/json;charset=UTF-8',    
      //   'Access-Control-Allow-Origin': '*'
      // }
      // return data
    } else {
      return {};
    }
  }
  