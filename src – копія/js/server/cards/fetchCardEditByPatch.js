// https://callboard-backend.herokuapp.com/api-docs/#/Call/patch_call__callId_

export default class FetchCardEditByPatch {
  constructor({ email, password }) {
    this.refs = {

    }
  }
var raw = JSON.stringify({" ":" ",});

var requestOptions = {
  method: 'PATCH',
  body: raw,
  redirect: 'follow'
};

FetchCardEditByPatchReguest() {
    return fetch("https://callboard-backend.herokuapp.com/call/patch", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
    .catch(error => console.log('error', error));
  
}
//     Example Value
// // {
//   "title": "Red Shirt",
//   "description": "New red shirt, made from cotton",
//   "category": "Trade",
//   "price": 0,
//   "phone": "+380000000000",
//   "imageUrls": ["string"],
//   "isOnSale": false,
//   "userId": "507f1f77bcf86cd799439011",
//   "id": "507f1f77bcf86cd799439012"
// }