import { IPersistenceService } from "@/models/IPersistenceService";
import { ISubscriptionService } from "@/models/ISubscriptionService";
import { Subscription } from "@/models/Subscription";

export class SubscriptionService implements ISubscriptionService {
  constructor(private persistenceService: IPersistenceService) {}

  async fetchSubscriptions(): Promise<Subscription[]> {
    return this.persistenceService.getSubscriptions();
  }

  async addSubscription(subscription: Subscription): Promise<void> {
    return this.persistenceService.saveSubscription(subscription);
  }
}
