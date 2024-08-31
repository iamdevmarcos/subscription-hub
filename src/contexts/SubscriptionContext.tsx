"use client";

import React, { createContext, PropsWithChildren, useContext } from "react";
import { ISubscriptionService } from "@/models/ISubscriptionService";
import { SubscriptionService } from "@/services/SubscriptionService";
import { PersistenceService } from "@/services/PersistenceService";

const SubscriptionServiceContext = createContext<
  ISubscriptionService | undefined
>(undefined);

export const SubscriptionServiceProvider = ({
  children,
}: PropsWithChildren) => {
  const persistenceService = new PersistenceService();
  const subscriptionService = new SubscriptionService(persistenceService);

  return (
    <SubscriptionServiceContext.Provider value={subscriptionService}>
      {children}
    </SubscriptionServiceContext.Provider>
  );
};

export const useSubscriptionService = () => {
  const context = useContext(SubscriptionServiceContext);
  if (!context) {
    throw new Error(
      "useSubscriptionService must be used within a SubscriptionServiceProvider"
    );
  }

  return context;
};
