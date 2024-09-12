import Header from "../../Header/Header"
import Slider from "../../Slider/Slider"
import Footer from "../../Footer/Footer"
import EndBlock from "../../EndBlock/EndBlock"
import RoomsBackImage from "../../RoomsBackImage/RoomsBackImage"
import RoomHeader from "../../RoomHeader/RoomHeader"
import RoomImages from "../../RoomImages/RoomImages"
import TextRoom from "../../textRoom/TextRoom"


import photo1 from "../../assets/room3/1.webp"
import photo2 from "../../assets/room3/2.webp"
import photo3 from "../../assets/room3/3.webp"
import photo4 from "../../assets/room3/4.webp"
import photo5 from "../../assets/room3/5.webp"


const arr = []
arr.push(photo1, photo2, photo3, photo4, photo5)

const text = "Однокомнатный двухместный номер категории «Стандарт» — это современный комфортабельный номер; простой, но стильный интерьер и продуманные детали — шторы, декор, освещение, балкон. Номер после ремонта обставлен новой мебелью — мягкие односпальные кровати, тумбочки, шкаф, стулья, холодильник, кондиционер.\n\nВ ванной комнате: фен, ванна, туалет, бесплатные гигиенические принадлежности: мыло, шампунь, зубная щетка и паста, комплект полотенец, халат и тапочки.\n\nВид из номера: горы/внутренний дворик.";


function Room3() {

  return (
    <div>
      <Header/>
      <RoomsBackImage text="СТАНДАРТ ДВУХМЕСТНЫЙ С ДВУМЯ КРОВАТЯМИ"/>
      <RoomHeader text={"СТАНДАРТ ДВУХМЕСТНЫЙ С ДВУМЯ КРОВАТЯМИ"}/>
      <RoomImages imageArray={arr}/>
      <TextRoom text={text}/>
      <Footer/>
      <EndBlock/>
    </div>
  )
}

export default Room3