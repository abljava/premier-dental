'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from '@/app/components/Button/Button';
import styles from './ContactForm.module.scss';

// Схема валидации с Zod
const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Имя обязательно для заполнения')
    .min(2, 'Имя должно содержать минимум 2 символа'),
  phone: z
    .string()
    .min(1, 'Телефон обязателен для заполнения')
    .regex(
      /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      'Телефон должен соответствовать формату: +7 (423) 123-45-67'
    ),
  email: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
      'Email должен соответствовать формату: name@example.com'
    ),
  comment: z.string().optional(),
  privacyAgreed: z.boolean().refine((val) => val === true, {
    message: 'Необходимо согласие с политикой конфиденциальности',
  }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      comment: '',
      privacyAgreed: false,
    },
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState<string>('');

  // Простое форматирование телефона
  const formatPhone = (value: string): string => {
    const digits = value.replace(/\D/g, '');
    if (!digits) return '';

    // Если начинается с 8, заменяем на 7
    const normalized = digits.startsWith('8') ? '7' + digits.slice(1) : digits;
    if (!normalized.startsWith('7')) return '+7';

    const code = normalized.slice(1, 4);
    const part1 = normalized.slice(4, 7);
    const part2 = normalized.slice(7, 9);
    const part3 = normalized.slice(9, 11);

    if (!code) return '+7';
    if (!part1) return `+7 (${code}`;
    if (!part2) return `+7 (${code}) ${part1}`;
    if (!part3) return `+7 (${code}) ${part1}-${part2}`;
    return `+7 (${code}) ${part1}-${part2}-${part3}`;
  };

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('idle');
    setSubmitError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
        setSubmitError(result.message || 'Произошла ошибка при отправке формы');
      }
    } catch {
      setSubmitStatus('error');
      setSubmitError('Произошла ошибка при отправке формы. Попробуйте позже.');
    }
  };

  return (
    <section id="contact-form" className={styles.contactForm}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <h2 className={styles.title}>Запишитесь к&nbsp;нам на прием</h2>
            <p className={styles.description}>
              Просто свяжитесь с нами, наши сотрудники быстро предоставят вам все необходимые данные
              и ответят на ваши вопросы.
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.fieldsRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  placeholder="Ваше имя"
                />
                {errors.name && <span className={styles.error}>{errors.name.message}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Телефон
                </label>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="tel"
                      id="phone"
                      onChange={(e) => {
                        const formatted = formatPhone(e.target.value);
                        field.onChange(formatted);
                      }}
                      className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                      placeholder="Ваш номер"
                      maxLength={18}
                    />
                  )}
                />
                {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Почта
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  placeholder="E-mail"
                />
                {errors.email && <span className={styles.error}>{errors.email.message}</span>}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="comment" className={styles.label}>
                Комментарий
              </label>
              <textarea
                id="comment"
                {...register('comment')}
                className={styles.textarea}
                placeholder="Сообщение"
                rows={3}
              />
            </div>

            {submitError && <div className={styles.submitError}>{submitError}</div>}

            {submitStatus === 'success' && (
              <div className={styles.submitSuccess}>
                Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
              </div>
            )}

            <div className={styles.submitWrapper}>
              <Button
                type="submit"
                text={isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                backgroundColor="rgba(255, 255, 255, 0.9)"
                textColor="var(--foreground)"
                disabled={isSubmitting}
                className={styles.submitButton}
              />
              <label className={styles.checkboxLabel}>
                <input type="checkbox" {...register('privacyAgreed')} className={styles.checkbox} />
                <span className={styles.checkboxText}>
                  Заполняя и отправляя данную форму я соглашаюсь на обработку персональных данных в
                  соответствии с политикой конфиденциальности сервиса
                </span>
              </label>
              {errors.privacyAgreed && (
                <span className={styles.error}>{errors.privacyAgreed.message}</span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
