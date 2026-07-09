import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound"
// now create route for all pages


function App() {
  return (
  <Routes>
    <Route path="/" element={<Home/>} end/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  );
}

export default App;