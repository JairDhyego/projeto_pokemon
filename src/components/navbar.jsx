import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/img/pokeball.png" width={30} height={30} alt="LOGO " />
        <h1> Navbar</h1>
      </div>

      <ul className={styles.links_items}>
        <li>
          <Link href="/"> Home</Link>
        </li>

        <li>
          <Link href="/about"> Sobre</Link>
        </li>
      </ul>
    </nav>

  )

};


export default Navbar;