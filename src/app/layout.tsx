import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dagbon Archive — Preserving Dagbon. Teaching Dagbani. Connecting Generations.",
  description:
    "The digital home of Dagbon: a cultural archive and Dagbani language-learning platform preserving history, teaching language, and connecting generations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
