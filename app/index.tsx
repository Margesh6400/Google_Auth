import React, { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { Redirect, Tabs } from "expo-router";

export default function index() {
  const [loggedInUser, setloggedInUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscription = async () => {
      const token = SecureStore.getItem("accessToken");
      setloggedInUser(token ? true : false);
      setLoading(false);
    };
    subscription();
  }, []);

  return (
    <>
      {loading ? (
        <></>
      ) : (
      <Redirect href={!loggedInUser ? "/(routes)/onboarding" : "/(tabs)/"} />
      )}
    </>
  );
}
