import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);

const Insights = () => {
  return (
    <SafeAreaView className="bg-background flex-1 p-5">
      <Text>Insights</Text>
    </SafeAreaView>
  );
};

export default Insights;
