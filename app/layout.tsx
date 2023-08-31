import ClientOnly from "@/components/ClientOnly";
import Footer from "@/components/Footer";
import ToastContainerBar from "@/components/ToastContainerBar";
import LoginModal from "@/components/models/LoginModal";
import RegisterModal from "@/components/models/RegisterModal";
import RentModal from "@/components/models/RentModal";
import ActividadesModal from "@/components/models/ActividadesModal";
import SearchModal from "@/components/models/SearchModal";
import Navbar from "@/components/navbar/Navbar";
import { Nunito } from "next/font/google";
import "../styles/globals.css";
import getCurrentUser from "./actions/getCurrentUser";
import type { Metadata } from 'next'

export const metadata: Metadata = {

  title: "Inmo-Ocio | Investments-Dao",
  description: "Anuncia tus inmuebles: compra, venta, alquiler de Inmuebles. Anuncia tus actividades de ocio: buceo, surf, pesca, Esqui, karting, despedidas de solteros, partyboad, etc",
  category: 'inmobiliaria, turismo, ocio',
  manifest: 'https://inmocio.investments-Dao.com/manifest.webmanifest.json',
  icons: {
    icon: {
      url: "/icon.svg",
      type: "image/svg",
    },
    shortcut: { url: "/icon-512.png", type: "image/png" },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link'],
    },
  },
  alternates: {
    canonical: 'https://inmocio.investments-dao.com',
      
    },
    
    }
    
    
  
  
  
  





const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="es">
      <body className={font.className}>
      <link rel="icon" href="/icon.ico" sizes="any" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="140" />
          <ClientOnly>
          <ToastContainerBar />
          <SearchModal />
          <RegisterModal />
          <LoginModal />
          <RentModal />
          <ActividadesModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
