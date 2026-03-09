import Link from "next/link";
import styles from "./header.module.css";

export default function Home() {
  return (
    <header className={styles.header}>
      <Link className={styles.header__link} href="/">
        <h1>FPL WEEK IN REVIEW</h1>
      </Link>
    </header>
  );
}
