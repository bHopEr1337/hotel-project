import styles from "./EndBlock.module.css"


function EndBlock() {
    return(
        <div className={styles.root}>
            <div className={styles.block}>
                <p>
                   Сайт не является действующим. Данный макет разработан в учебных целях
                </p>
            </div>
        </div>
    )
}

export default EndBlock
