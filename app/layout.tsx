import type { Metadata } from "next";
import "../src/styles/index.css";

export const metadata: Metadata = {
  title: "KlickSpark Media",
  description: "Product-first creative agency",
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
