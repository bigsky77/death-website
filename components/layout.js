import Link from "next/link";
import styles from "./layout.module.css";

const name = "Notes";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {home ? (
          <>
            <h1>{name}</h1>
          </>
        ) : (
          <>
            <h2>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
