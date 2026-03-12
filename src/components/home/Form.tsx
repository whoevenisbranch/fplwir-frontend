"use client";

import { useState } from "react";
import styles from "./form.module.css";
import { redirect } from "next/navigation";

export default function Form() {

  const [leagueId, setLeagueId] = useState('');

  const submitForm = (event: React.SubmitEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();

    // Do something 
    redirect(`/snapshot/${leagueId}`)
  }

  return (
    <div className={styles.form__container}>
      <h3>Enter FPL League Identifier</h3>
      <form className={styles.form__element} onSubmit={submitForm}>
        <input
          className={styles.form__input__text}
          type="number"
          id="league-id-search"
          placeholder="ENTER FPL LEAGUE ID"
          onChange={(e) => setLeagueId(e.target.value)}
        />
        <input className={styles.button} type="submit" value="GENERATE"/>
      </form>
    </div>
  );
}
