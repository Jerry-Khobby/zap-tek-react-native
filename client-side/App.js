import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import MainStackRouter from "./routes/mainstacknavigator/MainStackRouter";
import VerificationCode from "./screens/detailed_item_screen/verificationCode";
import NewPassword from "./screens/detailed_item_screen/newPassword";

const paddingTop = Platform.OS == "android" ? "pt-10" : "pt-0";

export default function App() {
  return (
    <SafeAreaView className={`flex-1 bg-white items-center ${paddingTop}`}>
      {/* <VerificationCode/> */}
      <NewPassword/>
      <MainStackRouter />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
