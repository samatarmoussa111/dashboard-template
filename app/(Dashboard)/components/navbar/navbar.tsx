import { APP_LINKS } from "@/lib/app-links";
import MobileSidebar from "../sidebar/mobile-sidebar";
import { NavbarRoutes } from "./navbar-routes";

const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-background shadow-sm">
      <MobileSidebar />
      <NavbarRoutes appLinks={APP_LINKS} />
    </div>
  );
};

export default Navbar;
