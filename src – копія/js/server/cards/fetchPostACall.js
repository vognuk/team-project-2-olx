// https://callboard-backend.herokuapp.com/api-docs/#/Call/post_call

export default class FetchPostACall {
  constructor({ email, password }) {
    this.refs = {
      requestOptions: {
        method: 'POST',
        headers: {"accept": "application/json",  "Content-Type": "application/json"},
        // body: JSON.stringify({ "email": `${email}`, "password": `${password}` }),
        redirect: 'follow'
      },
    }
  }

  // var raw = "";

  var requestOptions = { //поля нової картки
    method: 'POST',
    body: raw,
    redirect: 'follow'
  };

  fetchPostACallRequest() {
    return fetch("https://callboard-backend.herokuapp.com/call", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
}
// Example Value
// Schema
// {
//   "title": "Red Shirt",
//   "description": "New red shirt, made from cotton",
//   "category": "Trade",
//   "price": 0,
//   "phone": "+380000000000",
//   "imageUrls": [
//     "string"
//   ],
//   "isOnSale": false,
//   "userId": "507f1f77bcf86cd799439011",
//   "id": "507f1f77bcf86cd799439012"
// }