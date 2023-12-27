import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { AppContextProvider } from "./utilities/context.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <AppContextProvider>
    <App />
    <ToastContainer />
  </AppContextProvider>,
  document.getElementById("root")
);
