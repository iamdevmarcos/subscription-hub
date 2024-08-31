import { ISubscriptionService } from "@/models/ISubscriptionService";
import { Subscription } from "@/models/Subscription";

export class SubscriptionService implements ISubscriptionService {
  async fetchSubscriptions(): Promise<Subscription[]> {
    return [];
  }
  async addSubscription(subscription: Subscription): Promise<void> {
    return;
  }
}
