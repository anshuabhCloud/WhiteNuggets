import "./App.css";
import NavBar from "./component/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./component/footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="App-content">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}
export default App;
