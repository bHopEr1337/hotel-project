import styles from './Header.module.css'
import logoImage from '../assets/logo2.png'

function Header() {
    return(
        <div className={styles.root}>
            <header>
                <div className={styles.headerLogo}>
                    <img src={logoImage} alt="Logo" className={styles.logoImage}/>
                </div>
                <div>
                    <nav>
                        <ul className={styles.mainHeaderLinksList}>
                        <li><a href="/home">ГЛАВНАЯ</a></li>
                        <li><a href="/rooms">НОМЕРА</a></li>
                        <li><a href="#">ЗАБРОНИРОВАТЬ</a></li>
                        <li><a href="/rools">ПРАВИЛА ПРОЖИВАНИЯ</a></li>
                        <li><a href="/galery">ГАЛЕРЕЯ</a></li>
                        <li><a href="/contacts">КОНТАКТЫ</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header


//filtered_images = Image.objects.filter(title='category_name')