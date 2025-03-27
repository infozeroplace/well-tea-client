import {
  CompanyServices,
  Footer,
  Header,
  Navbar,
  SocialImages,
} from "@/components";
import ClientWrapper from "@/components/ClientWrapper";
import { env } from "@/config/env";
import { layoutMetadata } from "@/data/staticMetaData";
import { GoogleAnalytics } from "@next/third-parties/google";
import "boxicons/css/boxicons.min.css";
import "swiper/css/bundle";
import "./globals.css";
import { Prompt, SUSE } from "next/font/google";

export const revalidate = 0;

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

const fonts = `${prompt.variable} ${suse.variable} antialiased`;

export async function generateMetadata() {
  return layoutMetadata;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={fonts}>
        <ClientWrapper>
          <Header />
          <Navbar />
          {children}
          <SocialImages />
          <CompanyServices />
          <Footer />
        </ClientWrapper>
        <script
          src={`//code.tidio.co/${env.tidio_id}.js`}
          async
        ></script>
      </body>
      <GoogleAnalytics gaId={env.google_analytic_id} />
    </html>
  );
}
