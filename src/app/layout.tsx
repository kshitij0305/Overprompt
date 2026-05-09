import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Overprompt",
  description: "AI spend audit for modern teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}