"use client";

import { useSubscriptionActions } from "@/hooks/useSubscriptionActions";
import React from "react";

const AddSubscriptionForm = () => {
  const { subscription, handleChange, handleSubmit } = useSubscriptionActions();

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
