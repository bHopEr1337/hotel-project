import Header from "../../Header/Header"
import Slider from "../../Slider/Slider"
import Footer from "../../Footer/Footer"
import EndBlock from "../../EndBlock/EndBlock"
import RoomsBackImage from "../../RoomsBackImage/RoomsBackImage"
import RoomHeader from "../../RoomHeader/RoomHeader"
import RoomImages from "../../RoomImages/RoomImages"
import TextRoom from "../../textRoom/TextRoom"


import photo1 from "../../assets/room2/1.webp"
import photo2 from "../../assets/room2/2.webp"
import photo3 from "../../assets/room2/3.webp"

const arr = []
arr.push(photo1, photo2, photo3)

const text = "Двухкомнатный номер категории «Люкс», который разделен на гостиную и спальную зоны. Уютный номер для размещения от одного до четырех человек. Площадь: 35 м2. В спальной зоне одна большая кровать, прикроватные тумбы, шкаф, журнальный столик, плоский телевизор, кондиционер, холодильник, стол.\n\nВ гостиной – балкон, раскладные диваны, письменный стол, шкаф, кондиционер, телевизор, холодильник.\n\nВ ванной комнате: фен, ванна, туалет, бесплатные гигиенические принадлежности: мыло, шампунь, зубная щетка и паста, комплект полотенец, халат и тапочки.\n\nВид из номера: горы/внутренний дворик.";

function Room2() {

  return (
    <div>
      <Header/>
      <RoomsBackImage text="СТАНДАРТ ДВУХМЕСТНЫЙ С ОДНОЙ КРОВАТЬЮ"/>
      <RoomHeader text={"СТАНДАРТ ДВУХМЕСТНЫЙ С ОДНОЙ КРОВАТЬЮ"}/>
      <RoomImages imageArray={arr}/>
      <TextRoom text={text}/>
      <Footer/>
      <EndBlock/>
    </div>
  )
}

export default Room2