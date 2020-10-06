/*
The following file contains:
- A list of objects: each object is a question whith it´s answers and the correct one. It´s a Json list. It's ordered as follows(start in 0 like the list item, ):
    * Questions from 0 to 13 (both included): HTML radio questions.
    * Questions from 14 to 29 (both included): HTML dropdown questions.
    * Questions from 30 to 35 (both included): HTML checkbox questions.
    * Questions from 36 to 43 (both included): CSS radio questions.
    * Questions from 44 to 49 (both included): CSS dropdown questions.
    * Questions from 50 to 55 (both included): CSS checkbox questions.
    * Questions from 56 to 61 (both included): JavaScript radio questions.
    * Questions from 62 to 69 (both included): JavaScript dropdown questions.
    * Questions from 70 to 75 (both included): JavaScriot checkbox questions.
- 
*/

// Create the questions list.
const questionsData = [
    {
        "question": "¿Cuál es la función de la etiqueta <table>?",
        "a": "Define un texto que sera guardado como tabla por el navegador.",
        "b": "Define una tabla HTML.",
        "c": "Define una entrada de una imagen.",
        "d": "Define el texto visible de una tabla.",
        "correct": "b"
    }, {
        "question": "¿Cuál es la función de la etiqueta <textarea>?",
        "a": "Define un campo de entrada en el que el usuario puede introducir datos.",
        "b": "Define un area de texto que el navegador guardara como datos.",
        "c": "Define entradas de texto multilínea.",
        "d": "Define un párrafo de texto.",
        "correct": "c"
    }, {
        "question": "¿Cuál es la función de la etiqueta <select>?",
        "a": "Define menús de selección desplegables.",
        "b": "Define un campo de entrada en el que el usuario puede introducir datos.",
        "c": "Define una seleccion de datos para el navegador.",
        "d": "Define parrafos de texto para su selección con el ratón",
        "correct": "a"
    }, {
        "question": "¿Cuál es la función de la etiqueta <input>?",
        "a": "Define un formulario de entrada de datos.",
        "b": "Define un parrafo de texto.",
        "c": "Define etiquetas para diferentes elementos.",
        "d": "Define un campo de entrada en el que el usuario puede introducir datos.",
        "correct": "d"
    }, {
        "question": "¿Cuál es la función de la etiqueta <form>?",
        "a": "Define una lista ordenada.",
        "b": "Define un formulario HTML para entradas de datos por parte del usuario.",
        "c": "Aplica estilos al texto.",
        "d": "Define una tabla HTML para que el navegador obtenga datos.",
        "correct": "b"
    }, {
        "question": "¿Cuál es la función de la etiqueta <li>?",
        "a": "Define un elemento de una lista, tanto ordenada como desordenada.",
        "b": "Define un elemento (solo en listas ordenadas).",
        "c": "Define un elemento (solo en listas desordenadas).",
        "d": "Ninguna de las anteriores.",
        "correct": "a"
    }, {
        "question": "¿Cuál es la diferencia entre la etiqueta <ul> y la etiqueta <ol>?",
        "a": "<ul> es una lista ordenada y <ol> es una lista desordenada.",
        "b": "<ul> es una lista numerada y <ol> es una lista no numerada.",
        "c": "<ul> es una lista desordenada y <ol> es una lista ordenada.",
        "d": "<ul> es una lista comparada y <ol> es una lista no comparada.",
        "correct": "c"
    }, {
        "question": "¿Cuál es la función de la etiqueta <script>?",
        "a": "Define la información de estilos para un documento.",
        "b": "Define la función de un documento.",
        "c": "Define las acciones que se realizan sobre un documento con un lenguaje de programación.",
        "d": "Define un elemento de una lista ordenada.",
        "correct": "c"
    }, {
        "question": "¿Cuál es la función de la etiqueta <style>?",
        "a": "Define los metadatos para un documento HTML.",
        "b": "Define la información de estilos para un documento.",
        "c": "Define las acciones que se realizan sobre un documento con un lenguaje de programación.",
        "d": "Aplica estilos al texto o agrupa elementos en linea.",
        "correct": "b"
    }, {
        "question": "¿Cuál es la diferencia entre la etiqueta <div> y la etiqueta <span>?",
        "a": "<div> es un elemento en bloque y <span> es un elemento en línea.",
        "b": "<div> es un elemento en línea y <span> es un elemento en bloque.",
        "c": "<div> es un elemento globlal y <span> es un elemento local.",
        "d": "<div> es un elemento local y <span> es un elemento global.",
        "correct": "a"
    }, {
        "question": "¿A qué nos referimos con HTML5?",
        "a": "A la unión de HTML y CSS.",
        "b": "Conjunto de normas para la creacion de documentos HTML.",
        "c": "Es el último estandar de HTML que combina HTML, CSS3 y JavaScript.",
        "d": "A la unión de HTML y JavaScript.",
        "correct": "c"
    }, {
        "question": "¿Cuál es la diferencia entre un link relativo y uno absoluto?",
        "a": "El relativo es una dirección web completa y el absoluto una dirección local.",
        "b": "El relativo es un link a una web externa y el absoluto a un apartado de la misma web.",
        "c": "El relativo es un link a un apartado de la misma web y el absoluto a una web externa.",
        "d": "El relativo es una dirección local y el absoluto es una dirección web completa.",
        "correct": "d"
    }, {
        "question": "¿Qué conocemos por DOM?",
        "a": "Estructura lógica de los documentos, así como su acceso y forma de manipulado.",
        "b": "Document object modulation.",
        "c": "Es la representación del HTML.",
        "d": "Es la forma que tenemos de manipular nuestros archivos HTML.",
        "correct": "a"
    }, {
        "question": "¿Qué es un navegador web?",
        "a": "Aplicación para navegar por internet.",
        "b": "Aplicación de software que se utiliza para acceder a la información de la World Wide Web.",
        "c": "Software para entrar a webs.",
        "d": "Software para navegar por internet.",
        "correct": "b"
    }, {
        "question": "¿Qué significa HTML?",
        "a": "JavaScript objet notation.",
        "b": "Cascading style sheet.",
        "c": "Hipertext markup language.",
        "d": "Helicopter terminals motorboard land.",
        "correct": "a"
    }, {
        "question": "¿Cuál es la función principal de HTML?",
        "a": "Estructurar la información de una web.",
        "b": "Transmitir la información de una web.",
        "c": "Ordenar la información de una web.",
        "d": "Transmitir y estructurar información.",
        "correct": "d"
    }, {
        "question": "¿Qué es el World Wide Web Consortium?",
        "a": "Comunidad internacional que marca los estandares web.",
        "b": "Consorcio para la creación de internet.",
        "c": "Asociación de trabajadores web.",
        "d": "Conjunto de webs de internet.",
        "correct": "a"
    }, {
        "question": "¿Cuál es el objetivo del World Wide Web Consortium?",
        "a": "Que todas las webs sean iguales.",
        "b": "Guardar un histórico de todas las webs.",
        "c": "Crear un listado de desarrolladores web.",
        "d": "Crear un estandar para la programación web.",
        "correct": "d"
    }, {
        "question": "¿Cómo se pueden linkear dos archivos HTML?",
        "a": "Con la etiqueta <script> y su propiedad src.",
        "b": "Con la etiqueta <a> y su propiedad href.",
        "c": "Con la etiqueta <input> y su propiedad src.",
        "d": "Con la etiqueta <input> y su propiedad href.",
        "correct": "b"
    }, {
        "question": "¿Cuál es la función de la etiqueta <html>?",
        "a": "Iniciar un documento HTML.",
        "b": "Englobar todos los demás elementos HTML.",
        "c": "Contener la información visible de una página.",
        "d": "Agrupar un párrafo de texto.",
        "correct": "b"
    }, {
        "question": "¿Cuál es la función de la etiqueta <body>?",
        "a": "Englobar todos los elementos visibles de una página.",
        "b": "Iniciar un documento HTML.",
        "c": "Crear una lista de elementos.",
        "d": "Englobar los metadatos de una página.",
        "correct": "a"
    }, {
        "question": "¿Cuál es la función de la etiqueta <head>?",
        "a": "Englobar todos los elementos visibles en una página.",
        "b": "Iniciar un documento HTML.",
        "c": "Englobar los metadatos de una web.",
        "d": "Incluir una imagen en la página.",
        "correct": "c"
    }, {
        "question": "¿Cuál es la función de la etiqueta <div>?",
        "a": "Englobar un apartado de la página.",
        "b": "Agrupar elementos en linea.",
        "c": "Define la información de estilos en un documento.",
        "d": "Define una división o sección.",
        "correct": "d"
    }, {
        "question": "¿Cuál es la función de la etiqueta <p>?",
        "a": "Englobar los elementos visibles de una página.",
        "b": "Define los metadatos de un documento HTML.",
        "c": "Define un párrafo.",
        "d": "Define un nuevo post.",
        "correct": "c"
    }, {
        "question": "¿Cuál es la función de la etiqueta <span>?",
        "a": "Agrupar elementos en bloque.",
        "b": "Crea un pop up en la página.",
        "c": "Aplica estilos al texto o agrupa elementos en línea.",
        "d": "Genera información para ser guardada en el navegador.",
        "correct": "c"
    }, {
        "question": "¿Cuál es la función de la etiqueta <meta>?",
        "a": "Define la función de un documento HTML.",
        "b": "Define los metadatos de un documento HTML.",
        "c": "Define el idioma de un documento HTML.",
        "d": "Define la posición de un documento HTML.",
        "correct": "b"
    }, {
        "question": "¿Cuál es la función de la etiqueta <ul>?",
        "a": "Define una lista desordenada.",
        "b": "Define elementos en bloque.",
        "c": "Define un párrafo de texto.",
        "d": "Define una lista ordenada.",
        "correct": "a"
    }, {
        "question": "¿Cuál es la función de la etiqueta <ol>?",
        "a": "Define una lista desordenada.",
        "b": "Define un párrafo de texto.",
        "c": "Define elementos en bloque.",
        "d": "Define una lista ordenada.",
        "correct": "d"
    }, {
        "question": "¿Cuál es la función de la etiqueta <a>?",
        "a": "Definir un párrafo.",
        "b": "Definir una imagen.",
        "c": "Definir una lista.",
        "d": "Definir un hipervínculo.",
        "correct": "d"
    }, {
        "question": "¿Cuál es la función de la etiqueta <label>?",
        "a": "Define un formulario HTML.",
        "b": "Define una lista de elementos desordenados.",
        "c": "Define etiquetas para diferentes elementos.",
        "d": "Define etiquetas para dar estilo a los elementos.",
        "correct": "c"
    }, {
        "question": "¿Cuáles de los siguientes atributos pertenecen a los atributos globales? (Respuesta múltiple)",
        "a": "El atributo class.",
        "b": "El atributo onreset.",
        "c": "El atributo id.",
        "d": "El atributo title.",
        "correct": ["a", "c", "d"]
    }, {
        "question": "¿Cuáles de los siguientes atributos pertenecen a los globales? (Respuesta múltiple)",
        "a": "El atributo onsubmit.",
        "b": "El atributo hidden.",
        "c": "El atributo lang.",
        "d": "El atributo onclick.",
        "correct": ["b", "c"]
    }, {
        "question": "¿Cuáles de los siguientes atributos pertenecen a los eventos de ventana? (Respuesta múltiple)",
        "a": "El atributo onerror.",
        "b": "El atributo onload.",
        "c": "El atributo ononline.",
        "d": "El atributo onclick.",
        "correct": ["a", "b", "c"]
    }, {
        "question": "¿Cuáles de los siguientes atributos pertenecen a los eventos de formulario? (Respuesta múltiple)",
        "a": "El atributo onsubmit.",
        "b": "El atributo onfocus.",
        "c": "El atributo onload.",
        "d": "El atributo onselect.",
        "correct": ["a", "b", "d"]
    }, {
        "question": "¿Cuáles de los siguientes atributos pertenecen a los eventos de raton? (Respuesta múltiple)",
        "a": "El atributo onwheel.",
        "b": "El atributo oninvalid.",
        "c": "El atributo onreset.",
        "d": "El atributo onclick.",
        "correct": ["a", "d"]
    }, {
        "question": "¿Cuáles de los siguientes atributos pertenecen a los eventos de teclado? (Respuesta múltiple)",
        "a": "El atributo onkeypress.",
        "b": "El atributo ondrag.",
        "c": "El atributo onkeyup.",
        "d": "El atributo oncopy.",
        "correct": ["a", "c"]
    }, {
        "question": "¿Cuál es la función principal de CSS?",
        "a": "Lenguage para crear la apariencia de las páginas webs.",
        "b": "Lenguaje para que se vea igual la pagina en todos los navegadores.",
        "c": "LEnguaje para crear acciones sobre la página.",
        "d": "Lenguaje para que las paginas cambien entre navegadores.",
        "correct": "a"
    }, {
        "question": "¿Qué es un selector?",
        "a": "Forma de determinar a que elementos CSS se le aplica una regla.",
        "b": "Forma de determinar a que elementos JavaScript se le aplica una regla.",
        "c": "Forma de determinar a que elementos HTML se le aplica una regla.",
        "d": "Forma de determinar a que propiedades se les aplica aun valor.",
        "correct": "c"
    }, {
        "question": "¿Qué es un declaración CSS?",
        "a": "Conjunto de reglas de una hoja CSS.",
        "b": "Conjunto de propiedades que se le aplican a un valor.",
        "c": "Conjunto de valores que se le aplican a una propiedad.",
        "d": "Conjunto de propiedades con su valor que se aplican a un selector.",
        "correct": "d"
    }, {
        "question": "Qué son las reglas At?",
        "a": "Reglas que se utilizan para establecer información de metadatos, información condicional o información descriptiba.",
        "b": "Reglas que se utilizan para establecer información de estilos.",
        "c": "Reglas que se utilizan para establecer la información sobre valores.",
        "d": "Reglas que se utilizan para establecer la información sobre propiedades.",
        "correct": "a"
    }, {
        "question": "¿Qué es media query en CSS?",
        "a": "Tecnica introducida en CSS1 para que un bloque de propiedades sea incluido solo si se cumple una condición.",
        "b": "Tecnica introducida en CSS2 para que un bloque de propiedades sea incluido solo si se cumple una condición.",
        "c": "Tecnica introducida en CSS3 para que un bloque de propiedades sea incluido solo si se cumple una condición.",
        "d": "Ninguna de las anteriores.",
        "correct": "c"
    }, {
        "question": "¿Qué conocemos por RGB?",
        "a": "Sistema para representar los colores basado en los colores primarios.",
        "b": "Sistema para representar los colores basado en la cantidad de rojo, verde y azul.",
        "c": "Sistema para representar los colores basado en los colores complementarios.",
        "d": "Sistema para representar los colores basado en la escala de grises.",
        "correct": "b"
    }, {
        "question": "¿Que conocemos por RGBA?",
        "a": "Sistema para representar los colores basado en la cantidad de rojo, verde y azul que, además, incluye la opacidad del color.",
        "b": "Sistema para representar los colores basado en la cantidad de rojo, verde y azul que, además, incluye la intensidad del color.",
        "c": "Sistema para representar los colores basado en la cantidad de rojo, verde y azul que, además, incluye el brillo del color.",
        "d": "Sistema para representar los colores basado en la cantidad de rojo, verde y azul que, además, incluye la luminosidad del color.",
        "correct": "a"
    }, {
        "question": "¿Qué conocemos por hexadecimal?",
        "a": "Sistema para representar colores basado en seis digitos que describen la mezcla de colores primarios.",
        "b": "Sistema para representar colores basado en seis digitos que describen la mezcla de blanco y negro.",
        "c": "Sistema para representar colores basado en diez digitos que describen la mezcla de rojo, verde y azul.",
        "d": "Sistema para representar colores basado en seis digitos que describen la mezcla de rojo, verde y azul.",
        "correct": "d"
    }, {
        "question": "¿Qué significa el acrónimo CSS?",
        "a": "Cross-browser Style Sheet.",
        "b": "Coded Style Sheet.",
        "c": "Cascading Style Sheet.",
        "d": "Coded of Style Sheet.",
        "correct": "c"
    }, {
        "question": "¿Cuáles son las caracteristicas mínimas que debe contener un archivo CSS para cumplir con el estandar?",
        "a": "Debe contener al menos una propiedad.",
        "b": "Debe contener al menos un estilo.",
        "c": "Debe contener al menos un selector.",
        "d": "Debe contenere al menos un regla.",
        "correct": "d"
    }, {
        "question": "¿Qué es una regla?",
        "a": "Conjunto de propiedades aplicados a un estilo.",
        "b": "Conjunto de propiedades aplicados a un selector.",
        "c": "Conjunto de propiedades aplicados a una propiedad.",
        "d": "Conjunto de propiedades aplicados a un valor.",
        "correct": "b"
    }, {
        "question": "¿Qué es un set de reglas CSS?",
        "a": "Colección de valores CSS.",
        "b": "Colección de declaraciones CSS.",
        "c": "Colección de propiedades CSS.",
        "d": "Colección de reglas CSS.",
        "correct": "b"
    }, {
        "question": "¿Qué es una propiedad CSS?",
        "a": "Es un tipo de valor de una etiqueta HTML.",
        "b": "Es un tipo de declaración de una etiqueta HTML.",
        "c": "Es un tipo de atributo de una etiqueta HTML.",
        "d": "Es un tipo de set de reglas de una etiqueta HTML.",
        "correct": "c"
    }, {
        "question": "¿Qué es un valor en CSS?",
        "a": "Son las propiedades asociadas a las reglas.",
        "b": "Son los datos asociados a las etiquetas. ",
        "c": "a y b son correctas.",
        "d": "Son los datos asociados a las propiedades.",
        "correct": "d"
    }, {
        "question": "¿Cuáles son las principales versiones de CSS? (Respuesta múltiple)",
        "a": "CSS 3.",
        "b": "CSS 1.",
        "c": "CSS 4.",
        "d": "CSS 2.",
        "correct": ["a", "b", "d"]
    }, {
        "question": "¿Cuáles son las formas de aplicar las reglas CSS? (Respuesta múltiple)",
        "a": "Entre lineas.",
        "b": "En linea.",
        "c": "Interna.",
        "d": "Externa.",
        "correct": ["b", "c", "d"]
    }, {
        "question": "¿Cuales de los siguientes son tipos de selectores? (Respuesta múltiple)",
        "a": "Selector simple.",
        "b": "Selector racional.",
        "c": "Selector universal.",
        "d": "Selector clase.",
        "correct": ["a", "c", "d"]
    }, {
        "question": "¿Cuáles de los siguientes son tipos de declaraciones CSS? (Respuesta múltiple)",
        "a": "Sets de valores.",
        "b": "Sets de reglas",
        "c": "Reglas de propiedades.",
        "d": "Reglas At",
        "correct": ["b", "d"]
    }, {
        "question": "¿Cuáles de las siguientes opciones son propiedades? (Respuesta múltiple)",
        "a": "position.",
        "b": "display.",
        "c": "width.",
        "d": "center.",
        "correct": ["a", "b", "c"]
    }, {
        "question": "¿Cuáles de las siguientes opciones son propiedades? (Respuesta múltiple)",
        "a": "font-family.",
        "b": "aling-text.",
        "c": "box-shadow.",
        "d": "border-radius.",
        "correct": ["a", "c", "d"]
    }, {
        "question": "¿Qué es JavaScript?",
        "a": "Lenguaje de programación para el desarrollo de sistemas operativos.",
        "b": "Lenguaje de programación para el desarrollo de documentos de texto.",
        "c": "Lenguaje de programación programación para desarrollo web.",
        "d": "Ninguna de las anteriores es correcta.",
        "correct": "c"
    }, {
        "question": "¿Qué es ECMAScript?",
        "a": "Lenguaje de programación similar a JavaScript.",
        "b": "Es un estandar de uso de JavaScript creado por Ecma International.",
        "c": "Mejora de JavaScript que aparece en 1998.",
        "d": "Ninguna de las anteriores es correcta.",
        "correct": "b"
    },  {
        "question": "¿Qué es un evento en JavaScript?",
        "a": "Es una acción que solo puede hacerse por el navegador. JavaScrip puede ejecutar código al detectar los eventos.",
        "b": "Es una acción que solo puede hacerse por un usuário. JavaScrip puede ejecutar código al detectar los eventos.",
        "c": "Es una acción que el navegador o un usuário hacen, JavaScrip no puede ejecutar código al detectar los eventos.",
        "d": "Es una acción que el navegador o un usuário hacen, JavaScrip puede ejecutar código al detectar los eventos.",
        "correct": "d"
    }, {
        "question": "¿Cómo podemos ejecutar código JavaScript?",
        "a": "Incluyendo código entre las etiquetas <script> o en un archivo externo con extensión .js y linkeandolo con el atributo src de la etiqueta <script>.",
        "b": "En un archivo externo con extensión .js y linkeandolo con el atributo src de la etiqueta <script>.",
        "c": "Incluyendo código entre las etiquetas <script>.",
        "d": "Ninguna de las anteriores es correcta.",
        "correct": "a"
    }, {
        "question": "¿Cómo declaramos una función en JavaScript?",
        "a": "Escribiendo la palabra reservada function seguida por parentesis ().",
        "b": "Escribiendo el nombre de la función seguido por parentesis ().",
        "c": "Solo con la palabra reservada function.",
        "d": "Con la palabra reservada function seguido del nombre de la funcion y seguido por parentesis ().",
        "correct": "d"
    }, {
        "question": "¿Cómo realizamos un comentario en JavaScript?",
        "a": "Solamente con el uso de //.",
        "b": "Solamente con el uso de /* - */.",
        "c": "Con el uso de // para comentar una línea y de /* - */ para comentar un parrafo de texto.",
        "d": "Ninguna de las anteriores es correcta.",
        "correct": "c"
    }, {
        "question": "En qué año se creo JavaScript?",
        "a": "1995.",
        "b": "1999.",
        "c": "2002.",
        "d": "1993.",
        "correct": "a"
    }, {
        "question": "¿Cómo definimos una variable en JavaScript?",
        "a": "No es necesaria la defininción.",
        "b": "Con las palabras reservadas var, let y const.",
        "c": "Solo con la palabra reservada var.",
        "d": "Solo con la palabra reservada const.",
        "correct": "b"
    }, {
        "question": "¿Cómo definimos un condicional en JavaScript?",
        "a": "Solo con la palabra reservada if.",
        "b": "Solo con la palabra reservada else.",
        "c": "Con las palabras reservadas if, else y else if.",
        "d": "Solo con la palabra reservada else if.",
        "correct": "c"
    }, {
        "question": "¿En qué lugar se ejecuta generalmente el código JavaScript?",
        "a": "En el servidor.",
        "b": "En el cliente.",
        "c": "El codigo JavaScript no es ejecutado si no compilado.",
        "d": "Ninguna de las anteriores es correcta.",
        "correct": "b"
    }, {
        "question": "¿Donde debe colocarse la llamada al código JavaScript?",
        "a": "Puede colorcarse en la sección head o en body.",
        "b": "Puede colocarse solamente en la sección head.",
        "c": "Puede colocarse solamente en la sección body.",
        "d": "Puede colocarse solamente en la sección main.",
        "correct": "a"
    }, {
        "question": "¿Cuál es la instrucción usada para devolver un valor en una función de JavaScript?",
        "a": "Back.",
        "b": "Value.",
        "c": "Send.",
        "d": "Return.",
        "correct": "d"
    }, {
        "question": "¿Qué se utiliza para terminar las instrucciones en JavaScript?",
        "a": "Un punto y coma solamente.",
        "b": "Un punto y como o un salto de línea.",
        "c": "Un salto de línea solamente.",
        "d": "La palabra reservada end.",
        "correct": "b"
    }, {
        "question": "Que carácter se utiliza en JavaScript para concatenar cadenas de caracteres?",
        "a": ". (punto).",
        "b": "& (ampersand).",
        "c": "+ (más).",
        "d": "* (por).",
        "correct": "c"
    }, {
        "question": "Señala cuales de las siguientes opciones son tipos de eventos en JavaScript (Respuesta múltiple).",
        "a": "Una pagina HTML termina de cargar.",
        "b": "Un usuário hace click sobre un boton.",
        "c": "Se termina de ejecutar una función JavaScript.",
        "d": "Un campo de entrada de información cambia de estado.",
        "correct": ["a", "b", "d"]
    }, {
        "question": "Señala cuales de los siguientes son operadores lógicos en JavaScript (Respuesta múltiple).",
        "a": "||.",
        "b": "&&.",
        "c": "!.",
        "d": "%.",
        "correct": ["a", "b", "d"]
    }, {
        "question": "Señala cuales de los siguientes son operadores de comparación en JavaScript (Respuesta múltiple).",
        "a": "&&.",
        "b": "==.",
        "c": ">=.",
        "d": "===.",
        "correct": ["b", "c", "d"]
    }, {
        "question": "Señala cuales de los siguientes son tipos de errores en JavaScript (Respuesta múltiple).",
        "a": "Errores lógicos.",
        "b": "Errores de tiempo de ejecucción.",
        "c": "Errores de tiempo de carga.",
        "d": "Errores de comparación.",
        "correct": ["a", "b", "c"]
    }, {
        "question": "Señala cuales de las siguientes afirmaciones sobre JavaScript son ciertas (Respuesta múltiple).",
        "a": "La diferencia entre JavaScript y Jscript es que JavaScript fue desarrollado por Netscape y Jscript por Microsoft.",
        "b": "No todas las variables en JavaScript son de tipo objeto.",
        "c": "Las cookies son archivos pequeños de prueba que se gurafan en un ordenador y se crean cuando el usuario visita los sitios webs.",
        "d": "Alert es el único tipo de ventana emergente diponible en JavaScript",
        "correct": ["a", "c"]
    }, {
        "question": "Señala cuales de las siguientes afirmaciones sobre JavaScript son falsas (Respuesta múltiple).",
        "a": "La diferencia entre JavaScript y Jscript es que JavaScript fue desarrollado por Netscape y Jscript por Microsoft.",
        "b": "No todas las variables en JavaScript son de tipo objeto.",
        "c": "Las cookies son archivos pequeños de prueba que se gurafan en un ordenador y se crean cuando el usuario visita los sitios webs.",
        "d": "Alert es el único tipo de ventana emergente diponible en JavaScript",
        "correct": ["b", "d"]
    }
];


