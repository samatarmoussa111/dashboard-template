"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  title: string;
  href: string;
  icon: LucideIcon;
}

const SidebarItem = ({ icon: Icon, title, href }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Button
      key={href}
      variant={isActive ? "secondary" : "ghost"}
      className={cn("w-full justify-start", isActive && "bg-muted font-medium")}
      asChild
    >
      <Link href={href}>
        <Icon className="mr-2 h-4 w-4" />
        {title}
      </Link>
    </Button>
  );
};

export default SidebarItem;
