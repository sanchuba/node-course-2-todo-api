const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

// var message = 'I love this course!';
// var hash = SHA256(message).toString();
//
// console.log(hash);

var data = {
    id: 4
};

var token = jwt.sign(data, 'bailaba');
console.log('Token', token);

var decoded = jwt.verify(token, 'bailaba');
console.log('Decoded', decoded);

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'Somesecret').toString()
// };