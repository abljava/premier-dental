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
    description:
      'Каждый пациент заслуживает особого внимания и индивидуального подхода к лечению.',
    icon: 'diamond',
  },
  {
    number: '02',
    title: 'Квалифицированные доктора',
    description:
      'Каждый пациент имеет право рассчитывать на лечение у лучших докторов с использованием современных технологий.',
    icon: 'tooth',
  },
  {
    number: '03',
    title: 'Современные технологии',
    description:
      'Мы используем только передовое оборудование и материалы для обеспечения высокого качества лечения.',
    icon: 'microscope',
  },
  {
    number: '04',
    title: 'Забота о детях',
    description:
      'Особое внимание уделяем комфорту и безопасности наших маленьких пациентов.',
    icon: 'teddy',
  },
];

export default function Values() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'diamond':
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 3L12 21L18 3M6 3L12 9L18 3M6 3L12 9M18 3L12 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case 'tooth':
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C10 2 8 3 8 5C8 7 10 8 12 8C14 8 16 7 16 5C16 3 14 2 12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 8V10C8 12 9 14 12 14C15 14 16 12 16 10V8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 14V18C8 20 9 22 12 22C15 22 16 20 16 18V14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case 'microscope':
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 2V4M9 20V22M5 9H3M21 9H19M7.8 7.8L6.4 6.4M17.6 17.6L16.2 16.2M7.8 16.2L6.4 17.6M17.6 6.4L16.2 7.8M12 9C12 10.6569 10.6569 12 9 12C7.34315 12 6 10.6569 6 9C6 7.34315 7.34315 6 9 6C10.6569 6 12 7.34315 12 9Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 9V15M12 15L14 17M12 15L10 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case 'teddy':
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="9" cy="9" r="2" fill="currentColor" />
            <circle cx="15" cy="9" r="2" fill="currentColor" />
            <path
              d="M12 12C14 12 16 13 16 15C16 17 14 18 12 18C10 18 8 17 8 15C8 13 10 12 12 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 2C10 2 8 3 8 5C8 7 10 8 12 8C14 8 16 7 16 5C16 3 14 2 12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 18V22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className={styles.values}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши ценности</h2>
        <div className={styles.grid}>
          {values.map((value, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.number}>{value.number}</span>
                <div className={styles.icon}>{getIcon(value.icon)}</div>
              </div>
              <h3 className={styles.cardTitle}>{value.title}</h3>
              <p className={styles.cardDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

