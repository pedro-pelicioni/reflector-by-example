import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Reflector by Example - Master Oracle Integration on Stellar",
  description: "A comprehensive, hands-on guide to building with Reflector's decentralized oracle network on Stellar's Soroban smart contracts",
  keywords: "reflector,oracle,stellar,soroban,blockchain,price-feeds,smart-contracts,defi",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Reflector by Example",
    description: "Learn Reflector Oracle through interactive code examples",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
