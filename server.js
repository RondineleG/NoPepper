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
server.On('error', onError);
server.On('listening', onListening);

console.log('Api running ' + port)

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

function onError()
{
    if(error.syscall !== 'listen')
    {
       throw error;
    }

    const bind - typeof port === 'string' ?
       'Pipe' + port : 'Port' + port;

       switch(error.code)
       {
           case 'EACCES' :
             console.log(bind + 'Requer previelegios administravivos');
             process.exit(1);
             break;

            case 'EADDRINUSE' :
            console.log(bind + 'Ja esta em uso');
            process.exit();
            break;

            default:
               throw error;

       }
}

function onListening()
{
    const addr = server.address();
    const bind = typeof addr === 'string'
    ? 'pipe' + addr : 'port' + addr.port;

    debug('Ouvindo em ' + bind);

}


