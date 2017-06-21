const expressJWT = require('express-jwt');
const jwt = require('jsonwebtoken');
const User = require('../models/user')
const jwtSecret = "mySecret";

var authentication = {

    check: expressJWT({ secret: jwtSecret }),

    login: function(userForm, callback){

        var username = userForm.username;
        var password = userForm.password;

        User.findOne({ username: username }, function(err, user){

            if(!user) { 

                callback(null, 'user not found');

            } else {

                user.comparePassword(password, function(err,isMatch){
                    if(isMatch && isMatch == true){
                        var token = jwt.sign({username: username}, jwtSecret);
                        callback({ token: token, user: user }, null);
                    } else {
                        callback(null, 'Invalid email or password');
                    }
                });

            }
        });
    }

}

module.exports = authentication;

 

