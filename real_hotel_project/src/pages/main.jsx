
import Header from "../Header/Header"
import Slider from "../Slider/Slider"
import Booking from "../Booking/Booking"
import DateModule from "../DateModule/DateModule"
import Rooms from "../Rooms/Rooms"
import About from "../About/About"
import Servieces from "../Servieces/Servieces"
import Feedback from "../Feedback/Feedback"
import Map from "../Map/Map"
import EmptyBlock from "../EmptyBlock/EmptyBlock"
import Footer from "../Footer/Footer"
import EndBlock from "../EndBlock/EndBlock"


function Main() {

  return (
    <div>
      <Header/>
      <Slider/>
      <Booking/>
      <Rooms/>
      <About/>
      <Servieces/>
      <Feedback/>
      <Map/>
      <EmptyBlock/>
      <Footer/>
      <EndBlock/>
    </div>
  )
}

export default Main


