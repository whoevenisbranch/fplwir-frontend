import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.container}>
          <div className={styles.heading}>
            <h2>FPL Week In Review</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
              nibh gravida, posuere diam vel, molestie augue. Sed auctor lectus
              turpis. Morbi sed est ac augue placerat interdum sed vel nisl. Sed
              euismod efficitur aliquam. Quisque felis turpis, euismod ac
              commodo efficitur, commodo vel erat. Morbi at elementum enim. Cras
              placerat mollis justo, eu iaculis elit mattis non. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Vivamus eleifend risus nec sagittis consequat.
              Praesent sagittis sem ut efficitur pellentesque.
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
              <input type="button" value="GO" />
            </form>
          </div>
          <div>How to get your FPL League ID</div>
        </section>
      </main>
    </>
  );
}
