import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Providers from "./containers/providers";
import NavBar from "./components/NavBar";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} font-Sora flex flex-col bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 antialiased`}
      >
        {/* gradient bg color */}
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-[10] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <Providers>
          <NavBar />
          {children}
          </Providers>
      </body>
    </html>
  );
}
