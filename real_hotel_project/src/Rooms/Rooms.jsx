import Room from "./Room";
import styles from "./Rooms.module.css"

import image1 from './images/1.png'
import image2 from './images/2.png'
import image3 from './images/3.png'


function Rooms() {
    return(
        <div className={styles.root}>
            <div className={styles.roomsBlock}>
                <div className={styles.title}>НОМЕРА</div>
                <div className={styles.rooms}>
                    <Room image={image1} description={"ДВУХКОМНАТНЫЙ НОМЕР КАТЕГОРИИ «ЛЮКС»"} link={"/rooms/двухкомнатный-номер-категории-люкс"}/>
                    <Room image={image2} description={"СТАНДАРТ ДВУХМЕСТНЫЙ С ОДНОЙ КРОВАТЬЮ"} link={"/rooms/стандарт-двухместный-с-одной-кровать"}/>
                    <Room image={image3} description={"СТАНДАРТ ДВУХМЕСТНЫЙ С ДВУМЯ КРОВАТЯМИ"} link={"/rooms/стандарт-двухместный-с-двумя-кроватями"}/>
                </div>
            </div>
        </div>
    )
}

export default Rooms;
