import styles from "./Footer.module.css"
import logo from "./images/logo2.png"

import geo from "./images/geo.png"
import telephone from "./images/telephone.png"
import letter from "./images/letter.png"

import instagramIcon from "./images/insta.webp"
import facebookIcon from "./images/facebook.webp"
import telegramIcon from "./images/telegram.webp"
import vkIcon from "./images/vk.png"

function Footer() {
    return(
        <div className={styles.root}>
            <div className={styles.block}>
                <div className={styles.content}>
                    <div className={styles.imageContainer}>
                        <img src={logo} alt="logo" className={styles.imageLogo}/>
                    </div>
                    <div className={styles.informationContainer}>
                        <h3 className={styles.title}>Контактная информация</h3>
                        <div className={styles.textContainer}>
                            <img src={geo} alt="" className={styles.textImages}/>
                            <div className={styles.test}>
                                <p>Краснодарский край, Геленджик, село Криница, ул. Речная, д. 5, корп. 1, 2</p>
                            </div>
                        </div>
                        <div className={styles.textContainer}>
                            <img src={telephone} alt="" className={styles.textImages}/>
                            <p>+7 345 2356124</p>
                        </div>
                        <div className={styles.textContainer}>
                            <img src={letter} alt="" className={styles.textImages}/>
                            <p>1234567@internet.ru</p>
                        </div>
                    </div>
                    <div className={styles.links}>
                        <h3 className={styles.title}>МЫ В СОЦСЕТЯХ</h3>
                        <div className={styles.socialIcons}>
                            <div className={styles.socialIconContainer}>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                        <img src={instagramIcon} alt="Instagram" className={styles.socialIcon} />
                                    </a>
                                </div>
                                <div className={styles.socialIconContainer}>
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                        <img src={facebookIcon} alt="Facebook" className={styles.socialIcon} />
                                    </a>
                                </div>
                                <div className={styles.socialIconContainer}>
                                    <a href="https://www.telegram.com" target="_blank" rel="noopener noreferrer">
                                        <img src={telegramIcon} alt="Telegram" className={styles.socialIcon} />
                                    </a>
                                </div>
                                <div className={styles.socialIconContainer}>
                                    <a href="https://www.vk.com" target="_blank" rel="noopener noreferrer">
                                        <img src={vkIcon} alt="VK" className={styles.socialIcon} />
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
