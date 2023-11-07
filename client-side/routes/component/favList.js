import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDarkMode } from "../../context/darkmode";

const favList = (favListItem) => {
  const { isDarkMode } = useDarkMode();
  return (
    <View className="flex-1 m-2 mx-3 w-1/2">
      <View className="w-full h-72 rounded-xl bg-red-500">
        <Image
          source={favListItem.imageSource}
          className="h-full w-full rounded-xl"
        />
        <TouchableOpacity className="absolute top-5 right-5">
          <MaterialCommunityIcons
            name={"heart-outline"}
            size={24}
            color={"gray"}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleScreenMovement}>
        <Text
          className={`${
            isDarkMode ? "text-white" : "text-black"
          } font-semibold text-base`}
        >
          {favListItem.brandName}
        </Text>
        <Text
          className={`${
            isDarkMode ? "text-white" : "text-black"
          } font-semibold text-base`}
        >
          {favListItem.product}
        </Text>
        <Text
          className={`${
            isDarkMode ? "text-white" : "text-black"
          } text-lg font-bold`}
        >
          {favListItem.price}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default favList;

const styles = StyleSheet.create({});
