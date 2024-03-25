import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Home.module.css';
import Carousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Carousel />

            <div className={styles.containerLine}>
                <img src="/line.png" />
            </div>

            <h1 id="#home" className={styles.secaoHome}>Bem-vindos ao Projeto Apala!</h1>

            <p className={styles.txthome}>Nosso projeto surge como uma iniciativa focada em três dos Objetivos de Desenvolvimento Sustentável (ODS) da ONU: Saúde e Bem-Estar, Educação de Qualidade, e Redução das Desigualdades. 
            Esses pilares fundamentais norteiam nossas ações e direcionam nossos esforços para construir um futuro mais equitativo e próspero para todos.</p>
        
        <div className={styles.containerImage}>
            <img className={styles.imgTabelaODS} src="/tabela-ods.png" alt="Tabela Objetivos de Desenvolvimento Sustentáveis (ODS)" />
        </div>

            <p className={styles.txthome}>O Projeto Apala teve origem na disciplina Experiência Extensionista 2, na instituição Centro Universitário de Maceió (UNIMA), com um enfoque especial no tema Prevenção e Vulnerabilidades Sociais. 
            Desde então, temos trabalhado incansavelmente para criar um ambiente inclusivo e diversificado, onde as vozes de todas as comunidades possam ser ouvidas e celebradas.</p>

            <p className={styles.txthome}>Juntos, podemos construir uma comunidade vibrante e inclusiva, onde o respeito mútuo e a colaboração são os pilares fundamentais.</p>
        
            <p className={styles.txthome}>Sejam todos muito bem-vindos(as) ao Projeto Apala. 
            Sintam-se em casa e vamos juntos explorar as infinitas possibilidades que a arte, a cultura e o conhecimento têm a oferecer.</p>
        
            <div className={styles.containerLine}>
                <img src="/line.png" />
            </div>

            <h1 className={styles.secaoContato}>Contato</h1>

            <p className={styles.txtcontato}>Você quer se manter atualizado sobre as últimas notícias, eventos e histórias inspiradoras do Projeto Apala? Então siga-nos no Instagram:</p>
        
            <div className={styles.containerContato}>
                <img src="/logotipo-instagram.png" alt="Logotipo Instagram" className={styles.instagramLogo} />
                <a className={styles.linkInstagramProjeto} href="https://www.instagram.com/projetoapala/" target='_blank'><strong className={styles.linkPerfilProjeto}>@projetoapala</strong></a>
            </div>
            <Footer />
        </div>
    );
}

export default Home;