import styles from "./styles.module.scss";

export default function Button() {

    const login = true;

    return login ? (
        <div className={styles.container_login}>
            <img className={styles.img_login} src="https://www.suno.com.br/wp-content/uploads/2021/12/Steve_Jobs.jpg" alt="Imagem de Login" />
            <button
                className={styles.btn}
                type="button"
                onClick={() => { }}
            >
                Olá, Luan
            </button>
            <span>X</span>
        </div>
    ) : (
        <button
            className={styles.btn}
            type="button"
            onClick={() => { }}
        >
            Entrar com GitHub
        </button>
    )
}