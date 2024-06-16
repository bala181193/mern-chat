import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useSelector } from 'react-redux'
import Navigation from './components/navaigation';
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import Chat from './pages/chat'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import { AppContext, socket } from "./context/appContext";


function App() {

  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState([]);
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [privateMemberMsg, setPrivateMemberMsg] = useState({});
  const [newMessages, setNewMessages] = useState({});
  const user = useSelector((state) => state.user);
  console.log("...user", user)
  return (
    <AppContext.Provider value={{ socket, currentRoom, setCurrentRoom, members, setMembers, messages, setMessages, privateMemberMsg, setPrivateMemberMsg, rooms, setRooms, newMessages, setNewMessages }}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {!user && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          )}
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>

  );
}

export default App;
