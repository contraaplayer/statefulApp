import './App.css';
import React,{useState,useEffect,useRef} from 'react';
function App() {
  const [name,setName] = useState(() =>{
    const saved = localStorage.getItem('name');
    const initalValue = JSON.parse(saved);
    return initalValue || " ";
  });
  const usernameRef = useRef();

  useEffect(()=>{
    localStorage.setItem('name',JSON.stringify(name))
  },[name]);
  
  const handleChange = () =>{
    const valueinput = usernameRef.current;
    setName (valueinput.value);
  }
  
  return (
    <div className="App">
      <h1>Felicidades por llegar a Octubre del 2021 </h1>
      <div id="container">
          <form id="formulario">
            <input 
            id="name" 
            type="text" 
            ref={usernameRef}
            placeholder="who are you" 
            onChange={handleChange}
            >
            </input>
          </form>
      </div>
      <div>
        <p id="visitante">Hola {name}</p>
        <p>Ha sido un largo camino pero ya falta poco para acabar el 2021, ven y tomate un descanso</p>
      </div>
      <div id="imagen">

      </div>
    </div>
  );
}

export default App;
