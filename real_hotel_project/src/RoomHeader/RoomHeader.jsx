import styles from "./RoomHeader.module.css"


function RoomHeader({text}) {
    return(
        <div className={styles.root}>
            <div className={styles.block}>
                <div className={styles.childBlock}>
                    <p>{text}</p>
                    <hr className={styles.line}/>
                </div>
            </div>
        </div>
    )
}

export default RoomHeader