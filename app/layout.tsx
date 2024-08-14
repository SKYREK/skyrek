import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/Footer";
import { ToastProvider } from "@/components/providers/toaster-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkyRek - Build your next App with SkyRek",
  description: "Build your next App with SkyRek",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ToastProvider />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {/* <div className="my-14 mx-8 lg:mx-72">{children}</div> */}
          <div className="my-16 px-8 max-w-[1300px] mx-auto">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
