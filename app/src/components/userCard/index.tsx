import Image from "next/image";
import styles from "./index.module.css";
import Tel from "../../images/tel.png";
import Email from "../../images/email.png";

export default function UserCard() {
  return (
    <div className={styles.container}>
      <h2>Евгения Савченко</h2>
      <div>
        <Image src={Tel} alt="телефон" />
        <span>+7 (918) 078-17-05</span>
      </div>
      <div>
        <Image src={Email} alt="телефон" />
        <span>yysavchenk@mail.ru</span>
      </div>
    </div>
  );
}
