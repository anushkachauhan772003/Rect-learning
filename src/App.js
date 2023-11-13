import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import ClassUSer from './ClassUSer';
import Functionstate from './Functionstate';
import Home from "./component/Home";
import About from "./component/About";
import Navbar from "./component/Navbar";
import User from "./component/User";
import Vid55Filter from "./component/Vid55Filter";
import Contact from "./component/Contact";
import Channel from "./component/Channel";
import Login from "./component/Login";
import Protected from "./component/Protected";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Protected Component={Home} />} />
          <Route path="/login" element={<Login/>}
          />
          <Route path="About" element={<Protected Component={About} />} />
          <Route path="/user/:name" element={<Protected Component={User} />} />
          <Route path="/*" element={<Navigate to="/home" />} />
          <Route path="/Vid55Filter" element={<Vid55Filter/>}/>
          <Route path="/Contact/" element={<Protected Component={Contact}/>} />
          <Route path="channel" element={<Channel/>}/>
        </Routes>
        <Vid55Filter />
        <ClassUSer />

        <Functionstate />
      </BrowserRouter>
    </div>
  );
}

export default App;
