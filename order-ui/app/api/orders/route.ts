import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export const runtime = "nodejs";

export async function POST(req: Request) { 
  const session = await getServerSession(authOptions);  

  if (!session || !(session as any).accessToken) {
    return new Response("Unauthorized", { status: 401 });
  }

  const body = await req.json();

  const res = await fetch("http://order-service:8080/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${(session as any).accessToken}`,
    },
    body: JSON.stringify(body),
  });

  return new Response(await res.text(), {
    status: res.status,
  });
}