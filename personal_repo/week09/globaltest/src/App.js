import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./adapters/router";
import UseModalProvider from "./store/2_context";
import UseUserListProvider from "./store/3_context";
function App() {
  return (
    <>
      <UseUserListProvider>
        <UseModalProvider>
          <RouterProvider router={router} />
        </UseModalProvider>
      </UseUserListProvider>
    </>
  );
}

export default App;
