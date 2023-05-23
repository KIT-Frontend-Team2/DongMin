import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./adapters/router";
import UseModalProvider from "./store/2_context";
function App() {
  return (
    <>
      <UseModalProvider>
        <RouterProvider router={router} />
      </UseModalProvider>
    </>
  );
}

export default App;
