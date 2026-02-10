'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
                <div className={`container ${styles.inner}`}>
                    <Link href="/" className={styles.logo}>
                        <span className={styles.logoText}>Kumi Nail Bar</span>
                    </Link>

                    <ul className={styles.navLinks}>
                        <li><Link href="#hizmetler">Hizmetler</Link></li>
                        <li><Link href="#iletisim">İletişim</Link></li>
                    </ul>

                    <a
                        href="https://wa.me/905423294665"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaButton}
                    >
                        Randevu Al
                    </a>

                    <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
                        {menuOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
                <ul>
                    <li><Link href="#hizmetler" onClick={toggleMenu}>Hizmetler</Link></li>
                    <li><Link href="#iletisim" onClick={toggleMenu}>İletişim</Link></li>
                </ul>
                <a
                    href="https://wa.me/905423294665"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.ctaButton} ${styles.mobileCta}`}
                    onClick={toggleMenu}
                >
                    Randevu Al
                </a>
            </div>
        </>
    );
};

export default Navbar;
