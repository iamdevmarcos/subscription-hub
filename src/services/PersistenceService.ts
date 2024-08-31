import { IPersistenceService } from "@/models/IPersistenceService";
import { Subscription } from "@/models/Subscription";

export class PersistenceService implements IPersistenceService {
  private subscriptions: Subscription[] = [];

  async getSubscriptions(): Promise<Subscription[]> {
    return this.subscriptions;
  }

  async saveSubscription(subscription: Subscription): Promise<void> {
    this.subscriptions.push(subscription);
  }
}
