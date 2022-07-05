import NextAuth from "../../../node_modules/next-auth/index";
import Providers from "../../../node_modules/next-auth/providers";

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            scope: 'read:user'
        }),
    ],
    callbacks: {
        async session() {

        },
        async singIn() {

        }
    }
})