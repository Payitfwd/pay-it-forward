import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pay It Forward",
  description: "Yo wassup!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="6633bc32-b964-463d-be25-af7c4b7b3c5f"
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
