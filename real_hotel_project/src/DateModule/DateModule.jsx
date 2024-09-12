import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import styles from './DateModule.module.css'
import calendarImage from '../assets/calendar.png'

import { useState } from "react"

function DateModule({ text }) {

    const [selectedDate, setSelectedDate] = useState(null);

    const dateHandle = (date) => {
        setSelectedDate(date)
    }

    return(
        <div>
            <div className={styles.rootBox}>
                <DatePicker className={`${styles.picker} ${styles.noFocus}`}
                    selected={selectedDate}
                    onChange={dateHandle}
                    dateFormat="dd.MM.yyyy"
                    />
                <span className={styles.spanText}>{text}</span>
                <img src={calendarImage} alt="" className={styles.calendarImg}/>
            </div>
        </div>
    )
}

export default DateModule
