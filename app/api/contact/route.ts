import { NextRequest, NextResponse } from 'next/server';
import { ContactFormData } from '@/app/types';

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Имитация задержки сервера (500-1000ms)
    const delay = Math.floor(Math.random() * 500) + 500;
    await new Promise((resolve) => setTimeout(resolve, delay));

    // Валидация на сервере (дополнительная проверка)
    if (!body.name || body.name.trim().length < 2) {
      return NextResponse.json(
        { message: 'Имя должно содержать минимум 2 символа' },
        { status: 400 }
      );
    }

    if (!body.phone) {
      return NextResponse.json(
        { message: 'Телефон обязателен для заполнения' },
        { status: 400 }
      );
    }

    const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    if (!phoneRegex.test(body.phone)) {
      return NextResponse.json(
        { message: 'Неверный формат телефона' },
        { status: 400 }
      );
    }

    if (body.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(body.email)) {
        return NextResponse.json(
          { message: 'Неверный формат email' },
          { status: 400 }
        );
      }
    }

    if (!body.privacyAgreed) {
      return NextResponse.json(
        { message: 'Необходимо согласие с политикой конфиденциальности' },
        { status: 400 }
      );
    }

    // Имитация успешной отправки
    console.log('Form submitted:', {
      name: body.name,
      phone: body.phone,
      email: body.email,
      comment: body.comment,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        message: 'Заявка успешно отправлена',
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { message: 'Произошла ошибка при обработке запроса' },
      { status: 500 }
    );
  }
}

