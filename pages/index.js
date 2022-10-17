import styles from "../styles/Home.module.css";

export default function Home() {
  console.log(
    "Environement Variables",
    process.env.NEXT_PUBLIC_VERCEL_Environment,
    process.env.NEXT_PUBLIC_ENVIRONMENT
  );
  return <div className={styles.container}></div>;
}
