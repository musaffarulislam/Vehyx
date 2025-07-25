import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";


export const metadata: Metadata = {
  title: "Vhyex",
  description: "Vehicle History Report",
};

const helveticaNeue = localFont({
  src: [
    { path: '/fonts/HelveticaNeueThin.otf', weight: '100', style: 'normal' },
    { path: '/fonts/HelveticaNeueThinItalic.otf', weight: '100', style: 'italic' },
    { path: '/fonts/HelveticaNeueLight.otf', weight: '300', style: 'normal' },
    { path: '/fonts/HelveticaNeueLightItalic.otf', weight: '300', style: 'italic' },
    { path: '/fonts/HelveticaNeueMedium.otf', weight: '500', style: 'normal' },
    { path: '/fonts/HelveticaNeueMediumItalic.otf', weight: '500', style: 'italic' },
    { path: '/fonts/HelveticaNeueBold.otf', weight: '700', style: 'normal' },
    { path: '/fonts/HelveticaNeueBoldItalic.otf', weight: '700', style: 'italic' },
    { path: '/fonts/HelveticaNeueBlack.otf', weight: '900', style: 'normal' },
    { path: '/fonts/HelveticaNeueBlackItalic.otf', weight: '900', style: 'italic' }
  ],
  variable: '--font-helvetica', // Custom CSS variable
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={helveticaNeue.variable}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
