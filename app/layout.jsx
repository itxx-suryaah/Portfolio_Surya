'use client'

import './globals.css';
import { ThemeProvider } from '../app/components/theme-provider';
import { Toaster } from "../app/components/ui/toaster";
import { Header } from '../app/components/header';
import { Footer } from '../app/components/footer';
import ScrollToTop from '../app/components/scroll-to-top';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#228B22" media="(prefers-color-scheme: dark)" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display@700&family=PT+Sans@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow pt-20">
                {children}
              </main>
              <Footer />
              <ScrollToTop />
            </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
