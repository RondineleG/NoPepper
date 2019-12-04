'use strict'

const http = require('http');
const express = require('express');
const debug = require('debug')('nopepper:server');


const app = express();
const port = normalizedPort(process.env.PORT || '1408');

app.set('port', port);

const server =  http.createServer(app);
const  router = express.Router();


const route = router.get('/',(req, res , next) =>{
    res.status(200).send({
        title :"Api com Nodejs",
        versiom: "0.0.1"
    });
});

app.use('/', route);

server.listen(port);

console.log('Api rodando ' + port)

function normalizedPort(val)
{
    const port = parseInt(val,10);

    if(isNaN(port))
    {
        return val;
    }

    if(port >= 0)
    {
       return port;
    }

    return false;

}




