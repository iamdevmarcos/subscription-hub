import { Subscription } from "./Subscription";

export interface ISubscriptionService {
  fetchSubscriptions(): Promise<Subscription[]>;
  addSubscription(subscription: Subscription): Promise<void>;
}
