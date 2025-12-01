import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Loi Minh Tran | Senior Full-Stack Engineer",
    template: "%s | Loi Minh Tran",
  },
  description:
    "Senior Full-Stack Engineer with 10+ years of experience building high-performance web applications. Specialized in Next.js, React, TypeScript, and Node.js.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web Development",
    "Software Engineer",
  ],
  authors: [{ name: "Loi Minh Tran" }],
  creator: "Loi Minh Tran",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ]
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://loi.tran.dev",
    title: "Loi Minh Tran | Senior Full-Stack Engineer",
    description:
      "Senior Full-Stack Engineer with 10+ years of experience building high-performance web applications.",
    siteName: "Loi Minh Tran",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Loi Minh Tran - Senior Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loi Minh Tran | Senior Full-Stack Engineer",
    description:
      "Senior Full-Stack Engineer with 10+ years of experience building high-performance web applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <div className="noise" />
            <Header />
            <main className="flex-1 pt-20">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
