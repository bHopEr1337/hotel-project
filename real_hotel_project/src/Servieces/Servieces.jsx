import styles from "./Servieces.module.css"

function Servieces() {
    return(
        <div className={styles.root}>
            <div className={styles.servBlock}>
                <div className={styles.backImg}>

                </div>
                <div className={styles.title}>
                    УСЛУГИ
                </div>
                <div className={styles.list}>
                    <div className={styles.leftBlock}>
                        <ul>
                            <li>Интернет «Wi-Fi» на всей территории Отеля;</li>
                            <li>Уборка номеров ежедневно;</li>
                            <li>Смена постельного белья один раз в пять дней;</li>
                            <li>Смена полотенец один раз в три дня;</li>
                            <li>Замена туалетных принадлежностей производится по мере использования;</li>
                            <li>Утюг и гладильная доска по запросу;</li>
                            <li>Временное хранение багажа в камере хранения при въезде / выезде, но не более 12 часов;</li>
                        </ul>
                    </div>

                    <div className={styles.rightBlock}>
                        <ul>
                            <li>Автомобильная парковка для Гостей Отеля;</li>
                            <li>Доставка корреспонденции в номер при её получении;</li>
                            <li>Вызов «скорой помощи»;</li>
                            <li>Вызов такси;</li>
                            <li>Пользование медицинской аптечкой для оказания первой помощи</li>
                            <li>Комплекта посуды, бокалов, столовых приборов;</li>
                            <li>Информация о туристических, музейных и культурно-исторических достопримечательностях, муниципального образования Геленджик.</li>
                        </ul>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Servieces;