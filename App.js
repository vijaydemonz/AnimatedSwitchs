import React, { useState } from "react";
import { View } from "react-native";
import { AnimatedSwitch } from "react-native-animated-switch";
import OnOffAnimatedSwitch from "./src/OnOffSwitch";
import SmileSwitch from "./src/SmileSwitch";
import Switcher from "./src/Switcher";
import YesNoAnimatedSwitch from "./src/YesNoAnimatedSwitch";

export default function App() {
  const [isOn, setIsOn] = useState(false);

  const handleSwitch = () => {
    setIsOn((d) => !d);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <AnimatedSwitch
            size={100}
            value={isOn}
            handleSwitch={() => handleSwitch()}
            knobColor={"orange"}
            borderColor={"orange"}
            lightModeBg={"white"}
            darkModeBg={"black"}
            borderWidth={2}
            animationSpeed={"fast"}
            elevation={10}
            type
          />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Switcher
            size={100}
            value={isOn}
            handleSwitch={() => handleSwitch()}
            knobColor={"black"}
            borderColor={"black"}
            lightModeBg={"white"}
            darkModeBg={"black"}
            borderWidth={2}
            animationSpeed={"fast"}
            elevation={10}
          />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <OnOffAnimatedSwitch
            size={100}
            value={isOn}
            handleSwitch={() => handleSwitch()}
            knobColor={"orange"}
            borderColor={"orange"}
            indicatorColor={"white"}
            backgroundColor={"white"}
            borderWidth={2}
            animationSpeed={"fast"}
            elevation={10}
          />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <YesNoAnimatedSwitch
            size={100}
            value={isOn}
            handleSwitch={() => handleSwitch()}
            knobColor={"#7e86f7"}
            borderColor={"#7e86f7"}
            offColor={"gray"}
            onColor={"#7e86f7"}
            backgroundColor={"white"}
            borderWidth={2}
            animationSpeed={"fast"}
            elevation={10}
          />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <YesNoAnimatedSwitch
            size={100}
            value={isOn}
            handleSwitch={() => handleSwitch()}
            knobColor={"#7e86f7"}
            borderColor={"#7e86f7"}
            offColor={"gray"}
            onColor={"#7e86f7"}
            backgroundColor={"white"}
            borderWidth={2}
            animationSpeed={"fast"}
            elevation={10}
          />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Switcher
            size={100}
            value={isOn}
            handleSwitch={() => handleSwitch()}
            knobColor={"black"}
            borderColor={"black"}
            lightModeBg={"white"}
            darkModeBg={"black"}
            borderWidth={2}
            animationSpeed={"fast"}
            elevation={10}
          />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <OnOffAnimatedSwitch
            size={100}
            value={isOn}
            handleSwitch={() => handleSwitch()}
            knobColor={"orange"}
            borderColor={"orange"}
            indicatorColor={"white"}
            backgroundColor={"white"}
            borderWidth={2}
            animationSpeed={"fast"}
            elevation={10}
          />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <YesNoAnimatedSwitch
            size={100}
            value={isOn}
            handleSwitch={() => handleSwitch()}
            knobColor={"#7e86f7"}
            borderColor={"#7e86f7"}
            offColor={"gray"}
            onColor={"#7e86f7"}
            backgroundColor={"white"}
            borderWidth={2}
            animationSpeed={"fast"}
            elevation={10}
          />
        </View>
      </View>
    </View>
  );
}
