import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "the Tomatofolio 🍅",
  description: "tomatoes everywhere",
  icons: {
    icon: "/tomato2.svg",
  },
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
