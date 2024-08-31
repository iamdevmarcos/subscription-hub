"use client";
import { useState } from "react";

const AddSubscriptionForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [renewalDate, setRenewalDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscription Added:", { name, price, renewalDate });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Price</label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Renewal Date</label>
        <input
          value={renewalDate}
          onChange={(e) => setRenewalDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Subscription
      </button>
    </form>
  );
};

export default AddSubscriptionForm;
