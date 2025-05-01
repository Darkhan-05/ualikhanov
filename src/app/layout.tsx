import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Университет Шокана Уалиханова",
  description: "Кокшетауский университет имени Шокана Уалиханова",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <title>Shoqan Ualikhanov</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet"/>
    </head>
    <body>
    {children}
    </body>
    </html>
  );
}
