import styles from './Booking.module.css'
import calendarImage from '../assets/calendar.png'
import arrowDown from '../assets/arrowDown.png'

import DateModule from '../DateModule/DateModule'



function Booking() {
    return(
        <div className={styles.root}>
            <div className={styles.booking}>
                <h2>
                    Забронировать онлайн
                </h2>
                <div className={styles.inputBlock}>

                    <DateModule text="Заезд"/>
                    <DateModule text="Выезд"/>

                    {/* <div>
                        <span className={styles.label}>Заезд</span>
                        <img src={calendarImage} alt="" className={styles.calendarImg}/>
                        <input type="text" disabled/>
                    </div> */}
                    {/* <div>
                        <span className={styles.label}>Выезд</span>
                        <img src={calendarImage} alt="" className={styles.calendarImg}/>
                        <input type="text" disabled/>
                    </div> */}
                    <div className={styles.countBlock}>
                        <span className={styles.label}>Количество гостей</span>
                        <span className={styles.count}>1</span>
                        <img src={arrowDown} alt="" className={styles.arrowDown}/>
                        <input type="text" disabled/>
                    </div>
                    <div>
                        <button className={styles.bookingButton}>Показать наличие</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking