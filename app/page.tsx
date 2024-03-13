import Image from "next/image";
import SearchImg from "./src/images/search.png";
import UserCard from "./src/components/userCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.searchSite}>
        <input className={styles.input}></input>
        <Image src={SearchImg} alt="поиск" />
      </div>
      <ul className={styles.usersList}>
        <li>
          <UserCard />
        </li>
      </ul>
    </main>
  );
}
