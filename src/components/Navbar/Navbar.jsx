import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
        <div className={styles.container}>
            <img className={styles.logotipoProjetoApala} src="/logotipo-projeto-apala.png" alt="Logotipo Projeto Apala" />
        </div>
            <a className={styles.linksnavbar} href="#home">Home</a>
            <a className={styles.linksnavbar} href="/sobre">Sobre</a>
            <a className={styles.linksnavbar} href="/doacao">Doação</a>
            <a className={styles.linksnavbar} href="/contato">Contato</a>
        </nav>
    );
}

export default Navbar;