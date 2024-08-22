import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { AppProvider } from "@/app/providers";

// const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Services en ligne",
    description: "Adressez votre demande à l'administration",
};
// context privider for my header tabs


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        
        <html lang="fr">
        <body >
             <AppProvider>
                <Header/>
                    <div className='bg-gray-100 text-black overflow-x-hidden'>
                        <main className="relative text-center mt-[85px] mb-10 min-h-[90vh]">
                        {children}
                        </main>
                    </div>
                <Footer/>
                </AppProvider>
             </body>
        </html>
    );
}
