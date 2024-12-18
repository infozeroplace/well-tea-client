import PersistLogin from "@/components/PersistLogin";
import ReduxProvider from "@/services/ReduxProvider";
import { Prompt } from "next/font/google";
import { UIProvider } from "@/app/UIProvider";
import { Footer, Header, Navbar } from "@/components";
import { Toaster } from "react-hot-toast";
import "./globals.css";

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
        <ReduxProvider>
          <PersistLogin>
            <UIProvider>
              <Header />
              <Navbar />
              {children}
              <Footer />
              <Toaster position="bottom-right" />
            </UIProvider>
          </PersistLogin>
        </ReduxProvider>
      </body>
    </html>
  );
}
