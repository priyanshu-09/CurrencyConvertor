import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
  ScrollView,
} from "react-native";
import { format } from "date-fns";
import { Button } from "./Button";
import { ConversionInput } from "../components/ConversionInput";
import colors from "../constants/colors";

const screen = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
  content: {
    paddingTop: screen.height * 0.2,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  logoBackground: {
    width: screen.width * 0.45,
    height: screen.width * 0.45,
  },
  textHeader: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 14,
    textAlign: "center",
  },
});

export default () => {
  const baseCurrency = "USD";
  const quoteCurrency = "GBP";
  const conversionRate = 0.835;
  const date = new Date();

  const [scrollEnabled, setScrollEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <ScrollView scrollEnabled={scrollEnabled}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/background.png")}
              style={styles.logoBackground}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.textHeader}>Currency Convertor</Text>
          <ConversionInput
            text="USD"
            value="123"
            onButtonPress={() => alert("todo")}
            onChangeText={(text) => console.log("text", text)}
            keyboardType="numeric"
          />
          <ConversionInput
            text="GBP"
            value="123"
            onButtonPress={() => alert("todo")}
            editable={false}
          />
          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
              date,
              "MMMM do, yyyy"
            )}`}
          </Text>

          <Button text="Reverse Currencies" onPress={() => alert("todo")} />
        </View>
      </ScrollView>
    </View>
  );
};
