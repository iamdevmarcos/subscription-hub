"use client";

import { useSubscriptionService } from "@/contexts/SubscriptionContext";
import { Subscription } from "@/models/Subscription";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useSubscriptionActions = () => {
  const subscriptionService = useSubscriptionService();
  const router = useRouter();

  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [subscription, setSubscription] = useState<Subscription>({
    id: 0,
    name: "",
    price: 0,
    renewalDate: "",
  });

  const fetchSubscriptions = async () => {
    const result = await subscriptionService.fetchSubscriptions();
    setSubscriptions(result);
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSubscription((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await subscriptionService.addSubscription(subscription);

    router.push("/");

    setSubscription({
      id: 0,
      name: "",
      price: 0,
      renewalDate: "",
    });
  };

  return {
    subscriptions,
    subscription,
    handleChange,
    handleSubmit,
  };
};
