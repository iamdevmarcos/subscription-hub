import { SubscriptionService } from "@/services/SubscriptionService";
import { IPersistenceService } from "@/models/IPersistenceService";
import { Subscription } from "@/models/Subscription";

describe("SubscriptionService", () => {
  let subscriptionService: SubscriptionService;
  let mockPersistenceService: jest.Mocked<IPersistenceService>;

  beforeEach(() => {
    mockPersistenceService = {
      getSubscriptions: jest.fn(),
      saveSubscription: jest.fn(),
    };

    subscriptionService = new SubscriptionService(mockPersistenceService);
  });

  it("should fetch subscriptions correctly", async () => {
    const mockSubscriptions: Subscription[] = [
      { id: 1, name: "Netflix", price: 10, renewalDate: "2024-09-01" },
    ];

    mockPersistenceService.getSubscriptions.mockResolvedValue(
      mockSubscriptions
    );

    const subscriptions = await subscriptionService.fetchSubscriptions();

    expect(subscriptions).toHaveLength(1);
    expect(subscriptions).toEqual(mockSubscriptions);
    expect(mockPersistenceService.getSubscriptions).toHaveBeenCalledTimes(1);
  });

  it("should add a subscription correctly", async () => {
    const newSubscription: Subscription = {
      id: 2,
      name: "Spotify",
      price: 15,
      renewalDate: "2024-10-01",
    };

    mockPersistenceService.saveSubscription.mockResolvedValue(undefined);
    await subscriptionService.addSubscription(newSubscription);

    expect(mockPersistenceService.saveSubscription).toHaveBeenCalledWith(
      newSubscription
    );

    expect(mockPersistenceService.saveSubscription).toHaveBeenCalledTimes(1);
  });
});
