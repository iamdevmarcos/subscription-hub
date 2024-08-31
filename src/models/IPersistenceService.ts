import { Subscription } from "./Subscription";

export interface IPersistenceService {
  getSubscriptions(): Promise<Subscription[]>;
  saveSubscription(subscription: Subscription): Promise<void>;
}
