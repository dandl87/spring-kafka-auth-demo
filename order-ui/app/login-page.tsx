"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { LogIn } from "lucide-react";

export default function LoginPage() {

const [loading, setLoading] = useState(false);

const handleSignIn = async () => {
  try{ 
    setLoading(true); 
    await signIn("spring", {
      callbackUrl: "/dashboard",
    });
  } catch(err){
    console.error("Login error", err);
    setLoading(false);
  }
};


  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-950 text-white flex items-center justify-center px-4">
      
      <Card className="w-full max-w-md bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl rounded-2xl">
        <CardContent className="p-8 text-center">
          
          <h1 className="text-3xl font-bold mb-2">
            Kafka Order Platform
          </h1>

          <p className="text-zinc-400 mb-6">
            Sistema distribuito con Spring Boot, OAuth2 e Kafka
          </p>

          <Button disabled={loading} onClick={handleSignIn} className="w-full text-lg py-6 disabled:opacity-70 disabled:cursor-not-allowed">
            {loading ? "Redirecting..." : (
                  <span className="flex items-center justify-center gap-2">
                    <LogIn size={18} />
                    Login con OAuth2
                  </span>
                  )} 
          </Button>

 

        </CardContent>
      </Card>

    </main>
  );
}