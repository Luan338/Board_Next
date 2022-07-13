import styles from "./styles.module.scss";
import Head from "../../node_modules/next/head";
import { PencilSimpleLine, Calendar, Trash, Clock } from "../../node_modules/phosphor-react/dist/index";
import SupportButton from "../../src/components/SupportButton/index";
import { GetServerSideProps } from '../../node_modules/next';
import { getSession } from "../../node_modules/next-auth/client";
import { useState, FormEvent } from "react";
import firebase from "../../src/services/firebaseConnection";
import { format } from 'date-fns';
import Link from "../../node_modules/next/link";

type TaskList = {
    id: string;
    created: string | Date;
    createdFormated?: string;
    tarefa: string,
    userId: string,
    nome: string
}

interface BoardProps {
    user: {
        id: string;
        nome: string;
    }
    data: string;
}

export default function Board({ user, data }: BoardProps) {

    const [input, setInput] = useState('');

    const [taskList, setTaskList] = useState<TaskList[]>(JSON.parse(data));

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()

        if (input === '') {
            alert("Preencha uma tarefa")
            return;
        }

        await firebase.firestore().collection('tarefas')
            .add({
                created: new Date(),
                tarefa: input,
                userId: user.id,
                nome: user.nome
            })
            .then((doc) => {
                let data = {
                    id: doc.id,
                    created: new Date(),
                    createdFormated: format(new Date(), 'dd MMM yyyy'),
                    tarefa: input,
                    userId: user.id,
                    nome: user.nome
                };
                setTaskList([...taskList, data]);
                setInput('');
            })
            .catch((error) => {
                console.log("Erro ao cadastrar", error)
            })
    }

    async function handleDelete(id: string) {
        await firebase.firestore().collection('tarefas').doc(id)
            .delete()
            .then(() => {
                let taskDelete = taskList.filter((item) => {
                    return (item.id !== id)
                })

                setTaskList(taskDelete);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <Head>
                <title>Minhas Tarefas</title>
            </Head>
            <main className={styles.contain}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="  Digite sua tarefa"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        type="submit"
                    >+</button>
                </form>
                <h2 className={styles.title}>Você tem <span>{taskList.length}</span> {taskList.length === 1 ? 'Tarefa' : 'Tarefas'}!</h2>
                <section>
                    {taskList.map((task) => (
                        <article className={styles.taskList} key={task.id}>
                            <Link href={`/board/${task.id}`}>
                                <p>{task.tarefa}</p>
                            </Link>
                            <div className={styles.actions}>
                                <div className={styles.container_edite}>
                                    <div className={styles.container_btn}>
                                        <Calendar size={25} color="#edbb03" weight="thin" />
                                        <span>{task.createdFormated}</span>
                                    </div>
                                    <div className={styles.container_btn}>
                                        <PencilSimpleLine size={25} color="#ffffff" weight="thin" />
                                        <button>Editar</button>
                                    </div>
                                </div>
                                <div className={styles.btn_remove} onClick={() => handleDelete(task.id)}>
                                    <Trash size={25} color="#f00000" weight="thin" />
                                    <button className={styles.btn_delete}>Excluir</button>
                                </div>
                            </div>
                        </article>
                    ))}
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req })

    if (!session?.id) {
        // Se o usuário não estiver logado, vamos redirecionar
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const tasks = await firebase.firestore().collection('tarefas')
        .where('userId', '==', session?.id)
        .orderBy('created', 'asc').get();

    const data = JSON.stringify(tasks.docs.map((item) => {
        return {
            id: item.id,
            createdFormated: format(item.data().created.toDate(), 'dd MMM yyyy'),
            ...item.data(),
        }
    }))

    console.log(data)

    const user = {
        nome: session?.user.name,
        id: session?.id
    }

    return {
        props: {
            user,
            data
        }
    }
}