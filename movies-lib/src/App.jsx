import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h2>movies lib</h2>
      <Outlet />
    </div>
  );
}

export default App;
