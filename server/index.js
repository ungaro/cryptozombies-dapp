const express = require('express')
const MetaAuth = require('meta-auth')
const next = require('next')

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')


const port = parseInt(process.env.PORT, 10) || 3020
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
//const metaAuth = new MetaAuth()

const handle = app.getRequestHandler()
//const api = require('./api')



const metaAuth = new MetaAuth({
  signature: 'MetaSignature',
  message: 'MetaMessage',
  address: 'MetaAddress',
  banner: 'CryptoZombies Login Instructions'
});





app.prepare()
  .then(() => {
    const server = express()
    server.use(bodyParser.urlencoded({
      extended: true
    }));



    

server.get('/auth/:MetaAddress', metaAuth, (req, res) => {
  // Request a message from the server
  console.log("AUTH REQUEST RECEIVED");
  if (req.metaAuth && req.metaAuth.challenge) {

  var token = jwt.sign({
        challenge: req.metaAuth.challenge
      }, 'jwtSecret', {
        expiresIn: 60*60
      });
 res.status(200).json({
        success: true,
        message: 'Enjoy your token',
        token: token
      })

    res.send(req.metaAuth.challenge)



  }
});

server.get('/auth/:MetaMessage/:MetaSignature', metaAuth, (req, res) => {
  if (req.metaAuth && req.metaAuth.recovered) {
    // Signature matches the cache address/challenge
    // Authentication is valid, assign JWT, etc.
//console.log(req);

//console.log(req.MetaMessage);
console.log(req.params.MetaSignature);

console.log(req.metaAuth.recovered);
  var token = jwt.sign({
        username: req.metaAuth.recovered,
        signature: req.params.MetaSignature
      }, 'jwtSecret', {
        expiresIn: 60*60
      });
 res.status(200).json({
        success: true
      })

    res.send(req.metaAuth.recovered);
  } else {
    // Sig did not match, invalid authentication
    res.status(400).send();
  };
});




    server.get('*', (req, res) => handle(req, res))

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })



