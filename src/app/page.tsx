import SubscriptionList from "@/components/SubscriptionList";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="container mx-auto p-4 py-24">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">My Subscriptions</h1>
        <Link
          href="/add-subscription"
          className="px-4 py-2 bg-black text-white border border-transparent rounded hover:bg-white hover:text-black hover:border-black"
        >
          Add New Subscription
        </Link>
      </div>

      <hr className="border-t border-gray-300 my-4" />
      <SubscriptionList />
    </div>
  );
};

export default HomePage;
