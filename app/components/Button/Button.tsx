import Image from 'next/image';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  icon?: string;
  backgroundColor?: string;
  textColor?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export default function Button({
  text,
  icon,
  backgroundColor,
  textColor,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}: ButtonProps) {
  const buttonStyle: React.CSSProperties = {
    ...(backgroundColor && { backgroundColor }),
    ...(textColor && { color: textColor }),
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${className}`}
      style={buttonStyle}
    >
      {icon && (
        <Image
          src={icon}
          alt=""
          width={20}
          height={20}
          className={styles.icon}
        />
      )}
      <span className={styles.text}>{text}</span>
    </button>
  );
}

