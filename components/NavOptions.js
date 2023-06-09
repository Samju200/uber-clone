import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import tw from "twrnc";
const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pm",
    screen: "MapScreen",
  },
  {
    id: "435",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];
const NavOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
