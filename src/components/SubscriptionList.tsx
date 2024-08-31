import SubscriptionItem from "./SubscriptionItem";

type Subscription = {
  id: number;
  name: string;
  price: number;
  renewalDate: string;
};

type SubscriptionListProps = {
  subscriptions: Subscription[];
};

const SubscriptionList = ({ subscriptions }: SubscriptionListProps) => {
  return (
    <ul className="space-y-4">
      {subscriptions.map((subscription) => (
        <SubscriptionItem key={subscription.id} subscription={subscription} />
      ))}
    </ul>
  );
};

export default SubscriptionList;
