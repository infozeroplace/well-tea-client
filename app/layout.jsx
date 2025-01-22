import { UIProvider } from "@/app/UIProvider";
import {
  CompanyServices,
  Footer,
  Header,
  Navbar,
  SocialImages,
} from "@/components";
import PersistLogin from "@/components/PersistLogin";
import { env } from "@/config/env";
import ReduxProvider from "@/services/ReduxProvider";
import "@/styles/quillstyle.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "boxicons/css/boxicons.min.css";
import { Prompt, SUSE } from "next/font/google";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import "swiper/css/bundle";
import "./globals.css";


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

export const metadata = {
  title: "Well Tea",
  description: "Well Tea - Fresh and Organic Tea Products",
  keywords: "tea, organic tea, well tea, premium tea",
  openGraph: {
    title: "Well Tea",
    description: "Well Tea - Fresh and Organic Tea Products",
    image: ""
  },
  twitter: {
    card: "summary_large_image",
    title: "Well Tea",
    description: "Well Tea - Fresh and Organic Tea Products",
  },
};

// const jsonLdLayout = {
//   "@context": "https://schema.org",
//   "@type": "WebSite",
//   url: "https://welltea.zeroplace.co/",
//   name: "WellTea",
//   description: "WellTea offers a wide variety of premium tea products.",
//   potentialAction: {
//     "@type": "SearchAction",
//     target: "https://welltea.zeroplace.co/search?searchTerm={search_term_string}",
//     "query-input": "required name=search_term_string",
//   },
//   publisher: {
//     "@type": "Organization",
//     name: "WellTea",
//     url: "https://welltea.zeroplace.co/",
//     logo: {
//       "@type": "ImageObject",
//       url: "",
//     },
//   },
// };

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLdLayout)}} 
        />
      </Head> */}
      <body className={fonts}>
        <ReduxProvider>
          <PersistLogin>
            <GoogleOAuthProvider clientId={env.google_client_id}>
              <UIProvider>
                <Header />
                <Navbar />
                {children}
                {/* <SocialImages /> */}
                <CompanyServices />
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
