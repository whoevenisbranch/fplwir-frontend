import styles from './help.module.css'

export default function Help() {
    return (
    <div className={styles.help__container}>
        <h2 className={styles.help__container__heading}>How to get your FPL League ID</h2>
        <ul className={styles.help__items}>
            <li className={styles.help__item}>
                <h3 className={styles.help__item__heading}>1 - Log into <a href="https://fantasy.premierleague.com/">fantasy.premierleague.com</a></h3>
                <div className={styles.help__image}>placeholder image</div>
            </li>
            <li className={styles.help__item}>
                <h3 className={styles.help__item__heading}>2 - Select the Leagues and Cups tab</h3>
                <div className={styles.help__image}>placeholder image</div>
            </li>
            <li className={styles.help__item}>
                <h3 className={styles.help__item__heading}>3 - Select your League and copy the ID</h3>
                <div className={styles.help__image}>placeholder image</div>
            </li>
            <li className={styles.help__item}>
                <h3 className={styles.help__item__heading}>Example</h3>
                <p className={styles.help__text}>https://fantasy.premierleague.com/leagues/<wbr></wbr><span className="bg-yellow-300 text-black px-1 rounded">314</span>/standings/c</p>
            </li>
        </ul>
    </div>);
}