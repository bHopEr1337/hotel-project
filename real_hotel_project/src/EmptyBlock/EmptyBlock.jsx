import styles from "./EmptyBlock.module.css"
import image from "./images/logo2.png"


function EmptyBlock() {
    return(
        <div className={styles.root}>
            <div className={styles.block}>
                <img src={image} alt="logo2" className={styles.image}/>
            </div>
        </div>
    )
}

export default EmptyBlock