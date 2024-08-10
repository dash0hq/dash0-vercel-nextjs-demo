"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  label: string;
  pathname: string;
};

export function NavLink({ label, pathname }: NavLinkProps) {
  const activePathname = usePathname();
  return (
    <Link
      href={pathname}
      className={cn("hover:underline", {
        "font-semibold text-primary": activePathname === pathname,
      })}
    >
      {label}
    </Link>
  );
}
