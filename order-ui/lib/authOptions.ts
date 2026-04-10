import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    {
      id: "spring",
      name: "Spring Auth",
      type: "oauth",
      issuer: "http://localhost:9090",

      authorization: {
        url: "http://localhost:9090/oauth2/authorize",
        params: {
          scope: "openid profile orders.write",
        },
      },

      token: "http://localhost:9090/oauth2/token",
      jwks_endpoint: "http://localhost:9090/oauth2/jwks",
      userinfo: "http://localhost:9090/userinfo",

      clientId: "oidc-client",
      clientSecret: "secret",

      profile(profile: any) {
        return {
          id: profile.sub,
          name: profile.username || profile.sub,
          email: profile.email ?? null,
        };
      },
    },
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }
      return token;
    },

    async session({ session, token }) {
      (session as any).accessToken = token.accessToken as string;
      return session;
    },

 
  },
};