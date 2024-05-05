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
  title: "Dra. Ana Beatriz Squadri",
  description: "Clínica Médica, Check-Up e Longevidade ao seu alcance.",
  keywords: "Ana Beatriz Squadri, Clinica Médica, Médico, Médica, Menino Deus, Porto Alegre, Centro Clínico Mãe de Deus",
  openGraph: {
    title:"Dra. Ana Beatriz Squadri",
    description:"Clínica Médica, Check-Up e Longevidade ao seu alcance.",
    images: "/logo-preview.png"
  },
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
