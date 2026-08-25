import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-inter"
})

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-inter"
})

export const metadata = {
  title: "DigitAll World",
  description: "Publishing, Web & Mobile App Design Agency",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
    </head>
      <body className="bg-[#e6eff8] min-h-screen overflow-x-hidden">
      <Header />
      <div className='relative z-10 bg-[#e6eff8]  flex flex-col'>
        {children}
      <Footer />
      </div>
      </body>
    </html>
  );
}
