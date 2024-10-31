import type { Metadata } from "next";
import { archivo } from '@/app/ui/fonts';
import "@/app/ui/globals.css";


export const metadata: Metadata = {
  title: {
      template: '%s | POPSICLE',
      default: 'POPSICLE',
  },
  description: 'Page pour le championnat lié au projet POPSICLE',
  // metadataBase: new URL('https://zenodo.org/records/13374497'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${archivo.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
