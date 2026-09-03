import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.spark4speech.com"),
  title: {
    default: "SPARK — Augmentative and Alternative Communication",
    template: "%s | SPARK",
  },
  description:
    "Build and speak messages with customizable communication boards, offline word prediction, and private on-device learning.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "SPARK — Communication that feels personal",
    description: "A free AAC app with customizable boards, offline word prediction, and local-first data.",
    url: "/",
    siteName: "SPARK",
    type: "website",
  },
  twitter: { card: "summary", title: "SPARK — Communication that feels personal" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(dmSans.className, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
