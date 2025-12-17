'use client';

import ValueCard from '@/app/components/ValueCard/ValueCard';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import styles from './Values.module.scss';

interface ValueItem {
  number: string;
  title: string;
  description: string;
  icon: string;
}

const values: ValueItem[] = [
  {
    number: '01',
    title: 'Стандарты сервиса',
    description: 'Каждый пациент достоин особого отношения к нему, вправе расчитывать на лечение у лучших докторов с применением новейших технологий и передовых методик',
    icon: '/icons/diamond.svg',
  },
  {
    number: '02',
    title: 'Стандарты сервиса',
    description:
      'Каждый пациент достоин особого отношения к нему, вправе расчитывать на лечение у лучших докторов с применением новейших технологий и передовых методик',
    icon: '/icons/tooth.svg',
  },
  {
    number: '03',
    title: 'Современные технологии',
    description:
      'Каждый пациент достоин особого отношения к нему, вправе расчитывать на лечение у лучших докторов с применением новейших технологий и передовых методик',
    icon: '/icons/micro.svg',
  },
  {
    number: '04',
    title: 'Забота о детях',
    description: 'Каждый пациент достоин особого отношения к нему, вправе расчитывать на лечение у лучших докторов с применением новейших технологий и передовых методик',
    icon: '/icons/teddy.svg',
  },
];

export default function Values() {
  const isDesktop = useMediaQuery('(min-width: 1280px)');

  return (
    <section className={styles.values}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши ценности</h2>
        <div className={styles.grid}>
          {values.map((value, index) => (
            <ValueCard
              key={index}
              number={value.number}
              title={value.title}
              description={value.description}
              icon={isDesktop ? value.icon : '/icons/diamond.svg'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
