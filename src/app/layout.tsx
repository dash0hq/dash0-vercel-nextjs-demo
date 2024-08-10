import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { NavLink } from "@/components/ui/nav-link";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Dash0: Vercel/Next.js Demo",
  description: "This project demonstrates Dash0's capabilities with Vercel and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark min-h-screen">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
          <div className="mx-auto grid w-full max-w-6xl gap-2">
            <h1 className="text-3xl font-semibold">Dash0: Vercel &amp; Next.js example</h1>
          </div>
          <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
            <nav className="grid gap-2 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0">
              <NavLink pathname="/" label="General" />

              <NavGroup>Server Components</NavGroup>
              <NavLink pathname="/rsc-fetch-success" label="Fetch: Successful" />
              <NavLink pathname="/rsc-fetch-failure" label="Fetch: Failure" />
            </nav>
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

function NavGroup({ children }: { children: React.ReactNode }) {
  return <div className="mt-3 text-base font-semibold text-primary">{children}</div>;
}
