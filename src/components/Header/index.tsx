import Link from "../../../node_modules/next/link";
import Button from "../Button/index";
import styles from "./styles.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Link href="/">
                    <img className={styles.img_logo} src="/images/logo.svg" alt="Logo Board" />
                </Link>
                <nav className={styles.navigation}>
                    <ul>
                        <Link href="/">
                            <li>Home</li>
                        </Link>
                        <Link href="/board">
                            <li>Meu Board</li>
                        </Link>
                    </ul>
                    <Button />
                </nav>
            </div>
        </header>
    )
}