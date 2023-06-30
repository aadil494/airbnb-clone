import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import client from "@/app/libs/prsimadb";
import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
export const authOptions : AuthOptions  = {
    adapter: PrismaAdapter(client),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email : {label: "Email", type: "text"},
                password: {label: "Password", type: "password"},
            },
            
            async authorize(credentials) {
                if(!credentials?.email || !credentials?.password){
                    throw new Error("Invalid Credentails");               
                }

                const user = await client.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if(!user || !user?.hashedPassword){
                    throw new Error("Invalid Credentails");
                }

                const isCorrectPassword  =  bcrypt.compare(credentials.password, user.hashedPassword);
                if(!isCorrectPassword){
                    throw new Error("Invalid Credentails");
                }
                return user; 
            }
        })
    ],
    pages:{
        signIn: "/",
    },
    debug: process.env.NODE_ENV === "development",
    session:{
        strategy: "jwt",

    },
    secret: process.env.SECRET,
}

export default NextAuth(authOptions) ;