import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
const poppings = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});
type Props = {};

interface NavbarItemsProps {
  children: React.ReactNode;
  isActive?: boolean;
  href: string;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemsProps) => {
  return <Button>{children}</Button>;
};

const navbarItems: NavbarItemsProps[] = [
  {
    href: "/",
    children: "Home",
  },
  {
    href: "/about",
    children: "About",
  },
  {
    href: "/features",
    children: "Features",
  },
  {
    href: "/pricing",
    children: "Pricing",
  },
  {
    href: "/contact",
    children: "Contact",
  },
];

function Navbar() {
  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href={"/"} className="pl-6 items-center  ">
        <span className={cn("text-5xl font-semibold", poppings.className)}>
          Funroad
        </span>
      </Link>
    </nav>
  );
}

export default Navbar;
