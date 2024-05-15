import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes";
import "./assets/sass/reset.scss";
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
