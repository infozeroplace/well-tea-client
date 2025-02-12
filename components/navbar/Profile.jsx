import React from 'react'
import Link from 'next/link'
import { PiUser } from 'react-icons/pi'
import { useAppSelector } from "@/services/hook";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { logOut } from "@/services/features/auth/authSlice";
import { useSignOutMutation } from "@/services/features/auth/authApi";
import { usePathname, useRouter } from "next/navigation";
import { CiLogout } from "react-icons/ci";
import Image from "next/image";

function profile({ buttonClass }) {
    const profileItems = [
        {
            label: "My Account",
            href: "/profile"
        },
        {
            label: "Personals & Addresses",
            href: "/profile/address"
        },
        {
            label: "Orders",
            href: "/profile/orders"
        },
        {
            label: "Wishlist",
            href: "/profile/wishlist"
        },
        {
            label: "My Subscriptions",
            href: "/profile/subscription"
        },
        {
            label: "Settings",
            href: "/profile/settings"
        }
    ]
    const pathname = usePathname();
    const [signOut, { isLoading }] = useSignOutMutation();
    const {
      auth: { user, token },
    } = useAppSelector((state) => state);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = async () => {
      const { data } = await signOut({ data: { token } });
      if (data.success) {
        toast.success(data.message);
        dispatch(logOut());
        router.push("/");
        
        // ✅ Explicitly reload the page after navigation
        setTimeout(() => {
          window.location.reload();
        }, 100); // Small delay to ensure navigation happens first
      }
    };

  return (
    <div className="relative group">
      <Link href="/profile">
        <button className={`${buttonClass}`}>
          {/* <PiUser className="text-xl" /> */}
          <Image src="/icons/user icon.svg" alt="user" width={20} height={20} />
        </button>
      </Link>
      {user &&
        <div className="absolute top-full left-[50%] bg-white shadow-lg rounded-lg origin-top scale-y-0 -translate-x-[50%] group-hover:scale-y-100 transition-all duration-300">
            <div className="border-b p-5">{user?.firstName}</div>
            <div className="flex flex-col w-full text-nowrap">
            {profileItems.map((item, index) => (
                <Link
                key={index}
                href={item.href}
                className="py-2 px-5 border-b hover:bg-teagreen-100"
                >
                {item.label}
                </Link>
            ))}
            <button
                href="/logout"
                onClick={handleLogout}
                className="py-2 px-5 border-b hover:bg-teagreen-100 font-brand__font__200 text-left"
            >
                Log Out
            </button>
            </div>
        </div>
      }
    </div>  
  );
}

export default profile