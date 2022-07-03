import styles from "./styles.module.scss";
import Head from "../../node_modules/next/head";
import { PencilSimpleLine, Calendar, Trash, Clock } from "../../node_modules/phosphor-react/dist/index";
import SupportButton from "../../src/components/SupportButton/index";

export default function Board() {
    return (
        <>
            <Head>
                <title>Minhas Tarefas</title>
            </Head>
            <main className={styles.contain}>
                <form>
                    <input
                        type="text"
                        placeholder="  Digite sua tarefa"
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
                                <div className={styles.container_btn}>
                                    <Calendar size={25} color="#edbb03" weight="thin" />
                                    <span>03 de Julho de 2022</span>
                                </div>
                                <div className={styles.container_btn}>
                                    <PencilSimpleLine size={25} color="#ffffff" weight="thin" />
                                    <button>Editar</button>
                                </div>
                            </div>
                            <div className={styles.btn_remove}>
                                <Trash size={25} color="#f00000" weight="thin" />
                                <button className={styles.btn_delete}>Excluir</button>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
            <div className={styles.vipContainer}>
                <h3>Obrigado por apoiar esse projeto.</h3>
                <div className={styles.time}>
                    <Clock size={25} color="#ffffff" />
                    <span>Última doação foi a 3 dias.</span>
                </div>
            </div>
            <SupportButton />
        </>
    )
}