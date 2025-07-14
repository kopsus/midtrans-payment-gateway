"use client";

import { Boxes, DollarSign } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navMain = [
  {
    title: "Products",
    url: "/product",
    icon: Boxes,
  },
  {
    title: "Transactions",
    url: "/transaction",
    icon: DollarSign,
  },
];

export function NavMain() {
  const pathname = usePathname();
  const isActiveLink = (href: string) =>
    pathname === href || pathname.startsWith(href);

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {navMain.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                className={`${
                  isActiveLink(item.url)
                    ? "bg-slate-200 hover:bg-slate-300 dark:text-black"
                    : ""
                } h-12 cursor-pointer`}
                asChild
                tooltip={item.title}
              >
                <Link href={item.url}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
