"use client";

import { useSubscriptionActions } from "@/hooks/useSubscriptionActions";
import React from "react";

const AddSubscriptionForm = () => {
  const { subscription, handleChange, handleSubmit } = useSubscriptionActions();

  return (
    <div className="max-w-md mx-auto p-6 bg-white border border-gray-300 shadow-md rounded-lg ">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">
        Add Subscription
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Subscription Name
          </label>
          <input
            type="text"
            name="name"
            value={subscription.name}
            onChange={handleChange}
            placeholder="Enter subscription name"
            required
            className="mt-1 block w-full border border-gray-400 rounded-lg py-2 px-3 text-gray-900 placeholder-gray-500 focus:border-gray-600 focus:ring-gray-600 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={subscription.price}
            onChange={handleChange}
            placeholder="Enter price"
            required
            className="mt-1 block w-full border border-gray-400 rounded-lg py-2 px-3 text-gray-900 placeholder-gray-500 focus:border-gray-600 focus:ring-gray-600 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Renewal Date
          </label>
          <input
            type="date"
            name="renewalDate"
            value={subscription.renewalDate}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-400 rounded-lg py-2 px-3 text-gray-900 placeholder-gray-500 focus:border-gray-600 focus:ring-gray-600 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-gray-900 text-white font-semibold rounded-lg shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        >
          Add Subscription
        </button>
      </form>
    </div>
  );
};

export default AddSubscriptionForm;
