import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    FlatList,
  } from "react-native";
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
  import twrnc from "tailwind-react-native-classnames";
  import React from "react";
  import { Review_rating } from "../../data/review_ratings";
  import Icon_SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
  import EvilIcons from "react-native-vector-icons/EvilIcons";
  import { Review_description } from "../../data/review_ratings";
  import { reviewData } from "../../data/reviewData";
  import { useDarkMode } from "../../context/darkmode";
  
  const Review_Details = ({ navigation }) => {
    const handleBackWardNavigation = () => {
      navigation.navigate("screen9");
    };
  
    // moving to the add review screen
    const AddReviewScreen = () => {
      navigation.navigate("screen11");
    };
  
    // implementing the dark mode for the reviews
    const { isDarkMode } = useDarkMode();
  
    return (
      <SafeAreaView
        style={!isDarkMode ? twrnc`bg-white h-full` : twrnc`bg-black h-full`}
      >
        <View style={!isDarkMode ? twrnc`mx-5` : twrnc`mx-5`}>
          {/*Topmost section of the Review Detail Page*/}
          <View style={twrnc`flex-row mt-5 items-center`}>
            <View>
              <TouchableOpacity
                style={
                  !isDarkMode
                    ? twrnc`bg-gray-200 h-12 w-12 mt-2 rounded-full`
                    : twrnc`h-12 w-12 mt-2 rounded-full bg-gray-700`
                }
                onPress={handleBackWardNavigation}
              >
                <View style={twrnc`items-center mt-3`}>
                  <MaterialCommunityIcons
                    name="arrow-left"
                    size={24}
                    color={isDarkMode ? "white" : "black"}
                  />
                </View>
              </TouchableOpacity>
            </View>
  
            <Text
              style={
                !isDarkMode
                  ? twrnc`mx-24 mt-5 text-2xl font-semibold`
                  : twrnc`mx-24 mt-5 text-2xl font-semibold text-white`
              }
            >
              Reviews
            </Text>
          </View>
  
          <View style={twrnc`my-4 flex-row justify-between`}>
            <View>
              <Text
                style={
                  !isDarkMode
                    ? twrnc`font-semibold`
                    : twrnc`font-semibold text-white`
                }
              >
                245 Reviews
              </Text>
              <View style={twrnc`flex-row mt-1`}>
                <Text style={!isDarkMode ? "" : twrnc`text-white`}>4.8 </Text>
                <View style={twrnc`mt-0.5`}>
                  <Review_rating />
                </View>
              </View>
            </View>
  
            {/*Add review button*/}
            <TouchableOpacity onPress={AddReviewScreen}>
              <View style={[twrnc`h-10 w-28 rounded-lg`, styles.primary]}>
                <View style={twrnc`flex-row items-center ml-2.5 mt-2.5`}>
                  <Icon_SimpleLineIcons name="note" size={15} color="white" />
                  <Text style={twrnc`text-white`}>Add Review</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
  
          {/*First Review Tag*/}
          <FlatList
            data={reviewData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View>
                <View style={twrnc`mt-4 flex-row`}>
                  <Image source={item.imageSource} style={twrnc`h-10 w-10`} />
                  <View style={twrnc`flex-row`}>
                    <View style={twrnc`ml-2`}>
                      <Text
                        style={
                          !isDarkMode
                            ? twrnc`ml-1 font-bold`
                            : twrnc`ml-1 font-bold text-white`
                        }
                      >
                        {item.name}
                      </Text>
                      <View style={twrnc`flex-row mt-2`}>
                        <EvilIcons name="clock" size={24} color="gray" />
                        <Text style={twrnc`text-gray-500`}>{item.date}</Text>
                      </View>
                    </View>
  
                    <View style={twrnc`ml-20`}>
                      <Text
                        style={
                          !isDarkMode
                            ? twrnc`font-bold ml-8`
                            : twrnc`font-bold ml-8 text-white`
                        }
                      >
                        {item.rating}
                        <Text style={twrnc`text-gray-500`}> rating</Text>
                      </Text>
                      <View style={twrnc`ml-8 mt-1`}>
                        {/*Function call to display accompanying stars*/}
                        <Review_rating numOfStars={item.rating} />
                      </View>
                    </View>
                  </View>
                </View>
                <Text className={`text-gray-500`}>{item.review}</Text>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  export default Review_Details;
  const styles = StyleSheet.create({
    primary: {
      backgroundColor: "orange",
    },
  });