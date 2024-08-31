import React, { useState } from "react";
import { Subscription } from "@/models/Subscription";

const AddSubscriptionForm: React.FC = () => {
  const [subscription, setSubscription] = useState<Subscription>({
    id: 0,
    name: "",
    price: 0,
    renewalDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSubscription((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={subscription.name}
        onChange={handleChange}
        placeholder="Subscription Name"
        required
      />
      <input
        type="number"
        name="price"
        value={subscription.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <input
        type="date"
        name="renewalDate"
        value={subscription.renewalDate}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Subscription</button>
    </form>
  );
};

export default AddSubscriptionForm;
