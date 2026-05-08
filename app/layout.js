import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Alan Zhou | Portfolio",
  description: "CS student at McMaster University focused on automation, data pipelines, and machine learning systems. Currently a Software Developer at RBC Borealis.",
  openGraph: {
    title: "Alan Zhou | Portfolio",
    description: "CS student at McMaster University focused on automation, data pipelines, and machine learning systems.",
    url: "https://alanzhou34.com",
    siteName: "Alan Zhou",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Alan Zhou | Portfolio",
    description: "CS student at McMaster University focused on automation, data pipelines, and machine learning systems.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8
        overflow-x-hidden dark:bg-darkTheme
        dark:text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
