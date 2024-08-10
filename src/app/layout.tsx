import Image from "next/image";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { NavLink } from "@/components/ui/nav-link";
import dash0Logo from "@/assets/dash0-logo.png";

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
            <h1 className="flex items-center gap-4 text-3xl font-semibold">
              <Image src={dash0Logo} alt="Dash0 Logo" width={48} height={48} />
              Vercel &amp; Next.js example
            </h1>
          </div>
          <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
            <nav className="grid gap-2 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0">
              <NavLink pathname="/" label="General" />

              <NavGroup>Server Components (Node.js)</NavGroup>
              <NavLink pathname="/rsc-nodejs-fetch-2xx" label="Fetch: 2XX" />
              <NavLink pathname="/rsc-nodejs-fetch-4xx" label="Fetch: 4XX" />
              <NavLink pathname="/rsc-nodejs-fetch-failure" label="Fetch: Failure" />

              <NavGroup>Server Components (Edge)</NavGroup>
              <NavLink pathname="/rsc-edge-fetch-2xx" label="Fetch: 2XX" />
              <NavLink pathname="/rsc-edge-fetch-4xx" label="Fetch: 4XX" />
              <NavLink pathname="/rsc-edge-fetch-failure" label="Fetch: Failure" />
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
