import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans, Playfair_Display } from "next/font/google";
import { EvaluacionProvider } from "@/src/context/evaluacion-context";
import TopBar from "@/src/components/layout/top-bar";
import "./globals.css";
import { cn } from "@/src/lib/utils";

const playfairDisplayHeading = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });
const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DC-97 Evaluación",
  description: "Espacio protegido para evaluaciones DC-97",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", notoSans.variable, playfairDisplayHeading.variable)}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <EvaluacionProvider>
          <TopBar />
          <div className="flex-1">{children}</div>
        </EvaluacionProvider>
      </body>
    </html>
  );
}