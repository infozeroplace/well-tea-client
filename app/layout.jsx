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
import { layoutMetadata } from "@/data/staticMetaData";
import ReduxProvider from "@/services/ReduxProvider";
import "@/styles/quillstyle.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "boxicons/css/boxicons.min.css";
import { Prompt, SUSE } from "next/font/google";
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

// export const metadata = {
//   title: "Well Tea",
//   description: "Well Tea - Fresh and Organic Tea Products",
//   keywords: "tea, organic tea, well tea, premium tea",
//   openGraph: {
//     title: "Well Tea",
//     description: "Well Tea - Fresh and Organic Tea Products",
//     image: "",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Well Tea",
//     description: "Well Tea - Fresh and Organic Tea Products",
//   },
// };

// export async function generateMetadata() {
//   return {
//     title: "Well Tea",
//     description: "",
//     keywords: "",
//     openGraph: {
//       title: "Well Tea",
//       description: "",
//       images: [
//         {
//           url: "",
//           width: 1200,
//           height: 630,
//           alt: "",
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: "Well Tea",
//       description: "",
//       images: [""],
//     },
//   };
// }

export const metadata = layoutMetadata;

export default function RootLayout({ children }) {
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
