"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {FiCheckCircle, FiCalendar, FiAward, FiFileText, FiLayers, FiLogOut} from "react-icons/fi";
import SignInButton from "@/components/SignInButton";
import {signOut, useSession} from "next-auth/react";

export default function SideBar() {

    const { data: session } = useSession();

    const pathname = usePathname();

    const menuItems = [
        { name: "Поточний контроль", path: "/current-control", icon: FiCheckCircle },
        { name: "Сесія", path: "/session", icon: FiCalendar },
        { name: "Атестація", path: "/attestation", icon: FiAward },
        { name: "Методички", path: "/methodics", icon: FiFileText },
        { name: "Інше", path: "/other", icon: FiLayers },
    ];
    return (
        <div className="w-64 h-screen bg-white shadow-lg flex flex-col justify-between">
            <div className="px-5">
                {/* Логотип */}
                <Link
                    href={"/"}
                    className="flex items-center justify-center my-6"
                >
                    <img src="/logo.svg" alt="Campus" className="w-12 h-12 mr-2"/>
                    <h1 className="text-2xl font-bold text-blue-500">Campus</h1>
                </Link>

                {/* Меню */}
                <nav className="pb-5 border-b">
                    <ul className="space-y-1">
                        {menuItems.map((item, index) => {
                            const isActive = pathname === item.path;

                            return (
                                <li key={index}>
                                    <Link
                                        href={item.path}
                                        className={`flex items-center px-3 py-2 rounded-lg transition duration-300 ${
                                            isActive
                                                ? "text-white bg-blue-500"
                                                : "text-gray-500 hover:bg-gray-100 hover:text-blue-500"
                                        }`}
                                    >
                                        <item.icon
                                            className={`mr-3 text-base transition duration-300 ${
                                                isActive ? "text-white" : "text-gray-500 group-hover:text-blue-500"
                                            }`}
                                            size="24"
                                        />
                                        <span className="font-semibold">{item.name}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>

            {/* Профіль */}
            {session?
                <div className="p-5">
                    <div className="bg-gray-50 p-1.5 flex items-center rounded-lg border">
                        {session.user?.image?
                            <img src={session.user?.image} alt={session.user?.name} className="w-10 h-10 rounded-lg mr-3"/>
                            :
                            <div className="w-10 h-10 bg-gray-300 rounded-lg mr-3"></div>
                        }
                        <div>
                            <p className="text-gray-600 font-semibold text-sm">{session.user?.name}</p>
                            <p className="text-gray-500 text-xs">Студент</p>
                        </div>
                        <button className="ml-auto p-2 items-center justify-center text-gray-500 cursor-pointer"
                                onClick={() => signOut()}>
                                <FiLogOut size="24"/>
                        </button>
                    </div>
                </div>
                :
                <div className="p-5">
                    <div className="bg-gray-50 p-1.5 flex items-center rounded-lg border">
                        <SignInButton/>
                    </div>
                </div>
            }
        </div>
    );
}