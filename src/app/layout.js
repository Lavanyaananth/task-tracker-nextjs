import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="flex gap-6 p-4 border-b">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
