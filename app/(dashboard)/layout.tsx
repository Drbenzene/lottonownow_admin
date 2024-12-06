"use client";

import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import { BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { PiUsersThree } from "react-icons/pi";
import { LiaWalletSolid } from "react-icons/lia";
import Image from "next/image";
import { SlSupport } from "react-icons/sl";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";
import { LuUsers } from "react-icons/lu";
import { BiSolidCategoryAlt } from "react-icons/bi";

interface LayoutProps {
  children: React.ReactNode;
}
const navigation = [
  {
    name: "Dashboard",
    href: "/overview",
    icon: MdOutlineDashboardCustomize,
  },
  { name: "Users Management", href: "/financials", icon: LuUsers },
  { name: "Games Management", href: "/games", icon: IoGameControllerOutline },
  {
    name: "Category Mgmt",
    href: "/category",
    icon: BiSolidCategoryAlt,
  },
  { name: "Wallet Management", href: "/admin/users", icon: GiWallet },
  { name: "Reward Management", href: "/admin/users", icon: PiUsersThree },
  { name: "Wallet & Transaction", href: "/admin/users", icon: LiaWalletSolid },
  { name: "Content Management", href: "/admin/users", icon: SlSupport },
  {
    name: "Customer Support",
    href: "/admin/users",
    icon: MdOutlineMonitorHeart,
  },
  { name: "Settings", href: "/admin/users", icon: PiUsersThree },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function DashboardLayout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState();

  return (
    <>
      {/* {!isAuthenticated && <Loader />} */}
      {isAuthenticated && (
        <div className="">
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-50 lg:hidden"
              onClose={setSidebarOpen}
            >
              <TransitionChild
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-900/80" />
              </TransitionChild>

              <div className="fixed inset-0 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                        <button
                          type="button"
                          className="-m-2.5 p-2.5"
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className="sr-only">Close sidebar</span>
                          <XMarkIcon
                            className="text-primary h-6 w-6"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>

                    {/* MOBILE RESPONSIVENESS SIDEBAR */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white p-16 ">
                      <div className="mb-3 flex h-16  shrink-0 items-center justify-start">
                        <Image
                          className="h-8 w-auto object-cover"
                          src="/img/logo.svg"
                          alt="Lottonowow"
                          height={32}
                          width={32}
                        />
                      </div>
                      <nav className="flex flex-1 flex-col">
                        <ul className="flex flex-1 flex-col gap-y-7">
                          <li>
                            <ul className="-mx-2 space-y-1">
                              {navigation.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    className={classNames(
                                      pathname === item.href
                                        ? "bg-primary text-white font-extrabold"
                                        : "hover:bg-primary text-[#666666]",
                                      "group flex gap-x-3 rounded-xl p-2.5 leading-6 "
                                    )}
                                  >
                                    <item.icon
                                      className={classNames(
                                        pathname === item.href
                                          ? "text-primary font-extrabold"
                                          : "group-hover:text-primary text-[#666666]",
                                        "h-6 w-6 shrink-0"
                                      )}
                                      aria-hidden="true"
                                    />
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          {/* Static sidebar for Large Screens*/}
          <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col ">
            <div className="text-gray border no-scrollbar flex grow flex-col gap-y-5 overflow-y-auto bg-white p-8 px-10 pb-4">
              <div className="flex h-16 shrink-0 items-center">
                <Link href="/overview">
                  <Image
                    className="h-20 w-auto object-cover"
                    src="/images/logo.svg"
                    alt="Lottonowow"
                    height={32}
                    width={32}
                  />
                </Link>
              </div>
              <nav className="flex flex-1 flex-col">
                <ul className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul className="-mx-2 space-y-1">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className={classNames(
                              pathname === item.href
                                ? "bg-primary text-white font-extrabold"
                                : "hover:bg-primary hover:text-white text-[#666666]",
                              "group flex gap-x-3 rounded-xl p-2.5 leading-6 "
                            )}
                          >
                            <item.icon
                              className={classNames(
                                pathname === item.href
                                  ? "text-white font-extrabold"
                                  : "group-hover:text-white",
                                "h-6 w-6 shrink-0"
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="lg:pl-72">
            <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-white bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <HiMenuAlt2 className="h-6 w-6" aria-hidden="true" />
              </button>

              <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                <span className="relative flex flex-1"></span>
                <div className="flex items-center gap-x-4 lg:gap-x-6">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                  >
                    <BellIcon
                      className="h-6 w-6 text-black"
                      aria-hidden="true"
                    />
                  </button>

                  <p className="h-10 w-10 rounded-full bg-[#D9D9D9]"></p>

                  <p className="text-[15px] ">{loggedInUser}</p>
                </div>
              </div>
            </div>

            <main className="min-h-[100vh] bg-[#F8F9FC] py-5 ">
              <div className="px-4 pb-20 sm:px-6 lg:px-8">{children}</div>
            </main>
          </div>
        </div>
      )}
    </>
  );
}
