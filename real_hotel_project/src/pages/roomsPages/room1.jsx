import Header from "../../Header/Header"
import Slider from "../../Slider/Slider"
import Footer from "../../Footer/Footer"
import EndBlock from "../../EndBlock/EndBlock"
import RoomsBackImage from "../../RoomsBackImage/RoomsBackImage"
import RoomHeader from "../../RoomHeader/RoomHeader"
import RoomImages from "../../RoomImages/RoomImages"
import TextRoom from "../../textRoom/TextRoom"


import photo1 from "../../assets/room1/1.webp"
import photo2 from "../../assets/room1/2.webp"
import photo3 from "../../assets/room1/3.webp"
import photo4 from "../../assets/room1/4.webp"
import photo5 from "../../assets/room1/5.webp"
import photo6 from "../../assets/room1/6.webp"
import photo7 from "../../assets/room1/7.webp"
import photo8 from "../../assets/room1/8.webp"

const arr = []
arr.push(photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8)
console.log(arr.length)


const text = "Двухкомнатный номер категории «Люкс», который разделен на гостиную и спальную зоны. Уютный номер для размещения от одного до четырех человек. Площадь: 35 м2. В спальной зоне одна большая кровать, прикроватные тумбы, шкаф, журнальный столик, плоский телевизор, кондиционер, холодильник, стол.\n\nВ гостиной – балкон, раскладные диваны, письменный стол, шкаф, кондиционер, телевизор, холодильник.\n\nВ ванной комнате: фен, ванна, туалет, бесплатные гигиенические принадлежности: мыло, шампунь, зубная щетка и паста, комплект полотенец, халат и тапочки.\n\nВид из номера: горы/внутренний дворик.";


function Room1() {

  return (
    <div>
      <Header/>
      <RoomsBackImage text="ДВУХКОМНАТНЫЙ НОМЕР КАТЕГОРИИ «ЛЮКС»"/>
      <RoomHeader text={"ДВУХКОМНАТНЫЙ НОМЕР КАТЕГОРИИ «ЛЮКС»"}/>
      <RoomImages imageArray={arr}/>
      <TextRoom text={text}/>
      <Footer/>
      <EndBlock/>
    </div>
  )
}

export default Room1