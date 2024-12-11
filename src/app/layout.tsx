import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VSELL Recruitment Task",
  description: "VSELL Recruitment Task",
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
