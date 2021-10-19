import "./App.css";
import "./ScrollbarStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import AllRouter from "./components/AllRouter";
import { Container } from "react-bootstrap";
import MusicNavbar from "./components/MusicNavbar";
import Musicbar from "./components/Musicbar";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AllRouter />
      </Provider>
    </div>
  );
}

export default App;
