import styles from "./form.module.css";

export default function Form() {
  return (
    <div className={styles.form__container}>
      <h3>Enter FPL League Identifier</h3>
      <form className={styles.form__element}>
        <input
          className={styles.form__input__text}
          type="text"
          id="league-id-search"
          placeholder="ENTER FPL LEAGUE ID"
        />
        <input className={styles.button} type="button" value="GENERATE SNAPSHOT" />
      </form>
    </div>
  );
}
