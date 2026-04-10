export async function GET() {
  const res = await fetch("http://localhost:9090/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " + Buffer.from("orders-client:orders-secret").toString("base64"),
    },
    body: "grant_type=client_credentials&scope=orders.write",
  });

  const data = await res.json();
  return Response.json(data);
}