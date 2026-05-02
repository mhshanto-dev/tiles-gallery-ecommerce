"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import {Avatar} from "@heroui/react";
import { Outfit } from 'next/font/google';  
import { toast } from "sonner";  

const Navbar = () => {
  const userData = authClient.useSession();
  // console.log(userData);
  const user = userData.data?.user;
  // console.log(user)

  const handleLogout = async () => {
    try {
      await authClient.signOut(); 
       toast.success("Logout successful");
    } catch (error) {
      toast.error("Logout failed!");
      // console.error("Logout failed:", error);
    }
  };
  return (
    <div className="border-b px-2 container mx-auto">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="text-slate-900 hover:text-blue-700 font-bold tracking-wide transition-all duration-200">
            Tiles <span className="text-blue-800 text-3xl">G</span>allery
          </h3>
        </Link>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link
              href="/"
              className="text-slate-900 hover:text-blue-700 font-bold tracking-wide transition-all duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/all-tiles"}
              className="text-slate-900 hover:text-blue-700 font-bold tracking-wide transition-all duration-200"
            >
              All Tiles
            </Link>
          </li>
          <li>
            <Link
              href={"/profile"}
              className="text-slate-900 hover:text-blue-700 font-bold tracking-wide transition-all duration-200"
            >
              My Profile
            </Link>
          </li>
        </ul>

        <div className="flex gap-4">
          {!user && (
            <ul className="flex items-center text-sm gap-4">
              <li className="">
                <Link
                  href={"/signup"}
                  className="border-2 border-[#0f172a] text-[#0f172a] px-6 py-2 rounded-full font-bold hover:bg-[#0f172a] hover:text-white transition-all"
                >
                  <button>SignUp</button>
                </Link>
              </li>
              <li className="border-2 border-[#0f172a] text-[#0f172a] px-6 py-2 rounded-full font-bold hover:bg-[#0f172a] hover:text-white transition-all">
                <Link href={"/signin"}>
                  <button>Login</button>
                </Link>
              </li>
            </ul> )}

            {
              user && (<div className="flex gap-4">
                <Avatar size="sm">
        <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy= "no-referrer" />
        <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
      </Avatar>

          <Button
                onClick={handleLogout}
                size="sm"
                className="
                  bg-red-600 
                  hover:bg-red-700 
                  text-white 
                  font-semibold
                "
              >
                Logout
              </Button>
              </div>
            )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
