
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function ProfileSidebar() {
  const pathname = usePathname();

  const sidebarItems = [
    {
      title: "My Account",
      href: "/profile",
      icon: "HomeIcon",
    },
    {
      title: "Personals & Addresses",
      href: "/profile/address",
      icon: "MapIcon",
    },
    {
      title: "My Orders",
      href: "/profile/orders",
      icon: "ShoppingCartIcon",
    },
    {
      title: "Wishlist",
      href: "/profile/wishlist",
      icon: "HeartIcon",
    },
    {
      title: "My Subscriptions",
      href: "/profile/subscription",
      icon: "GiftIcon",
    },
    {
      title: "Settings",
      href: "/profile/settings",
      icon: "CogIcon",
    },
    {
      title: "Log Out",
      href: "/logout",
      icon: "LogoutIcon",
    },
  ];
  return (
    <div className="">
      <div className="flex flex-col gap-3">
        {sidebarItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <div className={`flex items-center space-x-2 ${
              pathname === item.href? 'border-b-1 border-gray-600' : ''
            }`}>
              {/* <item.icon className="h-6 w-6 text-gray-600" /> */}
              <span className="text-nowrap">{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div> 
  )
}

export default ProfileSidebar;