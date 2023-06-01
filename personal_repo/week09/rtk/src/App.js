import logo from "./logo.svg";
import "./App.css";
import { store } from "./store/store";
import { useSelector, Provider } from "react-redux";
import Main from "./Main";
function App() {
  return (
    <Provider store={store} className="App">
      <Main></Main>
    </Provider>
  );
}

export default App;
