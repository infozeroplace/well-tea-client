import { Prompt } from "next/font/google";
import "./globals.css";
import { Header, Footer, Navbar } from "@/components";
import { UIProvider } from "./UIProvider";

const fonts = `${prompt.variable}`;

const prompt = Prompt({
  variable: "--prompt",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Well Tea",
  description: "Well Tea - Fresh and Organic Tea Products",
  keywords: "tea, organic tea, well tea, premium tea",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fonts} antialiased`}>
          <UIProvider>
            <Header />
            <Navbar />
            {children}
            <Footer />
          </UIProvider>
      </body>
    </html>
  );
}
