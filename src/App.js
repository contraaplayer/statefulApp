import './App.css';
import React,{useState,useEffect,useRef} from 'react';
function App() {

  const [name,setName] = useState(() =>{
    const saved = localStorage.getItem('name');
    const initalValue = JSON.parse(saved);
    return initalValue || " ";
  });

  const usernameRef = useRef();

  
  const handleChange = () =>{
    const valueinput = usernameRef.current;
    setName (valueinput.value);
  }
  useEffect(()=>{
    localStorage.setItem('name',JSON.stringify(name))
  },[name]);


  return (
    <div className="App">
        <h2>Bienvenido a mi pagina</h2>
        <div>
          <h3>Ingrese su nombre </h3>
          <form>
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
        <p>Hola {name}</p>
    </div>
  );
}

export default App;
