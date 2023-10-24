import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import MainStackRouter from "./routes/mainstacknavigator/MainStackRouter";
import VerificationCode from "./screens/detailed_item_screen/verificationCode";
import NewPassword from "./screens/detailed_item_screen/newPassword";
import Payment from "./screens/detailed_item_screen/payment";
import AddNewCard from "./screens/detailed_item_screen/addNewCard";

const paddingTop = Platform.OS == "android" ? "pt-10" : "pt-0";

export default function App() {
  return (
    <SafeAreaView className={`flex-1 bg-white ${paddingTop}`}>
      {/* <VerificationCode/> */}
      <NewPassword/>
      {/* <Payment/> */}
      {/* <AddNewCard/> */}
      <MainStackRouter />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
