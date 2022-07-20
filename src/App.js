import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import Formulario from "./Page/Formulario/Formulario";
import Login from "./Page/Login/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Formulario />} />
          <Route path="/" element={<Login />} Login />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
