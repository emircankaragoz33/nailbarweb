'use client';

import { MapPin, Phone, Clock, Instagram } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section id="iletisim" className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.info}>
                    <h2 className={styles.heading}>İletişim</h2>

                    <div className={styles.item}>
                        <MapPin className={styles.itemIcon} />
                        <div className={styles.itemContent}>
                            <h3>Adres</h3>
                            <p>Yenişehir Mah. Sümbül Sok. Ekinci Residence No:8/2<br />Pendik / İstanbul</p>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <Phone className={styles.itemIcon} />
                        <div className={styles.itemContent}>
                            <h3>Telefon & WhatsApp</h3>
                            <p>
                                <a href="tel:+905423294665">0542 329 46 65</a>
                            </p>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <Clock className={styles.itemIcon} />
                        <div className={styles.itemContent}>
                            <h3>Çalışma Saatleri</h3>
                            <p>Randevu ile hizmet vermekteyiz.<br />Lütfen iletişime geçiniz.</p>
                        </div>
                    </div>

                    <a href="https://wa.me/905423294665" className="btn-primary" style={{ textAlign: 'center', marginTop: '1rem' }}>
                        Hemen Randevu Al
                    </a>
                </div>

                <div className={styles.mapContainer}>
                    <iframe
                        src="https://maps.google.com/maps?q=Yeni%C5%9Fehir%20Mah.S%C3%BCmb%C3%BCl%20Sok.%20Ekinci%20Residance%20No:8/2%20Pendik%20%C4%B0stanbul&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        className={styles.mapFrame}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
