import styles from "./Room.module.css";

function Room({ image, description, link }) {
  return (
    <div className={styles.roomsContainer}>
      <a href={link}>
        <img src={image} alt="image" className={styles.image} />
      </a>
      <a href={link}>
        <p className={styles.description}>{description}</p>
      </a>
      <a href={link}>
        <p className={styles.moreInfo}>
          Подробнее <span>&#8594;</span>
        </p>
      </a>
    </div>
  );
}

export default Room;
