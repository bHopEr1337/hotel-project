
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import EndBlock from "../EndBlock/EndBlock"
import RoolsLiving from "../RoolsLiving/RoolsLiving"
import RoomsBackImage from "../RoomsBackImage/RoomsBackImage"


function RoolsPage() {

  return (
    <div>
      <Header/>
      <RoomsBackImage text="ПРАВИЛА ПРОЖИВАНИЯ"/>
      <RoolsLiving/>
      <Footer/>
      <EndBlock/>
    </div>
  )
}

export default RoolsPage


