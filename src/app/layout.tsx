import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/redux/StoreProvider";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "User Form App",
  description: "Next.js form with Redux",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ 
            background: `radial-gradient(circle at 99% 52%, #17382f 0%, transparent 50%),      radial-gradient(circle at 18% 80%, #17382f 0%, transparent 48%),      #151b22`,
        backgroundColor: "#151b22", 
        color: "#fff", 
        margin: 0, 
        fontFamily: "Arial, sans-serif",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}>
        <StoreProvider>
          <Header />
            {children}
        </StoreProvider>
      </body>
    </html>
  );
}
