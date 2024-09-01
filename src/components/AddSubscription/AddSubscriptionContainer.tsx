"use client";

import React from "react";
import { useSubscriptionActions } from "@/hooks/useSubscriptionActions";
import AddSubscriptionFormPresentation from "./AddSubscriptionPresentation";

const AddSubscriptionFormContainer = () => {
  const { subscription, handleChange, handleSubmit } = useSubscriptionActions();

  return (
    <AddSubscriptionFormPresentation
      onSubmit={handleSubmit}
      subscription={subscription}
      onNameChange={(event) => handleChange(event)}
      onPriceChange={(event) => handleChange(event)}
      onRenewalDateChange={(event) => handleChange(event)}
    />
  );
};

export default AddSubscriptionFormContainer;
