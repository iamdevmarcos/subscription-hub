import { Subscription } from "@/models/Subscription";
import { PersistenceService } from "../PersistenceService";

describe("PersistenceService", () => {
  let persistenceService: PersistenceService;

  beforeEach(() => {
    persistenceService = new PersistenceService();
  });

  it("should return an empty list of subscriptions by default", async () => {
    const subscriptions = await persistenceService.getSubscriptions();
    expect(subscriptions).toEqual([]);
    expect(subscriptions).toHaveLength(0);
  });

  it("should add a subscription and retrieve it", async () => {
    const subscription: Subscription = {
      id: 1,
      name: "Netflix",
      price: 10,
      renewalDate: "2024-09-01",
    };

    await persistenceService.saveSubscription(subscription);

    const subscriptions = await persistenceService.getSubscriptions();
    expect(subscriptions).toContainEqual(subscription);
    expect(subscriptions).toHaveLength(1);
  });

  it("should add multiple subscriptions and retrieve them", async () => {
    const subscription1: Subscription = {
      id: 1,
      name: "Netflix",
      price: 10,
      renewalDate: "2024-09-01",
    };

    const subscription2: Subscription = {
      id: 2,
      name: "Spotify",
      price: 15,
      renewalDate: "2024-10-01",
    };

    const addSubscription1 = await persistenceService.saveSubscription(
      subscription1
    );
    const addSubscription2 = await persistenceService.saveSubscription(
      subscription2
    );

    await Promise.all([addSubscription1, addSubscription2]);

    const subscriptions = await persistenceService.getSubscriptions();
    expect(subscriptions).toEqual([subscription1, subscription2]);
  });
});
