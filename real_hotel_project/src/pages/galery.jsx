
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import EndBlock from "../EndBlock/EndBlock"
import RoomsBackImage from "../RoomsBackImage/RoomsBackImage"
import GaleryBlock from "../GaleryBlock/GaleryBlock"

import photo1 from "../assets/roomImage/1.webp"
import photo2 from "../assets/roomImage/2.webp"
import photo3 from "../assets/roomImage/3.webp"
import photo4 from "../assets/roomImage/4.webp"
import photo5 from "../assets/roomImage/5.webp"
import photo6 from "../assets/roomImage/6.webp"
import photo7 from "../assets/roomImage/7.webp"
import photo8 from "../assets/roomImage/8.webp"
import photo9 from "../assets/roomImage/9.webp"
import photo10 from "../assets/roomImage/10.webp"
import photo11 from "../assets/roomImage/11.webp"
import photo12 from "../assets/roomImage/12.webp"
import photo13 from "../assets/roomImage/13.webp"
import photo14 from "../assets/roomImage/14.webp"
import photo15 from "../assets/roomImage/15.webp"
import photo16 from "../assets/roomImage/16.webp"
import photo17 from "../assets/roomImage/17.webp"
import photo18 from "../assets/roomImage/18.webp"


import { useState } from "react"

const arr = []
arr.push(photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18)
console.log(arr.length)

function Galery() {

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(9);


  return (
    <div>
      <Header/>
      <RoomsBackImage text="ГАЛЕРЕЯ"/>
      <GaleryBlock currentPage={currentPage} postPerPage={postPerPage} setCurrentPage={setCurrentPage} arr={arr}/>
      <Footer/>
      <EndBlock/>
    </div>
  )
}

export default Galery


