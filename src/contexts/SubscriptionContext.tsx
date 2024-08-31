import React, { createContext, useContext } from "react";
import { ISubscriptionService } from "@/models/ISubscriptionService";
import { SubscriptionService } from "@/services/SubscriptionService";

const SubscriptionServiceContext = createContext<ISubscriptionService>(
  new SubscriptionService()
);

export const useSubscriptionService = () =>
  useContext(SubscriptionServiceContext);
