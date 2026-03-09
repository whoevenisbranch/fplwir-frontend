import Divider from "@/components/Divider";
import styles from "./page.module.css";
import Heading from "@/components/home/Heading";
import Form from "@/components/home/Form";
import Help from "@/components/home/Help";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.container}>
          <Heading />
          <Divider />
          <Form />
          <Divider />
          <Help />
        </section>
      </main>
    </>
  );
}
