import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div>
      <header className={styles.header}>
        <Link href="/">
          <h2>Car Shop</h2>
          <p>choose an Buy your car</p>
        </Link>
      </header>
      <main className={styles.container}>{children}</main>
      <footer className={styles.footer}>
        <a href="https://github.com/amirmmolazemi" target="_blank">
          Amirmmolazemi{" "}
        </a>
        Next.js course | car shop Project
      </footer>
    </div>
  );
}

export default Layout;
