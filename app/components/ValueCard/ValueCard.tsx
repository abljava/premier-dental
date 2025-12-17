import Image from 'next/image';
import styles from './ValueCard.module.scss';

interface ValueCardProps {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export default function ValueCard({
  number,
  title,
  description,
  icon,
}: ValueCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.number}>{number}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.iconWrapper}>
        <Image 
          src={icon} 
          alt={title} 
          width={85} 
          height={85} 
          className={styles.icon}
        />
      </div>
    </div>
  );
}

