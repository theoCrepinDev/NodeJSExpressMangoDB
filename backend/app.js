const express = require('express');
const app = express();

//la fonction suivante permet de normalizer le port 
//si le port n'est pas un nombre on renvoit l'argument
//port définit par const port = parseInt(val, 10);
//si le port est posisitif on le renvoit 
//si les deux cas ne sont pa vérifiés on renvoit false

const normalizePort = val =>{
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port
    }
    return false;
};

//on prend la valeur du port passée dans cette fonction
const port = normalizePort(process.env.PORT || '3000');

//on met cette valeur comme port de l'application
await.set('port' , port);

//il faut maintenant cr&er une fonction errorHandler qui permet de
//gérer les erreurs
const errorHandler = error =>{
    if (error.syscall !== 'listen') {
        throw error
    }
    //on récupere l'adresse du server
    const adress = server.adress;
    const bind = typeof adress === 'string' ? 'pipe' + adress : 'port: ' + port;
    //on gère l'erreur en fonction de son type
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            //on quit l'executiob avec une erreure 1
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
            break;
    }
};


app.use((req, rep, next) =>{
    console.log('une reqête a était reçue');
    next();
});

app.use((req, rep, next) =>{
    console.log("Je passe son status en 201");
    rep.status(201);
    console.log('et je renvoit la réponse');
    next();
});

app.use((req, rep) =>{
    rep.json({
        message: 'Votre requête a bien était reçu !'
    })
});

module.exports = app;
