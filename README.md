<<<<<<< HEAD
<h1 align="center">To-Do List Flowers</h1> 
<p align="center">
<img  src="https://user-images.githubusercontent.com/88007025/213829456-e3564c8d-d7ab-4b99-bc15-4ef6a1628dae.PNG" alt="Flowers"/>
</p>
=======
<hr>
<h3>Introducción</h3>
La empresa Flores del Tambo, tiene una serie de tareas diarias desde la siembra de sus flores hasta la recolección de las mismas para finalmente expórtalas.<br>

Dado lo anterior, este proyecto creará una aplicación to-do list para hacer el seguimiento de manera dinámica a las tareas.<br>

<h3>Objetivo</h3>
Desarrollar un to-do list con el framework react JS y, las librerias Express y Mongoose para Flores del Tambo, este proyecto:
<br>
<ol>
<li>Permite ver y agregar tareas pendientes.</li>
<li>Permite dar check a las tareas que se han completado.</li>
<li>Permite editar tareas.</li>
<li>Permite elimnar tareas.</li>
</ol> 
<h3>Alcance</h3>
La aplicación tendrá como público objetivo los empleados de la empresa Flores del Tambo.
<br>
<h3>Herramientas utilizadas</h3>
  Las herramientas utilizadas para la creación de esta propuesta son:
  
<p>Trello para realizar la planeación y organización del proyecto</p><img width="40px"src="https://user-images.githubusercontent.com/86115727/199334676-02ff98e0-5f82-4ee3-920c-8a40e748cabb.png" alt="Logo Trello">

 
  
  <h3>FrontEnd<h3/>
 
<p>Figma para realizar los diseños, tanto wireframes y mockups como prototipos</p><img width="40px"src="https://user-images.githubusercontent.com/86115727/199336813-72221f32-eb87-4cd9-b377-0f22e2b4d254.png" alt="Logo Figma">
 
 <p>Visual Studio Code para codificación</p> <img width="40px"src="https://user-images.githubusercontent.com/86115727/199334189-d07ad5bf-3384-4dc6-82ba-0f39bf80ed82.png" alt="Logo Visual studio code">

 <p>Github como controlador de versiones</p><img width="40px" src="https://user-images.githubusercontent.com/86115727/199336699-67593444-6d17-4c33-b313-99b09181887b.png" alt="Logo Github">
 
<p>CSS3 y semantic ui css para dar estilos y mejorar el aspecto visual de las páginas</p><img width="40px"src="https://user-images.githubusercontent.com/92338030/213824036-bf280c00-cdbd-40fb-9326-351c1910358c.png" alt="Logo Semantic ui">
 
  <h3>Framework<h3/>
   
<p>React para la creación de la interface de usuario interactiva y el consumo de la falsa API</p><img width="50px"src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png" alt="Logo React">
 
  <h3>Backend<h3/>
   
   <p>JavaScript es un lenguaje de programación y de secuencias de comandos que te permite implementar funciones complejas en páginas web</p><img width="60px" src="https://user-images.githubusercontent.com/88007025/213832684-9e0a5e61-2809-4e44-8de0-99eedaa2546e.png"/>
   
   <p>Node. js es un entorno de ejecución JavaScript de código abierto y multiplataforma que se utiliza para desarrollar aplicaciones escalables del lado del servidor y de red.</p><img width="60px" src="https://user-images.githubusercontent.com/88007025/213834461-21a7be68-800a-4ec8-9895-3a05ff38ee7e.svg"/>

  <h3>Bases de datos NoSQL<h3/>
   
<p>MongoDB es un modelo de datos para organizar y almacenar todo tipo de datos, incluyendo documentos, convirtiéndose así en una herramienta ideal para el desarrollo de aplicaciones modernas</p><img width="60px" src="https://user-images.githubusercontent.com/88007025/213835610-1f709a2f-e548-4224-b246-abca245613e8.png"/>
   
<!--   <p>Vercel para desplegar la aplicación </p><img width="40px"src="https://mms.businesswire.com/media/20211123005573/en/929867/23/vercel-logo-freelogovectors.net.jpg" alt="Logo Vercel"> -->

<h3>Despliegue</h3>
<!-- <a href="#">Despliegue con Vercel</a> -->
<h3>Documentación técnica</h3>

<h4>Componente Todo</h4>  
    
 Para permitir la edición de las tareas, se utiliza el evento handleDivDoubleClick. Esta función muestra un input tipo text con la descripción de la tarea para que esta pueda ser modificada.

```js
const handleDivDoubleClick = () => {
  setIsEditing(true);
};
```

