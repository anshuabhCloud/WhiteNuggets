import "./App.css";
import NavBar from "./component/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./component/footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}
export default App;
