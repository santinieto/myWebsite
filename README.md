# myWebsite
My first website

/* ------------------------------------------------------------------------------------------------------ */
PASOS DE CREACIÓN
1 - Copio en la carpeta raíz el archivo package.json y desde la consola ejecuto:
    $ npm install 
2 - En la carpeta src creo el primer archivo index.js para levantar el servidor
    - En ese archivo tengo que importar los modulos que voy a usar, los modulos que use en 
      este proyecto están listados más abajo
3 - Al servidor hay que setearle un puerto por el que vamos a transmitir y escuchar las cosas
    - Para este proyecto uso el puerto 3000, pero otros puertos comunes son el 80, 8080, etc.
4 - Generalmente se van a utilizar "plantillas de codigo" (buscar si era asi el nombre) que permiten darle
    dinamismo a los HTML convirtiendolos en código que sea necesario procesar antes de mostrarlo en 
    pantalla. Por este motivo tenemos que decirle al codigo como tiene que interpretar los archivos.
    Aca existen muchas formas de hacer lo mismo, supongamos que usamos EJS para hacer esto, podemos
    pasarle al codigo los archivos ".ejs" o sino, otra forma es decirle que los archivos HTML los
    interprete como EJS. Los archivos "HTML" se guardan en una carpeta que se llama "views". Entonces
    tenemos que:
    a - Donde esta la carpeta views
    b - Decirle que interprete los archivos HTML como EJS ( opcional y solo va a funcionar cuando se utilice
        el metodo render() en lugar de sendFile() )
    c - Tenemos que configurar que el motor de vista sea EJS
5 - Una vez configurado lo anterior, tenemos que confeccionar tambien un archivo que tenga las "rutas" de
    nuestra página, este archivo se guarda en una carpeta que se llama "routes"
6 - Va a haber ciertas porciones del codigo que van a tener que ser reutilizables, como por ejemplo, los
    headers, alguna barra de navegacion, los footers, etc. Todo lo que sea cógido reutilizable se guarda
    en una carpeta que se llama "partials" que esta adentro de "views"
7 - Los proyectos también tienen una carpeta con el nombre "public" dentro de "src" que es el lugar Donde
    se guardan los .css personalizados, las imágenes, etc.
    - Hay que decirle al código de JavaScript donde esta la carpeta "puclic"
    $ app.use( express.static( path.join(__dirname,'public') ) );

/* ------------------------------------------------------------------------------------------------------ */
MÓDULOS UTILIZADOS
1 - Express     :       Sirve para levantar el servidor
2 - Colors      :       Sirve para que los mensajes de consola tengan colores
3 - Path        :       Sirve para manejar los directorios dependiendo si estamos en Windows o Linux
4 - Now         :       Modulo para subir paginas a internet

/* ------------------------------------------------------------------------------------------------------ */  
DUDAS
1 - ¿Cual es la diferencia entre la clase container y container-fluid?

/* ------------------------------------------------------------------------------------------------------ */  
NOTAS
1 - Para importar un módulo se hace con require('<nombre_del_modulo>'); y el resultado generalmente se 
    guarda en una constante (const)
2 - La variable __dirname guarda el directorio desde el cual se ejecuto el proyecto
3 - Por norma general, el archivo que contiene la pagina principal se llama index.html
4 - Para agregar una porcion de codigo reutilizable dentro de los HTML, primero que se tiene que utilizar
    codigo interpretado (ejs) en este caso y segundo que se hace con el comando:
    $ <%- include ('path')%>
5 - Tematicas de Bootstrap:
    - navbar-ligh / navbar-dark
    - bg-light / bg-dark
6 - Alinear algo a la derecha con Bootstrap:
    - justify-content-end
7 - Es importantisimo leer la documentacion por que ahi te explican como hacer muchas cosas
8 - Para animar un objeto HTML tengo que agregar ANIMATE CSS y despues en el objeto, una clase:
    animate__animated animate__<animacion>
9 - Para agrandar un icono de fa (font awesome) se utiliza fa-10x
10 - Si ponemos href="/#about" en algun link, cuando toquemos con el click ese boton nos va a enviar
     (en ese caso particular) a "la pagina principal al elemento que tenga el id=about"

/* ------------------------------------------------------------------------------------------------------ */    
COMANDOS ÚTILES
1 - Abrir una consola en Visual Studio Code                 Ctrl + Shift + ñ
2 - Organizar jerarquias de codigo automaticamente          Ctrl + k Ctrl + f
