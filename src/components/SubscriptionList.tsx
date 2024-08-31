"use client";

import React from "react";
import SubscriptionItem from "./SubscriptionItem";
import { useSubscriptionActions } from "@/hooks/useSubscriptionActions";

const SubscriptionList = () => {
  const { subscriptions } = useSubscriptionActions();

  if (!subscriptions.length)
    return (
      <p className="text-black text-center my-8">No subscriptions found...</p>
    );

  return (
    <ul className="flex flex-col gap-4">
      {subscriptions.map((subscription) => (
        <SubscriptionItem key={subscription.id} subscription={subscription} />
      ))}
    </ul>
  );
};

export default SubscriptionList;
