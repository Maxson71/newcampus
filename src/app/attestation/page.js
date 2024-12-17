"use client";

import {useSession} from "next-auth/react";
import LoginAlerts from "@/components/LoginAlerts";
import {FiCornerDownRight} from "react-icons/fi";

export default function Home() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <LoginAlerts/>
        );
    }
    return (
      <div className="p-5">
          <h1 className="mb-2 font-bold text-4xl text-neutral-900">Атестація</h1>
          <div className="flex row space-x-2 ">
              <FiCornerDownRight size="24" className="text-2xl text-neutral-900"/>
              <div className=" px-4 py-0.5 text-center font-semibold text-white bg-blue-500 rounded-full">
                  Всі роки
              </div>
          </div>
      </div>
    );
}
