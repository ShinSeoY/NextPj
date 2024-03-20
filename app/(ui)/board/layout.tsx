import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <nav></nav>
      {children}
    </section>
    // <html lang="en">
    //   <body className={inter.className}>{children}</body>
    // </html>
  );
}
