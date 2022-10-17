import styles from "../styles/Home.module.css";

export default function Home() {
  console.log("Environement Variables", process.env.Environment);
  return <div className={styles.container}></div>;
}
