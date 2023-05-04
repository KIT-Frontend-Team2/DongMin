import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
function App() {
  const [number,setNumber] = useState(0);

  const someFunction = ()=>{
    console.log(`someFunc: number:`)
  }
  useEffect(()=>{
    console.log('someFunction이 변경되었습니다')
  },[someFunction])
  return (
   <div>
      <input type="number" value={number} onChange={
        (e)=>
          setNumber(e.target.value)
      }></input>
      <br/>
      <button onClick={someFunction}>Call comeFunc</button>
   </div>
  );
}

export default App;
