"use client";

import React, { Suspense } from "react";
import { useSubscriptionActions } from "@/hooks/useSubscriptionActions";
import dynamic from "next/dynamic";

const SubscriptionItem = dynamic(
  /* webpackChunkName: 'SubscriptionItem' */
  () => import("./SubscriptionItem"),
  { suspense: true, ssr: false }
);

const SubscriptionList = () => {
  const { subscriptions } = useSubscriptionActions();

  if (!subscriptions.length)
    return (
      <p className="text-black text-center my-8">No subscriptions found...</p>
    );

  return (
    <ul className="flex flex-col gap-4">
      {subscriptions.map((subscription) => (
        <Suspense
          key={subscription.id}
          fallback={<p>loading SubscriptionItem...</p>}
        >
          <SubscriptionItem subscription={subscription} />
        </Suspense>
      ))}
    </ul>
  );
};

export default SubscriptionList;
