import {BrowserRouter, Routes, Route} from "react-router-dom"

import Main from "./pages/main"
import RoomsPage from "./pages/rooms"
import RoolsPage from "./pages/rools"
import Galery from "./pages/galery"
import Contacts from "./pages/contacts"

import Room1 from "./pages/roomsPages/room1"
import Room2 from "./pages/roomsPages/room2"
import Room3 from "./pages/roomsPages/room3"

import Test from "./Test"

// import { useState, useEffect } from "react"
// const API_URL = import.meta.env.VITE_API_URL;

function App() {
//   const [posts, setPosts] = useState([]);

// useEffect(() => {
//   const fetchPosts = async () => {
//     try {
//       const response = await fetch(`${API_URL}posts/`);
//       if (response.ok) {
//         const data = await response.json();
//         setPosts(data);
//         console.log(posts); // Теперь posts содержит актуальные данные
//       } else {
//         throw new Error('Ответ сети был неудачным');
//       }
//     } catch (error) {
//       console.error('Ошибка при получении постов:', error);
//     }
//   };

//   fetchPosts();
// }, [API_URL]);

  return (
    <div className="mainPage">
      <BrowserRouter>
        <Routes>
          <Route index element={<Main/>}/>
          <Route path="/home" element={<Main/>}/>
          <Route path="/rooms" element={<RoomsPage/>}/>
          <Route path="/rools" element={<RoolsPage/>}/>
          <Route path="/galery" element={<Galery/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/test" element={<Test/>}/>


          <Route path="/rooms/двухкомнатный-номер-категории-люкс" element={<Room1/>}/>
          <Route path="/rooms/стандарт-двухместный-с-одной-кровать" element={<Room2/>}/>
          <Route path="/rooms/стандарт-двухместный-с-двумя-кроватями" element={<Room3/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


