import { signIn, signOut, useSession } from "../../../node_modules/next-auth/client";
import { GithubLogo } from "../../../node_modules/phosphor-react/dist/index";
import styles from "./styles.module.scss";

export default function Button() {

    const [session] = useSession();

    return session ? (
        <div className={styles.container_login}>
            <img className={styles.img_login} src={session.user.image} alt="Imagem de Login" />
            <button
                className={styles.btn}
                type="button"
                onClick={() => signOut()}
            >
                Olá, {session.user.name}
            </button>
            <span>X</span>
        </div>
    ) : (
        <div
            className={styles.box_login}
            onClick={() => signIn('github')}
        >
            <GithubLogo size={25} color="#ffffff" weight="fill" />
            <button
                className={styles.btn}
                type="button"

            >
                Entrar com GitHub
            </button>
        </div>
    )
}