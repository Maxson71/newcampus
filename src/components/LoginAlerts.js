import Image from "next/image";
import SignInButton from "@/components/SignInButton";

export default function LoginAlerts() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <div className="flex justify-center mb-2">
                    <Image src="/logo.svg" alt="Campus" width={100} height={100}/>
                </div>
                <h1 className="text-2xl font-bold text-blue-500">Campus</h1>
                <p className="mb-2 text-gray-500">Увійдіть щоб продовжити</p>
                <SignInButton/>
            </div>
        </div>
    );
}