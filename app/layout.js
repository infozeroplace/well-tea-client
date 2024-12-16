import { Geist, Geist_Mono, Prompt } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/store/Provider";
import { Header, Footer, Navbar } from "@/components";

const fonts = `${geistSans.variable} ${geistMono.variable}`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const prompt = Prompt({
  variable: "--prompt",
  subsets: ["latin"],
  weight: "200"
})

export const metadata = {
  title: "Well Tea",
  description: "Well Tea - Fresh and Organic Tea Products",
  keywords: "tea, organic tea, well tea, premium tea",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fonts} antialiased`}
      >
        <ReduxProvider>
          <Header />
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
