import Head from "../node_modules/next/head";
import styles from "../src/styles/home.module.scss";
import { GetStaticProps } from "../node_modules/next";

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu Board - Organizando suas tarefas</title>
      </Head>
      <div className={styles.container}>
        <img className={styles.board} src="images/board-user.svg" alt="board user" />
        <h2>Uma ferramenta para seu dia a dia, escreva, planeje e organize-se...</h2>
        <div className={styles.promotion}>
          <span>100% Gratuito</span>
          <p>e online</p>
        </div>
        <div className={styles.container_apoiadores}>
          <span>Apoiadores:</span>
          <figure>
            <img className={styles.img_perfil} src="https://www.suno.com.br/wp-content/uploads/2021/12/Steve_Jobs.jpg" alt="Imagem Perfil" />
            <img className={styles.img_perfil} src="https://www.suno.com.br/wp-content/uploads/2021/12/Steve_Jobs.jpg" alt="Imagem Perfil" />
            <img className={styles.img_perfil} src="https://www.suno.com.br/wp-content/uploads/2021/12/Steve_Jobs.jpg" alt="Imagem Perfil" />
            <img className={styles.img_perfil} src="https://www.suno.com.br/wp-content/uploads/2021/12/Steve_Jobs.jpg" alt="Imagem Perfil" />
          </figure>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {


  return {
    props: {

    },
    revalidate: 60 * 60 // Atualiza a cada 60 minutos
  }
}   