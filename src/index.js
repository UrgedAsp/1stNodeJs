const express = require ('express');
const app = express();
const path = require('path');

/* Configuraciones */
app.set('port', 3000);
app.set('views', path.join(__dirname + '/vistas'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

/* MiddleWares */

/* Rutas*/
app.use(require('./routes/index'));

/* static files */
app.use(express.static(path.join(__dirname, 'public')));

/* Escuchando el servidor */
app.listen(app.get('port'), ()=>{
    console.log('Server on port:', app.get('port'));
})