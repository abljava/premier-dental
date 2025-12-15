// Тип для новости
export interface NewsItem {
  id: number;
  title: string;
  body: string;
  image: string;
  date: string;
  tag: string;
}

// Тип для данных формы обратной связи
export interface ContactFormData {
  name: string;
  phone: string;
  email: string | undefined;
  comment: string | undefined;
  privacyAgreed: boolean;
}

// Тип для ошибок валидации формы
export interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  comment?: string;
  privacyAgreed?: string;
  submit?: string;
}

// Тип для поста/новости
export interface JsonPlaceholderPost {
  id: number;
  title: string;
  body: string;
}

