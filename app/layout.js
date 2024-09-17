import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import "@liveblocks/react-ui/styles.css";
const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Microsoft-Loop-2.0",
  description: "Take your collaboration to next level",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      <Toaster />
      {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
