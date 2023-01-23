<h1 align="center">To-Do List Flowers</h1> 
<p align="center">
<img  src="https://user-images.githubusercontent.com/88007025/213829456-e3564c8d-d7ab-4b99-bc15-4ef6a1628dae.PNG" alt="Flowers"/>
</p>

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
<!-- <a href="#">Documentación técnica</a>
 -->
 
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
