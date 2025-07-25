
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function TeenBankingApp() {
  const [balance, setBalance] = useState(0);
  const [points, setPoints] = useState(0);
  const [cardOrdered, setCardOrdered] = useState(false);

  const earnPoints = () => setPoints(points + 10);
  const convertPointsToCash = () => {
    if (points >= 10) {
      setBalance(balance + 1);
      setPoints(points - 10);
    }
  };

  const orderCard = () => setCardOrdered(true);

  return (
    <div className="p-4 max-w-md mx-auto space-y-6">
      <Card>
        <CardContent className="text-center">
          <h2 className="text-xl font-bold mb-2">Welcome, Teen!</h2>
          <p>Balance: ${balance.toFixed(2)}</p>
          <p>Points: {points}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4">
          <h3 className="text-lg font-semibold">Play & Earn</h3>
          <Button onClick={earnPoints} className="w-full">Play Game (Earn 10 pts)</Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4">
          <h3 className="text-lg font-semibold">Rewards</h3>
          <Button onClick={convertPointsToCash} className="w-full" disabled={points < 10}>
            Convert 10 pts → $1
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4">
          <h3 className="text-lg font-semibold">My Card</h3>
          {cardOrdered ? (
            <p>Your free debit card is on the way! 🎉</p>
          ) : (
            <Button onClick={orderCard} className="w-full">Order My Free Card</Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
