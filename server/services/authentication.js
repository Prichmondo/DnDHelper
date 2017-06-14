const expressJWT = require('express-jwt');
const jwt = require('jsonwebtoken');

var authentication = {
    check: expressJWT({ secret:"mySecret" })
}

module.exports = authentication;
/*
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

// We are going to implement a JWT middleware that will ensure the validity of our token. We'll require each protected route to have a valid access_token sent in the Authorization header
var authentication = {

    authCheck: jwt({
            secret: jwks.expressJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: "https://{YOUR-AUTH0-DOMAIN}.auth0.com/.well-known/jwks.json"
            }),
            // This is the identifier we set when we created the API
            audience: '{YOUR-API-AUDIENCE-ATTRIBUTE}',
            issuer: "https://{YOUR-AUTH0-DOMAIN}.auth0.com/",
            algorithms: ['RS256']
        })

}

module.exports = authentication;
*/

 

