import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.bgImage}>
                <Image
                    src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=2070"
                    alt="Kumi Nail Bar Salon Interior"
                    fill
                    priority
                    style={{ objectFit: "cover" }}
                    quality={90}
                />
            </div>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Kumi <span>Nail Bar</span>
                </h1>
                <p className={styles.subtitle}>
                    Modern tasarım, kusursuz bakım ve sana özel anlar.
                    Pendik'in en şık nail art stüdyosuna hoş geldin.
                </p>
                <Link href="#hizmetler" className={styles.cta}>
                    Hizmetleri Keşfet
                </Link>
            </div>
        </section>
    );
};

export default Hero;
