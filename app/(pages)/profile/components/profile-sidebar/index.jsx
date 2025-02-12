import { useSignOutMutation } from "@/services/features/auth/authApi";
import { logOut } from "@/services/features/auth/authSlice";
import { useAppSelector } from "@/services/hook";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { CiLogout, CiSettings } from "react-icons/ci";
import {
  PiGiftThin,
  PiListHeartThin,
  PiMapPinAreaThin,
  PiPersonSimpleCircleThin,
  PiShoppingCartThin,
} from "react-icons/pi";
import { useDispatch } from "react-redux";

function ProfileSidebar() {
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
    // {
    //   title: "Log Out",
    //   href: "/logout",
    //   icon: <CiLogout />,
    // },
  ];

  const pathname = usePathname();
  const [signOut, { isLoading }] = useSignOutMutation();

  const {
    auth: { user, token },
  } = useAppSelector((state) => state);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const { data } = await signOut({ data: { token } });

      if (data.success) {
        toast.success(data.message);
        dispatch(logOut());
        router.push("/");

        // ✅ Explicitly reload the page after navigation
        setTimeout(() => {
          window.location.reload();
        }, 1); // Small delay to ensure navigation happens first
      }
    } catch (error) {
      toast.error("Logout failed. Please try again.");
    }
  };

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
        <button
          href="/logout"
          onClick={handleLogout}
          className="font-brand__font__200"
        >
          <div className="flex items-center space-x-2">
            <CiLogout />
            <span className="text-nowrap">Log Out</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default ProfileSidebar;
