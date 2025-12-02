import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

//chooses the provider from the NextAuth() constructor
export const {handlers, auth}=NextAuth(
    {
        providers : [GitHub]
    }
)