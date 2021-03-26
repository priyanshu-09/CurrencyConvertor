import React from "react";
import { ScrollView, SafeAreaView, Linking, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";
import colors from "../constants/colors";
import { RowItem, RowSeparator } from "../components/RowItem";

const openUrl = (url) => {
  return Linking.openURL(url).catch(() => {
    Alert.alert("Sorry something went wrong.", "Please try again later");
  });
};

export default () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "lightblue" }}>
      <ScrollView>
        <RowItem
          onPress={() => openUrl("https://github.com")}
          text="Themes"
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />

        <RowSeparator />

        <RowItem
          onPress={() => alert("Hey")}
          text="Hey"
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />

        <RowSeparator />

        <RowItem
          onPress={() => alert("Hey")}
          text="Bye"
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />
        <RowSeparator />

        <RowItem
          onPress={() => alert("Hey")}
          text="Hey"
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
