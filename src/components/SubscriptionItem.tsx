import React from "react";
import { Subscription } from "@/models/Subscription";

type SubscriptionItemProps = {
  subscription: Subscription;
};

const SubscriptionItem = ({ subscription }: SubscriptionItemProps) => {
  return (
    <li className="border rounded p-4 shadow">
      <h2 className="text-xl font-semibold">{subscription.name}</h2>
      <p className="text-gray-700">
        Price: ${Number(subscription.price).toFixed(2)}
      </p>
      <p className="text-gray-500">Renewal Date: {subscription.renewalDate}</p>
    </li>
  );
};

export default SubscriptionItem;
