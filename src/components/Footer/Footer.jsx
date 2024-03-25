import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.containerFooter}>
                <img className={styles.logotipoProjetoApala} src="/logotipo-projeto-apala.png" alt="Logotipo Projeto Apala" />
            </div>
            <p className={styles.copyrightProjetoApala}>© 2024 Projeto Apala </p>
            <p className={styles.txtDireitosReservados}>Todos os Direitos Reservados</p>

            <div className={styles.containerLinksRodape}>
                <a className={styles.linksRodape}>Home</a>
                <a className={styles.linksRodape}>Sobre</a>
                <a className={styles.linksRodape}>Doação</a>
                <a className={styles.linksRodape}>Contato</a>
            </div>             
        </footer>
    );
}

export default Footer;