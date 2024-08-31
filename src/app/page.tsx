import SubscriptionList from "@/components/SubscriptionList";
import Link from "next/link";

const HomePage = () => {
  const subscriptions = [
    { id: 1, name: "Netflix", price: 19.99, renewalDate: "2024-09-01" },
    { id: 2, name: "Spotify", price: 9.99, renewalDate: "2024-09-05" },
  ];

  return (
    <div className="container mx-auto p-12">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">My Subscriptions</h1>
        <Link
          href="/add-subscription"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add New Subscription
        </Link>
      </div>

      <hr className="border-t border-gray-300 my-4" />
      <SubscriptionList subscriptions={subscriptions} />
    </div>
  );
};

export default HomePage;
