import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "tailwindcss/utilities.css";
import "primereact/resources/themes/lara-light-green/theme.css";
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './globals.css';
import ReactGA from "react-ga4";


const TRACKING_ID = "G-5RCVLW04QE"
ReactGA.initialize(TRACKING_ID);

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ana Beatriz Squadri",
  description: "Página da Dra. Ana Beatriz Squadri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      <link rel="icon" href="favicon.svg"/>
      </head>
      <body className={inter.className}>{children}
      <Analytics />
      <SpeedInsights/>
      </body>
      
    </html>
  );
}
