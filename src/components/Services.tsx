'use client';

import { Paintbrush, Palette, Eye, Pencil, Hand, Footprints } from 'lucide-react';
import styles from './Services.module.css';

const services = [
    {
        name: 'Kalıcı Oje',
        desc: 'Uzun süre kalıcı, parlak ve dayanıklı tırnaklar için özel formül.',
        icon: Paintbrush
    },
    {
        name: 'Nail Art',
        desc: 'Tırnaklarınızı birer sanat eserine dönüştüren özgün tasarımlar.',
        icon: Palette
    },
    {
        name: 'Microblading',
        desc: 'Doğal görünümlü, dolgun kaşlar için altın oran kaş kontürü.',
        icon: Eye
    },
    {
        name: 'Kaş Tasarımı',
        desc: 'Yüz hattınıza en uygun kaş şekli ile ifadenizi güçlendirin.',
        icon: Pencil
    },
    {
        name: 'Manikür',
        desc: 'Elleriniz için derinlemesine bakım ve rahatlama.',
        icon: Hand
    },
    {
        name: 'Pedikür',
        desc: 'Ayak sağlığınız ve güzelliğiniz için profesyonel bakım.',
        icon: Footprints
    }
];

const Services = () => {
    return (
        <section id="hizmetler" className={styles.section}>
            <h2 className={styles.heading}>Hizmetlerimiz</h2>
            <div className={styles.grid}>
                {services.map((service, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.icon}>
                            <service.icon size={48} strokeWidth={1} />
                        </div>
                        <h3 className={styles.cardTitle}>{service.name}</h3>
                        <p className={styles.cardDesc}>{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
