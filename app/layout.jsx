import { UIProvider } from "@/app/UIProvider";
import { Footer, Header, Navbar, SocialImages, CompanyServices } from "@/components";
import PersistLogin from "@/components/PersistLogin";
import ReduxProvider from "@/services/ReduxProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "boxicons/css/boxicons.min.css";
import { Prompt, SUSE } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { env } from "@/config/env";
import "swiper/css/bundle";
import axios from "@/api/axios";


const fonts = `${prompt.variable} ${suse.variable} antialiased`;

const prompt = Prompt({
  variable: "--prompt",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const suse = SUSE({
  variable: "--suse",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Well Tea",
  description: "Well Tea - Fresh and Organic Tea Products",
  keywords: "tea, organic tea, well tea, premium tea",
};

export default async function RootLayout({ children }) {
  const {
      data: { data: systemData },
    } = await axios.get("/public/system");

  return (
    <html lang="en">
      <body className={fonts}>
        <ReduxProvider>
          <PersistLogin>
            <GoogleOAuthProvider clientId={env.google_client_id}>
              <UIProvider>
                <Header />
                <Navbar />
                {children}
                <SocialImages />
                <CompanyServices data={systemData?.companyService || []}/>
                <Footer />
                <Toaster position="bottom-right" />
              </UIProvider>
            </GoogleOAuthProvider>
          </PersistLogin>
        </ReduxProvider>
      </body>
    </html>
  );
}
