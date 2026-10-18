import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "VideoForge AI", description: "Create one-minute videos with AI or animated scenes." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
