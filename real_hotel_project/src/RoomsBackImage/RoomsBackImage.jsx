import styles from './RoomsBackImage.module.css'
import image from '../assets/mainView.jpg'



function RoomsBackImage({text}) {
    return(
        <div className={styles.root}>
            <div className={styles.booking}> 
                <img src={image} alt="" />
                <p className={styles.imageText}>{text}</p>
            </div>
        </div>
    )
}

export default RoomsBackImage