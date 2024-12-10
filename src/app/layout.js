import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from '@/components/SmoothScroll/index'

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
  title: "Webfolio-S",
  description: "Webfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <link rel="icon" href="/sucsek.ico" />
      <meta property="og:title" content="SucSek" />
      <meta property="og:description" content="SucSek Studio" />
      <meta property="og:image" content="/assets/img/supasek.png" />
      <meta property="og:type" content="website" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
        {children}

        </SmoothScroll>
      </body>
    </html>
  );
}
