"use client";

import { usePathname } from "next/navigation";
import SidebarItem from "./sidebar-item";
import { APP_LINKS } from "@/lib/app-links";

const SidebarRoutes = () => {
  const pathname = usePathname();

  const Routes = APP_LINKS.map((link) => {
    return pathname?.startsWith(link.href) ? link.sidebarItems : null;
  });

  if (Routes === null) {
    return (
      <div>
        <h1>No routes</h1>
      </div>
    );
  }

  if (Routes !== null) {
    return (
      <div className="flex flex-col w-full">
        <div className="space-y-4 py-4">
          {Routes.map((routes) =>
            routes?.map((route) => (
              <div key={route?.title} className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                  {route.title}
                </h2>
                <div className="space-y-1">
                  {route.items.map((item) => (
                    <SidebarItem key={item.href} {...item} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
};

export default SidebarRoutes;
