import styles from "../styles/Home.module.css";

export default function Home() {
  console.log("Environement Variables", process.env);
  return <div className={styles.container}></div>;
}
