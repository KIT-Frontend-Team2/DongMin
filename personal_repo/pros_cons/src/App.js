import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import Add from './components/add';
import Ref from './components/ref';
import Memo from './components/memo';
import Callback from './components/callback';
import ReactMemo from './components/reactMemo';
import UseEffectTest from './components/UseEffectTest';
function App() {
  return(
  <>
  <div>
    <h1>useState</h1>
    <Add/>
  </div>
  <div>
    <h1>useRef</h1>
    <Ref/>
  </div>
  <div>
    <h1>useMemo</h1>
    <Memo></Memo>
  </div>
  <div>
    <h1>useCallback</h1>
    <Callback></Callback>
  </div>
  <div>
    <h1>React.Memo</h1>
    <ReactMemo></ReactMemo>
  </div>
  <div>
    <h1>UseEffect</h1>
    <UseEffectTest></UseEffectTest>
  </div>

  </>
  )
}

export default App;
