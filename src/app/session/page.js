"use client";

import {useSession} from "next-auth/react";
import LoginAlerts from "@/components/LoginAlerts";

export default function Home() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <LoginAlerts/>
        );
    }


    return (
      <div className="">
          Сесія
      </div>
    );
}
