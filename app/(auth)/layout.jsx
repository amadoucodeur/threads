import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Theads | Auth",
  description: "Theads Nextjs application",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="fr">
        <body className={`${inter.className} bg-dark-1`}>
            {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
