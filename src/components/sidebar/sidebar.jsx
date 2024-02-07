import Account from "./account";
import SidebarMenu from "./sidebarMenu";
import {
  LayoutDashboard,
  UsersRound,
  ConciergeBell,
  MousePointerSquare,
  Clipboard,
  UserRound,
  Settings2,
  ShoppingCart,
  Car,
} from "lucide-react";
import logo from "../../assets/logo.svg";

const menuSidebar = [
  { name: "Dashboard", badge: 4, icon: <LayoutDashboard size={14} /> },
  { name: "Stock", icon: <ShoppingCart size={14} /> },
  { name: "Customer", icon: <UsersRound size={14} /> },
  { name: "Restaurant", icon: <ConciergeBell size={14} /> },
  { name: "Design", icon: <MousePointerSquare size={14} /> },
  { name: "Report", icon: <Clipboard size={14} /> },
  { name: "Role & Admin", icon: <UserRound size={14} /> },
  { name: "Settings", icon: <Settings2 size={14} /> },
];

const integrationSidebar = [
  { name: "Stock", icon: <ShoppingCart size={14} /> },
  { name: "Supply", icon: <Car size={14} /> },
];

const Sidebar = () => {
  return (
    <aside className="border-r w-[230px] h-screen fixed left-0 top-0 flex flex-col justify-between">
      <div className="space-y-7 p-6 overflow-y-auto">
        <div className="flex flex-row gap-3">
          <img src={logo} alt="logo" />
          <h2 className="text-iris font-bold text-[27px]">Square</h2>
        </div>
        <SidebarMenu titleMenu="Menu" sideMenu={menuSidebar} />
        <SidebarMenu titleMenu="Integration" sideMenu={integrationSidebar} />
      </div>
      <Account />
    </aside>
  );
};

export default Sidebar;
