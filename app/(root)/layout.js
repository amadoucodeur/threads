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
          <Topbar />
          <main>
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSidebar />
          </main>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
