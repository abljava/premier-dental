import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Премьера Стоматология - Стоматологическая клиника",
  description: "Стоматологическая клиника Премьера. Квалифицированные доктора, современные технологии, забота о каждом пациенте.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
