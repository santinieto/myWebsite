// Cargamos los modulos instalados
const express   = require('express');
const colors    = require('colors');
const path      = require('path');
const router    = express.Router(); // Sirve para crear multiples rutas y tenerlas en archivos separados

// Creamos las rutas del sitio web
// La primera ruta que creamos es la del archivo HTML principal que se encuentra en la carpeta views
// Para no tener que poner el path absoluto usamos la variable __dirname
// __dirname tiene el path donde estamos parados
router.get('/', (req, res) =>{    
    // res.sendFile(path.join(__dirname,'../views/index.html')); // Si fuera HTML puro se manda asi
    res.render(path.join(__dirname,'../views/index.html'), {
        title: 'SNieto Homepage',
    });   
});

// Creamos las otras rutas
router.get('/contact', (req, res) =>{    
    // res.sendFile(path.join(__dirname,'../views/contact.html')); // Si fuera HTML puro se manda asi  
    res.render(path.join(__dirname,'../views/contact.html'), {
        title: 'Contact',
    });   
});

router.get('/cv', (req, res) =>{ 
    res.render(path.join(__dirname,'../views/cv.html'), { 
        title: 'My CV', 
    });   
});

router.get('/clock', (req, res) =>{ 
    res.render(path.join(__dirname,'../views/clock.html'), { 
        title: 'Clock', 
        script : path.join(__dirname,'../clock.js')
    });   
});

router.get('/tasks', (req, res) =>{
    res.render(path.join(__dirname,'../views/tasks.html'), { 
        title: 'Tasks list', 
    });   
});

router.get('/calculator', (req, res) =>{ 
    res.render(path.join(__dirname,'../views/calculator.html'), { 
        title: 'Calculator', 
    });   
});

router.get('/videoplayer', (req, res) =>{ 
    res.render(path.join(__dirname,'../views/videoplayer.html'), { 
        title: 'Video Player', 
    });   
});

router.get('/notes', (req, res) =>{ 
    res.render(path.join(__dirname,'../views/notes.html'), { 
        title: 'Notes', 
    });   
});

router.get('/weather', (req, res) =>{ 
    res.render(path.join(__dirname,'../views/weather.html'), { 
        title: 'Weather app', 
    });   
});

router.get('/pong', (req, res) =>{ 
    res.render(path.join(__dirname,'../views/pong.html'), { 
        title: 'Pong', 
    });   
});

// Exporto el router
module.exports  = router;