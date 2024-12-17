import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authHandler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
});

export {authHandler as GET, authHandler as POST};