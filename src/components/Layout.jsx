import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useLocation } from 'react-router-dom';
import logo from "../logos/main-logo.png"
import {
  AcademicCapIcon,
  Bars3Icon,
  CalendarIcon,
  BriefcaseIcon,
  MagnifyingGlassCircleIcon,
  MegaphoneIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Sidebar from "./Sidebar";
import Source from "../pages/Sources";
import VChart from "./VChart";
import chartData from '../data/data'

const navigation = [
  {
    id: 0,
    name: "Assets",
    href: "/",
    icon: AcademicCapIcon,
    current: true,
  },
  {
    id: 1,
    name: "Invitations",
    href: "/invitations",
    icon: BriefcaseIcon,
    current: true,
  },
  {
    id: 2,
    name: "Asset Sources",
    href: "/sources",
    icon: CalendarIcon,
    current: false,
  },
  {
    id: 3,
    name: "Profile",
    href: "/profile",
    icon: UserGroupIcon,
    current: false,
  },
  {
    id: 4,
    name: "Billing",
    href: "/biling",
    icon: MagnifyingGlassCircleIcon,
    current: false,
  },
  {
    id: 5,
    name: "Sign out",
    href: "/sign-out",
    icon: MegaphoneIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  let secondChildren = null;
  if (location.pathname === '/') {
    secondChildren = <Source />;
  }if (location.pathname === "/invitations") {
    secondChildren = <Source />;
  }if (location.pathname === "/biling") {
    secondChildren = <VChart data={chartData.portfolioSummary}/>;
  }if (location.pathname === "/sources") {
    secondChildren = <Source />;
  }if (location.pathname === "/profile") {
    secondChildren = <Source />;
  }

  return (
    <>
      <div className="flex h-screen overflow-hidden" style={{ height: "auto" , width: "100%" , maxWidth:"100%" }}>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className=" flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none sticky top-0 z-50">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src={logo}
                        alt="Renora"
                      />
                    </div>
                    <nav aria-label="Sidebar" className="mt-5">
                      <div className="space-y-1 px-2">
                        {navigation.map((item) => (
                          <a
                            key={item.id}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                              "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                            )}
                          >
                            <item.icon
                              className={classNames(
                                item.current
                                  ? "text-gray-500"
                                  : "text-gray-400 group-hover:text-gray-500",
                                "mr-4 h-6 w-6"
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </nav>
                  </div>
                  <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                    {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="group block flex-shrink-0">
                      <div className="flex items-center">
                        <div>
                          <img
                            className="inline-block h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                            Whitney Francis
                          </p>
                          <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                            View profile
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <Sidebar classNames={classNames} navigation={navigation} />
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div className="lg:hidden">
            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5">
              <div>
                <img
                  className="h-8 w-auto"
                  src={logo}
                  alt="Renora"
                />
              </div>
              <div>
                <button
                  type="button"
                  className="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          <main className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-2 px-4" style={{ gridAutoFlow: 'dense' }}>
      <div className="lg:col-span-2">{children}</div>
      {secondChildren && (
        <div className="lg:col-span-1 p-4" style={{ height: 'auto', width: 'auto', maxWidth: '100%' }}>
          {secondChildren}
        </div>
      )}
    </main>


        </div>
      </div>
    </>
  );
}
