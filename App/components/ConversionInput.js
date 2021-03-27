import {
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  Text,
} from "react-native";

import React from "react";
import colors from "../constants/colors";


const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: colors.white,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRightColor: colors.border,
    borderRightWidth: 1,
  },
  container: {
    backgroundColor: colors.white,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
  },
  containerDisabled: {
    backgroundColor: colors.offWhite,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.blue,
  },
  input: {
    padding: 10,
    color: colors.textLight,
    flex: 1,
  },
});

export const ConversionInput = ({ text, onButtonPress, ...props }) => {
  const containerStyles = [styles.container];
  if (props.editable === false) {
    containerStyles.push(styles.containerDisabled);
    console.log(containerStyles);
  }
  return (
    <View style={containerStyles}>
      <TouchableOpacity onPress={onButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};
