import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import GoogleAnalytics from "./utilities/GoogleAnalytics";
import "tailwindcss/utilities.css";
import "primereact/resources/themes/lara-light-green/theme.css";
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ana Beatriz Squadri",
  description: "Página da Dra. Ana Beatriz Squadri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <GoogleAnalytics /> 
      <link rel="icon" href="favicon.svg"/>
      </head>
      <body className={inter.className}>{children}
      <Analytics />
      <SpeedInsights/>
      </body>
      
    </html>
  );
}
