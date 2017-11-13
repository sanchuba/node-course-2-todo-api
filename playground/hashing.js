const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'myfavoritepassword';

bcrypt.genSalt(10, (err, salt) => {
   bcrypt.hash(password, salt, (err, hash) => {
      console.log(hash);
   });
});

var hashedPassword = '$2a$10$FOFSunAIOnLofraal6YOdOhaGbZ3EwT/.S2j5RVeZ9pr13baSXCWy';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res)
});

// var message = 'I love this course!';
// var hash = SHA256(message).toString();
//
// console.log(hash);

// var data = {
//     id: 4
// };
//
// var token = jwt.sign(data, 'bailaba');
// console.log('Token', token);
//
// var decoded = jwt.verify(token, 'bailaba');
// console.log('Decoded', decoded);

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'Somesecret').toString()
// };