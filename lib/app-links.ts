import {
  BarChart3,
  Bell,
  CalendarDays,
  LayoutDashboard,
  LayoutGrid,
  LucideIcon,
} from "lucide-react";

export const APP_LINKS: Applink[] = [
  {
    title: "Home",
    href: "/dashboard",
    icon: LayoutGrid,
    sidebarItems: [
      {
        title: "Dashboard",
        items: [
          {
            title: "Overview",
            href: "/dashboard",
            icon: LayoutDashboard,
          },
          {
            title: "Statistics",
            href: "/dashboard/statistics",
            icon: BarChart3,
          },
          {
            title: "Calendar",
            href: "/dashboard/calendar",
            icon: CalendarDays,
          },
          {
            title: "Announcements",
            href: "/dashboard/announcements",
            icon: Bell,
          },
        ],
      },
      {
        title: "Settings",
        items: [
          {
            title: "Organisation",
            href: "/dashboard/organisation",
            icon: LayoutDashboard,
          },
        ],
      },
    ],
  },
];

export type SidebarItem = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export type Applink = {
  title: string;
  href: string;
  icon: LucideIcon;
  sidebarItems: {
    title: string;
    items: SidebarItem[];
  }[];
};
