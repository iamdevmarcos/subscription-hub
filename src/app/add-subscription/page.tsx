import AddSubscriptionForm from "@/components/AddSubscriptionForm";
import Link from "next/link";

const AddSubscriptionPage = () => {
  return (
    <div className="container mx-auto p-4 py-24 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Add New Subscription</h1>
        <Link
          href="/"
          className="px-4 py-2 bg-black text-white border border-transparent rounded hover:bg-white hover:text-black hover:border-black"
        >
          Back to all subscriptions
        </Link>
      </div>

      <hr className="border-t border-gray-300" />
      <AddSubscriptionForm />
    </div>
  );
};

export default AddSubscriptionPage;
