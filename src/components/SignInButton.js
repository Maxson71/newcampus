import { signIn } from "next-auth/react";

export default function SignInButton() {
    return (
        <button
            onClick={() => signIn("github")}
            className="flex-1 bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded-lg"
        >
            Увійти
        </button>
    );
}
