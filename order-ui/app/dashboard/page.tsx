"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";



type Product = {
  id: string;
  name: string;
  price: number;
};

type OrderItem = Product & { quantity: number };

const products: Product[] = [
  { id: "1", name: "Fender Stratocaster", price: 2000 },
  { id: "2", name: "Gibson Les Paul", price: 2500 },
];
 

export default function OrderPage() {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [cart, setCart] = useState<OrderItem[]>([]);

  // aggiungi prodotto
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);

      if (existing) {
        return prev.map((p) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // modifica quantità
  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, quantity: p.quantity + delta } : p
        )
        .filter((p) => p.quantity > 0)
    );
  };

  // totale
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const submitOrder = async () => {
    setSuccess(false);
    setError(false);

    const payload = {
        items: cart.map((item) => ({
        productName: item.name,
        quantity: item.quantity,
        })),
    }; 

    try {
        const res = await fetch("/api/orders", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        });

        const text = await res.text();

        if (!res.ok) {
        console.error("STATUS:", res.status);
        console.error("BODY:", text);
        throw new Error();
        }

        setSuccess(true);
        setCart([]);
    } catch (err) {
        console.error(err);
        setError(true);
    }
};

useEffect(() => {
  if (success) {
    const t = setTimeout(() => setSuccess(false), 3000);
    return () => clearTimeout(t);
  }
}, [success]);

  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      
      {/* PRODOTTI */}
      <Card>
        <CardHeader>
          <CardTitle>Prodotti</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {products.map((p) => (
            <div
              key={p.id}
              className="flex justify-between items-center border p-3 rounded"
            >
              <div>
                <p className="font-medium">{p.name}</p>
                <p className="text-sm text-muted-foreground">
                  €{p.price}
                </p>
              </div>
              <Button onClick={() => addToCart(p)}>Aggiungi</Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* CARRELLO */}
      <Card>
        <CardHeader>
          <CardTitle>Ordine</CardTitle>
        </CardHeader>
       
        <CardContent className="space-y-4">
          {cart.length === 0 && <p>Nessun prodotto</p>}

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-3 rounded"
            >
              <div>
                <p>{item.name}</p>
                <p className="text-sm">€{item.price}</p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  onClick={() => updateQty(item.id, -1)}
                >
                  -
                </Button>

                <span>{item.quantity}</span>

                <Button
                  size="sm"
                  onClick={() => updateQty(item.id, 1)}
                >
                  +
                </Button>
              </div>
            </div>
          ))}

          <div className="flex justify-between font-bold pt-4">
            <span>Totale</span>
            <span>€{total.toFixed(2)}</span>
          </div>

          <Button
            className="w-full"
            disabled={cart.length === 0}
            onClick={submitOrder}
          >
            Crea Ordine
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Info</CardTitle>
        </CardHeader>

         <CardContent className="space-y-1"> 

            {success && (
                <Alert className="bg-green-50 border-green-200">
                    <AlertTitle>Successo</AlertTitle>
                    <AlertDescription>
                    Ordine creato correttamente 
                    </AlertDescription>
                </Alert>
                )}

                {error && (
                <Alert variant="destructive">
                    <AlertTitle>Errore</AlertTitle>
                    <AlertDescription>
                    Errore durante la creazione dell'ordine
                    </AlertDescription>
                </Alert>
            )}
        </CardContent>

      </Card>
    </div>
  );
}