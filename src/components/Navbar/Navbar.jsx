import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className={styles.navbar}>
        <Link to="/Home">
            <div className={styles.container}>
                <img className={styles.logotipoProjetoApala} src="/logotipo-projeto-apala.png" alt="Logotipo Projeto Apala" />
            </div>
        </Link>
            <a className={styles.linksnavbar} href="#home">Home</a>
            <a className={styles.linksnavbar} href="/">Sobre</a>
            <a className={styles.linksnavbar} href="/">Doação</a>
            <a className={styles.linksnavbar} href="#contato">Contato</a>
        </nav>
    );
}

export default Navbar;
