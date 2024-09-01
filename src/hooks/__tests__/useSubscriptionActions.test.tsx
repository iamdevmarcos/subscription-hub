import React, { PropsWithChildren } from "react";
import { renderHook, act, waitFor } from "@testing-library/react";
import { SubscriptionServiceProvider } from "@/contexts/SubscriptionContext";

import { useSubscriptionActions } from "../useSubscriptionActions";
import { useRouter } from "next/navigation";
import { Subscription } from "@/models/Subscription";

jest.mock("next/navigation", () => {
  return {
    __esModule: true,
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }),
    useSearchParams: () => ({
      get: () => {},
    }),
  };
});

const SubscriptionServiceProviderWrapper = ({
  children,
}: PropsWithChildren) => (
  <SubscriptionServiceProvider>{children}</SubscriptionServiceProvider>
);

describe("useSubscriptionAction", () => {
  it("should fetch subscriptions and updates state", async () => {
    const { result } = renderHook(() => useSubscriptionActions(), {
      wrapper: SubscriptionServiceProviderWrapper,
    });

    await waitFor(() => {
      expect(result.current.subscriptions).toBeDefined();
      expect(result.current.subscriptions).toHaveLength(0);
    });
  });

  it("should create a subscription with default values", async () => {
    const { result } = renderHook(() => useSubscriptionActions(), {
      wrapper: SubscriptionServiceProviderWrapper,
    });

    await waitFor(() => {
      const defaultSubscription: Subscription = {
        id: 0,
        name: "",
        price: 0,
        renewalDate: "",
      };

      expect(result.current.subscription).toStrictEqual(defaultSubscription);
    });
  });

  it("should handles subscription changes", async () => {
    const { result } = renderHook(() => useSubscriptionActions(), {
      wrapper: SubscriptionServiceProviderWrapper,
    });

    act(() => {
      result.current.handleChange({
        target: { name: "name", value: "New Subscription" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    await waitFor(() => {
      expect(result.current.subscription.name).toBe("New Subscription");
    });

    act(() => {
      result.current.handleChange({
        target: { name: "name", value: "Another Subscription" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    await waitFor(() => {
      expect(result.current.subscription).toStrictEqual({
        id: 0,
        name: "Another Subscription",
        price: 0,
        renewalDate: "",
      });
    });
  });

  it("should handle form submission", async () => {
    const { result } = renderHook(() => useSubscriptionActions(), {
      wrapper: SubscriptionServiceProviderWrapper,
    });

    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: () => {},
      } as React.FormEvent);
    });

    expect(result.current.subscription.name).toBe("");
    expect(result.current.subscription.name).not.toBe("John Doe");
  });
});
