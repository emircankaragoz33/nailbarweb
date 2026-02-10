import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.brand}>
                    <h3>KUMI NAIL BAR</h3>
                    <p>
                        Pendik'in kalbinde, size özel tırnak ve bakım hizmetleri.
                        Hijyen, kalite ve estetik bir arada.
                    </p>
                </div>

                <div className={styles.links}>
                    <h4>Hizmetler</h4>
                    <ul>
                        <li><Link href="#hizmetler">Kalıcı Oje</Link></li>
                        <li><Link href="#hizmetler">Nail Art</Link></li>
                        <li><Link href="#hizmetler">Microblading</Link></li>
                        <li><Link href="#hizmetler">Manikür & Pedikür</Link></li>
                    </ul>
                </div>

                <div className={styles.contact}>
                    <h4>Bize Ulaşın</h4>
                    <p>Yenişehir Mah. Sümbül Sok.<br /> Ekinci Residence No:8/2<br /> Pendik / İstanbul</p>
                    <p style={{ marginTop: '0.5rem' }}>0542 329 46 65</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} Kumi Nail Bar. Tüm hakları saklıdır.</p>
            </div>
        </footer>
    );
};

export default Footer;
