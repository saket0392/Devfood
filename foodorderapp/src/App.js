import './App.css';
import Home from './components/screens/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Login from './components/screens/Login';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Signup from './components/screens/Signup.js';
 


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/login" element = {<Login/>}></Route>
        <Route path="/createuser" element = {<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
