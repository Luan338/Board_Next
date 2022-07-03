import Link from "../../../node_modules/next/link";
import styles from "./styles.module.scss";

export default function SupportButton() {
    return (
        <>
            <Link href="/donate">
                <button className={styles.btn_apoio}>APOIAR</button>
            </Link>
        </>
    )
}