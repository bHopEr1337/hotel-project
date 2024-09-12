import styles from "./RoomImages.module.css"


function RoomImages({imageArray}) {
    return(
        <div className={styles.root}>
            <div className={styles.block}>
                <div className={styles.imageBlock}>
                    {imageArray.map((item, index) => {
                        return <img key={index} src={item} alt="" />
                    })}
                </div>
            </div>
        </div>
    )
}

export default RoomImages