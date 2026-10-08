import { Text, View } from "react-native";
import { Link } from "expo-router";

import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="bg-background flex-1 p-5">
      <Text className="text-success text-xl font-bold">Welcome to Nativewind!</Text>
      <Link href="/onboarding" className="bg-primary mt-4 rounded p-4 text-white">
        Go to Onboarding
      </Link>
      <Link href="/(auth)/sign-in" className="bg-primary mt-4 rounded p-4 text-white">
        Go to Sign In
      </Link>
      <Link href="/(auth)/sign-up" className="bg-primary mt-4 rounded p-4 text-white">
        Go to Sign Up
      </Link>
      <Link href="/subscriptions/spotify" className="bg-primary mt-4 rounded p-4 text-white">
        Subscription
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
        className="bg-primary mt-4 rounded p-4 text-white"
      >
        Claude Max Subscription
      </Link>
    </SafeAreaView>
  );
}