Tenemos un evento con la función handleInputKeyDown que se activa cuando estamos editando una tarea y cada vez que presionamos una tecla. Esto nos permite actualizar los datos de una tarea cuando la tecla presionada es ENTER (key 13) o cancelar los cambios cuando presionamos ESC (key 27).

```js
const handleInputKeyDown = (e) => {
  const key = e.keyCode;
  //to update
  if (key === 13) {
    editTodoItemProp({ title: tempValue });
    setValue(tempValue);
    setIsEditing(false);
    //to cancel
  } else if (key === 27) {
    setTempValue(value);
    setIsEditing(false);
  }
};
```

Cada vez que una tarea es actualizada en base de datos, el evento handleInputOnChange guarda una copia temporal de su valor en la variable tempValue. El paso anterior permite recuperar el valor de una tarea cuando se cancela su edición.

```js
const handleInputOnChange = (e) => {
  setTempValue(e.target.value);
};
```

Finalmente, la función handleButtonClick es un evento que nos permite marcar una tarea como realizada o imcompleta, según el estado incial de la esta.

```js
const handleButtonClick = () => {
  setCompleted((oldCompleted) => {
    const newState = !oldCompleted;
    editTodoItemProp({ completed: newState });
    return newState;
  });
};
```
 
<h4>Componente App</h4>   
 
```js
  useEffect(() => {
      async function fetchData() {
          const { data } = await todos.get("/todos");
          setTodoList(data);
      }
      fetchData()
  }, []);
```

Tenemos un hook con una funcion llamada fetchData que simula el consumo de un API utilizando la librería axios y asigna la respuesta a una variable "data". Esto nos trae una url a la cual se asignamos un path, luego se utiliza la funcion setTodoList para enviarle la data a la variable "todoList" y al final ejecutamos esta funcion El arreglo vacío [] al final del useEffect indica que la función solo se ejecutará una vez en el montaje del componente.

```js
  const addTodo = async (item) => {
        const { data } = await todos.post("/todos", item);
        setTodoList((oldList) => [...oldList, data]);
    };
```

Esta función se utiliza para agregar un nuevo elemento "item" a una lista de tareas. Utiliza la librería axios para hacer una llamada HTTP POST a una ruta específica "/todos" de una API, con el objeto "item" como el cuerpo de la solicitud. La respuesta de la solicitud se almacena en una variable "data". Luego, utiliza la función "setTodoList" para actualizar el estado del componente con la lista anterior y el nuevo "data" agregado a ella. La función "setTodoList" se utiliza para actualizar el estado de la lista de tareas, y se usa el operador spread para crear una copia de la lista anterior y agregar el nuevo elemento a ella.

```js
  const removeTodo = async (id) => {
        await todos.delete(`/todos/${id}`);
        setTodoList((oldList) => oldList.filter((item) => item._id !== id));
    };
```
Es una funcion asincrona que recibe un parametro "id" usando el metodo delete de axios para borrar un elemento de la lista pasandole como referencia el "id" en el path, luego seteamos la variable todoList y le pasamos una funcion de flecha para filtrar la lista y obtener los id's para compararlos segun el id que hay en la lista con el que se seleccione para borrar el elemento.

```js
  const editTodo = async (id, item) => {
        await todos.put(`/todos/${id}`, item);
    };
```

Esta función se utiliza para editar un elemento existente en una lista de tareas. Utiliza la librería axios para hacer una llamada HTTP PUT a una ruta específica "/todos/:id" de una API, con el objeto "item" como el cuerpo de la solicitud, la función recibe dos parámetros, el primero es el "id" del elemento que se va a editar y el segundo es el objeto "item" con los nuevos valores, la llamada PUT reemplaza el recurso existente en la ruta especificada con uno nuevo. El método PUT es utilizado para actualizar un recurso existente en una API.
 
<h3>Componente List</h3> 

```js
  const List = ({ list, removeTodoListProp, editTodoListProp }) => {
```  
Esta funcion contiene propiedades para listar,eliminar y editar cada tarea que este agregada en las propiedades que se estan declarando en el `componente de Section` y el `componente de Todo `.
    
    
```js
  const renderedList = list.map(
        (item) => (
```  
    
    
 Por medio de este componente se declara una variable contstante, en donde le va listar las tareas agregadas por medio del metodo map() por la caja de texto, en donde cada `(item)` va a llamar al objeto donde almacena los datos.
    
    
```js
    <Todo
       title={item.title}
       completed={item.completed}
       removeTodoItemProp={(e) => removeTodoListProp(item._id)}
       editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)}
       key={item.title}
     />
      )
    );
```  
Por medio de la secuencia que vamos llevando del componente List va a traer el componente Todo, visualizamos que llama a tres datos title es el titulo de la tarea,completed si es falso o verdadero que la tarea ya este hecha o no, el id que es un documento unico que no se puede repetir y que contiene cada tarea agregada.Estos son los tres datos que almacena la colleccion todos traidos por el objeto .

