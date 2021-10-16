import './App.css';
import React,{useState,useEffect} from 'react';
function App() {

  const [name,setName] = useState({
    nombre:'invitado'
  });

  
  const handleChange = (event) =>{
    setName({
      ...name,
      [event.target.name] : event.target.value
    })
  }
  useEffect(()=>{
    localStorage.setItem('name',JSON.stringify(name))
  },[name]);


  return (
    <div className="App">
        <h2>Bienvenido a la pagina</h2>
        <div>
          <h3>Ingrese su nombre </h3>
          <form>
            <input id="name" type="text" name ="nombre" placeholder="who are you" onChange={handleChange}></input>
          </form>
        </div>
        <p>Hola {name.nombre}</p>
    </div>
  );
}

export default App;
