import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import Counter from "./redux/views/Counter.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Counter />
  </Provider>
);