`removeTodoItemProp` Este objeto es llamado del componente Todo en donde contiene un evento a la propiedad `removeTodoListProp` trayendo el objeto item con el id en cuanto elimine la tarea agregada.
      
`editTodoItemProp` Este objeto tambien es llamado por el componente Todo en donde contiene un evento a la propiedad `editTodoListProp` permite visualizar si una tarea esta realizada o imcompleta, segun su marcacion.


<h3>Componente Section</h3> 
    
```js
 const Section = ({ children }) => {
  return <div style={{ margin: "50px" }}>{children}</div>;
   };
```
El componente section esta estructurado de una funcion de forma simple en donde va a contener una propiedad children esta propiedad es para desestructurar la funcion y pueda ejecutar una accion  con el contenido del elemento que esta llamando.

La accion que realizara la propiedad children es donde puede acceder a ella y lo que va a renderizar son  los elementos que tengan la propiedad, en este caso contiene una clase con un selector de css donde le indica que debe tener espaciado del lado izquierdo,derecho, inferior y superior de 50px. 
    
------------
    
# Backend

## index.js
```javascript
const express = require("express");
```
importación de librería de Express.js, un marco de Node.js para el desarrollo de aplicaciones web y API. Express proporciona una interfaz fácil de usar para crear rutas y manejar solicitudes HTTP.

```javascript
const mongoose = require("mongoose");
```
Importación de librería de Mongoose, la cual está dedicada al modelado de objetos de MongoDB para Node.js. Permite definir esquemas para los documentos en las colecciones de MongoDB, así como realizar operaciones CRUD en ellos de manera fácil.

```javascript
const cors = require("cors");
```
Importación de librería de CORS el cual puede permitit a un servidor que una aplicación de otro origen acceda a sus recursos.
 
## Configuración del servidor

Configuración del servidor usando el marco de trabajo Express.js.
```javascript
const PORT = 3030;
const app = express();
```
`const PORT = 3030;` establece una constante llamada "PORT" con el valor de 3030. Esta variable se usa para especificar el número de puerto en el que el servidor escuchará.

`const app = express();` crea una nueva instancia de la aplicación Express, que se asigna a la constante "app". Esta instancia se utiliza para configurar y manejar las solicitudes y respuestas del servidor.

```javascript
const todoRoutes = require("./routes/todoRoutes");

const connectionOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
```
`const todoRoutes` está importando un archivo de rutas específico para la aplicación. 
`const connectionOptions` crea un objeto de opciones de conexión con la base de datos, la cual incluye dos opciones necesarias para garantizar una conexión segura y compatible con la versión actual de MongoDB. `useUnifiedTopology: true` que habilita el nuevo esquema de topología en MongoD, es decir, a la estructura lógica de una base de datos, y, `useNewUrlParser: true` que habilita el nuevo analizador de URL en MongoDB, el cual es responsable de interpretar la cadena de conexión usada para conectarse a la base de datos

```javascript
mongoose
  .connect("mongodb://127.0.0.1/todolist", connectionOptions)
  .then(() => console.log("Connected successfully"))
  .catch((err) => console.error(err));
```
El método `connect()` de Mongoose devuelve una promesa, y en este caso, se están utilizando las funciones `.then()` y `.catch()` para manejar el resultado de la promesa.

Si la conexión es exitosa, se ejecutará console.log("Connected successfully"), imprimiendo un mensaje en la consola indicando que se ha conectado con éxito. Si ocurre un error, se ejecutará console.error(err), imprimiendo el error en la consola.

```javascript
app.listen(PORT, () => {
  console.log("The server is listening on port " + PORT);
});
```
Se utiliza el método `listen()` de Express para iniciar el servidor en el puerto especificado en la constante `PORT`

# models
![image](https://user-images.githubusercontent.com/114447994/214187762-c6998f89-4189-4941-8d08-75e55b01211c.png)

## Todo.js
```javascript
const TodoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
});
```
Inicialmente se guardo en una constante 'TodoShema' para guardar o definir dos campos `title` de tipo 'string' y `completed` de tipo 'booleano'
```javascript
mongoose.set('strictQuery', false);
```
Indicamos a `Mongoose` que no debe aplicar restricciones estrictas a las consultas a la base de datos.
```javascript
module.exports = mongoose.model("Todo", TodoSchema);
```
Finalmente exportamos el archivo para poder ser utilizado en otro lugar del codigo.
