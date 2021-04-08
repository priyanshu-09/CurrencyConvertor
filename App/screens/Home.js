import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { format } from "date-fns";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "./Button";
import { ConversionInput } from "../components/ConversionInput";
import colors from "../constants/colors";
import { KeyboardSpacer } from "../components/KeyboardSpacer";

const screen = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
  content: {
    paddingTop: screen.height * 0.1,
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
  header: {
    alignItems: "flex-end",
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

export default ({ navigation }) => {
  // const baseCurrency = "USD";
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [quoteCurrency, setQuoteCurrency] = useState("GBP");
  const [value, setValue] = useState("100");
  // const quoteCurrency = "GBP";
  const conversionRate = 0.835;
  const date = new Date();

  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };

  const [scrollEnabled, setScrollEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />

      <SafeAreaView style={styles.header}>
        <TouchableOpacity onPress={() => navigation.push("Options")}>
          <Entypo name="cog" size={32} color={colors.white} />
        </TouchableOpacity>
      </SafeAreaView>

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
            text={baseCurrency}
            value={value}
            onButtonPress={() =>
              navigation.push("CurrencyList", {
                title: "Base Currency",
                activeCurrency: baseCurrency,
                onChange: (currency) => setBaseCurrency(currency),
              })
            }
            onChangeText={(text) => setValue(text)}
            keyboardType="numeric"
          />
          <ConversionInput
            text={quoteCurrency}
            value={
              value && `${(parseFloat(value) * conversionRate).toFixed(2)}`
            }
            onButtonPress={() =>
              navigation.push("CurrencyList", {
                title: "Quote Currency",
                activeCurrency: quoteCurrency,
                onChange: (currency) => setQuoteCurrency(currency),
              })
            }
            editable={false}
          />
          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
              date,
              "MMMM do, yyyy"
            )}`}
          </Text>

          <Button text="Reverse Currencies" onPress={() => swapCurrencies()} />
          <KeyboardSpacer
            onToggle={(keyboardIsVisible) =>
              setScrollEnabled(keyboardIsVisible)
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};
