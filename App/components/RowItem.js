import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  rows: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: colors.text,
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
    marginRight: 20,
  },
});

export const RowItem = ({ text, rightIcon, onPress }) => {
  return (
    <TouchableOpacity style={styles.rows} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
};

export const RowSeparator = () => {
  return <View style={styles.separator} />;
};
