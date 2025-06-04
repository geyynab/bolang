import React from "react";
import logo from "../assets/logo_bolang.png";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo Bolang" className={styles.logo} />
      <h1 className={styles.title}>Web GIS Wisata Bolang</h1>
      <nav className={styles.nav}>
        {/* Contoh nav, bisa kamu isi nanti */}
        <a href="/" className={styles.navLink}>Home</a>
        <a href="/about" className={styles.navLink}>About</a>
        <a href="/contact" className={styles.navLink}>Contact</a>
      </nav>
    </header>
  );
}
