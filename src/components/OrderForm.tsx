import React, { useState } from "react";

interface OrderFormProps {
  onSubmit(Order: { name: string; cups: number }): void;
  // onsubmit mai order ayega jo name aur cups hoga
}

export function OrderForm({ onSubmit }: OrderFormProps) {
  const [name, setName] = useState<string>("masala");
  const [cups, setCups] = useState<number>(1);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // here we also give the type to event
    onSubmit({ name, cups }); // yaha per ham onsubmit mai 2 values send kar rahe hai
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Chai Name :</label>
      <input
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />

      <label>Cups :</label>
      <input
        type="number"
        value={cups}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCups(Number(e.target.value) || 0)
        }
      />
      <button type="submit">Place Order</button>
    </form>
  );
}
