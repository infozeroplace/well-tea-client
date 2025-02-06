import Link from "next/link";
import { usePathname } from "next/navigation";
import { VscAccount } from "react-icons/vsc";
import { CiSettings, CiLogout } from "react-icons/ci";
import { BsPersonFill } from "react-icons/bs";
import {
  PiMapPinAreaThin,
  PiShoppingCartThin,
  PiListHeartThin,
  PiGiftThin,
  PiPersonSimpleCircleThin,
} from "react-icons/pi";

function ProfileSidebar() {
  const pathname = usePathname();

  const sidebarItems = [
    {
      title: "My Account",
      href: "/profile",
      icon: <PiPersonSimpleCircleThin />,
    },
    {
      title: "Personals & Addresses",
      href: "/profile/address",
      icon: <PiMapPinAreaThin />,
    },
    {
      title: "My Orders",
      href: "/profile/orders",
      icon: <PiShoppingCartThin />,
    },
    {
      title: "Wishlist",
      href: "/profile/wishlist",
      icon: <PiListHeartThin />,
    },
    {
      title: "My Subscriptions",
      href: "/profile/subscription",
      icon: <PiGiftThin />,
    },
    {
      title: "Settings",
      href: "/profile/settings",
      icon: <CiSettings />,
    },
    {
      title: "Log Out",
      href: "/logout",
      icon: <CiLogout />,
    },
  ];
  return (
    <div className="">
      <div className="flex flex-col gap-3">
        {sidebarItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <div className={`flex items-center space-x-2 `}>
              {/* <item.icon className="h-6 w-6 text-gray-600" /> */}
              {item?.icon}{" "}
              <span
                className={`text-nowrap ${
                  pathname === item.href ? "border-b-1 border-gray-600" : ""
                }`}
              >
                {item.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProfileSidebar;
