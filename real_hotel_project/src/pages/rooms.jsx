
import Header from "../Header/Header"
import RoomsBackImage from "../RoomsBackImage/RoomsBackImage"
import Rooms from "../Rooms/Rooms"
import Footer from "../Footer/Footer"
import EndBlock from "../EndBlock/EndBlock"


function RoomsPage() {

  return (
    <div>
      <Header/>
      <RoomsBackImage text="НОМЕРА"/>
      <Rooms/>
      <Footer/>
      <EndBlock/>
    </div>
  )
}

export default RoomsPage


