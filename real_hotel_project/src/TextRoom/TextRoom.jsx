import styles from "./TextRoom.module.css"


function TextRoom({text}) {
    return(
        <div className={styles.root}>
            <div className={styles.block}>
                <div>
                    <p className={styles.text}>{text}</p>
                    <button>Забронировать сейчас</button>
                </div>
            </div>
        </div>
    )
}

export default TextRoom