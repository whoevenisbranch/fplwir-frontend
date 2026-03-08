import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.container}>
          <div className={styles.heading}>
            <h2>FPL Week In Review</h2>
            <p>
              Use your FPL League ID to generate a snapshot of your league at
              the last gameweek. View your league standings, view everyones
              picks and chips played.
            </p>
          </div>
          <div className={styles.form__container}>
            <h3>Enter FPL League Identifier</h3>
            <form className={styles.form__element}>
              <input
                className={styles.form__input__text}
                type="text"
                id="league-id-search"
                placeholder="ENTER FPL LEAGUE ID"
              />
              <input type="button" value="Generate Review" />
            </form>
          </div>
          <ul className={styles.help__container}>
            <h3>How to get your FPL League Identifier</h3>
            <li className={styles.help__container__step__item}>
              <p className={styles.help__container__step__item__heading}>
                Step 1 - Login To FPL
              </p>
              <div className={styles.help__container__step__item__content}>
                <div className={styles.help__container__step__item__image}>
                  placeholder
                </div>
                <p className={styles.help__container__step__item__text}>
                  Go to{" "}
                  <a href="https://fantasy.premierleague.com/">
                    fantasy.premierleague.com
                  </a>{" "}
                  and log into your Offical FPL account.
                </p>
              </div>
            </li>
            <li className={styles.help__container__step__item}>
              <p className={styles.help__container__step__item__heading}>
                Step 2 - Go To Classic Leagues
              </p>
              <div className={styles.help__container__step__item__content}>
                <div className={styles.help__container__step__item__image}>
                  placeholder
                </div>
                <p className={styles.help__container__step__item__text}>
                  Select the league your want to generate the review from your
                  list of leagues. Note reviews can only be created for classic
                  leagues and will only detail the top 50 players.
                </p>
              </div>
            </li>
            <li className={styles.help__container__step__item}>
              <p className={styles.help__container__step__item__heading}>
                Step 3 - Select your League
              </p>
              <div className={styles.help__container__step__item__content}>
                <div className={styles.help__container__step__item__image}>
                  placeholder
                </div>
                <p className={styles.help__container__step__item__text}>
                  Copy the league ID contained in the page URL.
                </p>
              </div>
            </li>
            <li className={styles.help__container__step__item}>
              <p className={styles.help__container__step__item__heading}>
                Example
              </p>
              <div className={styles.help__container__step__item__content}>
                <p className={styles.help__container__step__item__text}>
                  <code>
                    https://
                    <wbr />
                    fantasy.
                    <wbr />
                    premierleague.
                    <wbr />
                    com/
                    <wbr />
                    leagues/
                    <wbr />
                    <span
                      className={styles.help__container__step__item__snippet}
                    >
                      314
                    </span>
                    <wbr />
                    /standings
                    <wbr />
                    /c
                  </code>
                </p>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
