import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nutritional Facts - Tania Lee",
  description: "Get your vitamins checked!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
