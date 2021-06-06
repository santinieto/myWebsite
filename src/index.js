// Cargamos los modulos instalados
const express       = require('express');
const colors        = require('colors');
const path          = require('path');

// Primer mensaje del servidor 
console.log('Starting server!'.underline.green);

// Creamos el servidor
const app           = express();

// Seteamos el motor de vista y le decimos donde esta la carpeta views
// Ademas le decimos que cuando se use el metodo render(), los archivos
// HTML van a ser interpretados como .ejs
app.set(    'views', path.join(__dirname,'views')   );
app.engine( 'html', require('ejs').renderFile       );
app.set(    'view engine','ejs'                     );

// Seteamos el puerto para el servidor
let port            = 3000;
app.set('port', port);

// Cargamos las rutas de los archivos
// Llamar al archivo index.js no es necesario por que se hace por defecto
// Se puege guardar el require en una constante pero no es necesario
app.use( require('./routes/index.js') ); 

// Cargamos los path de los archivos estaticos
app.use( express.static( path.join(__dirname,'public') ) );

// Vamos a escuchar por el puerto seteado
port                = app.get('port');
app.listen(port, () => {
    console.log(`Listening on port ${port}`.underline.green);
});