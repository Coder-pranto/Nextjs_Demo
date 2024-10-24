import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="p-4">
      <body
        className="antialiased bg-gray-100 min-h-screen"
      >
        <nav className="bg-white shadow-md py-4 mb-6">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="text-3xl font-bold text-blue-600">
              <Link href="/">MyWebsite</Link>
            </div>
            <ul className="text-lg flex gap-8">
              <li>
                <Link href="/" className="hover:text-blue-500 transition duration-300 ease-in-out">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-500 transition duration-300 ease-in-out">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-blue-500 transition duration-300 ease-in-out">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/posts" className="hover:text-blue-500 transition duration-300 ease-in-out">
                  Posts
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <main className="container mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  );
}