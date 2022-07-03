import styles from "./styles.module.scss";
import Head from "../../node_modules/next/head";

export default function Board() {
    return (
        <>
            <Head>
                <title>Página de Tarefas</title>
            </Head>
            <main className={styles.contain}>
                <form>
                    <input
                        type="text"
                        placeholder="Digite sua tarefa"
                    />
                    <button
                        type="submit"
                    >+</button>
                </form>
                <h2 className={styles.title}>Você tem 2 tarefas!</h2>
                <section>
                    <article className={styles.taskList}>
                        <p>Aprendendo a criar projetos usando Next JS e aplicando o firebase como back.</p>
                        <div className={styles.actions}>
                            <div className={styles.container_edite}>
                                <div>
                                    <span>03 de Julho de 2022</span>
                                </div>
                                <button>Editar</button>
                            </div>
                            <button className={styles.btn_delete}>Excluir</button>
                        </div>
                    </article>
                </section>
            </main>
        </>
    )
}