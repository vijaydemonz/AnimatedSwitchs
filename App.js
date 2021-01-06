import React, { useState } from "react";
import { View } from "react-native";
import { AnimatedSwitch } from "react-native-animated-switch";
import DarkModeSwitch from "./src/DarkMoodSwitch";
import GradientSwitch from "./src/GradientSwitch";
import OnOffAnimatedSwitch from "./src/ZeroOneSwitch";
import SliderSwitch from "./src/SliderSwitch";
import SpringSwitch from "./src/SpringSwitch";
import Switcher from "./src/Switcher";
import SwitcherFullStrech from "./src/SwitcherFullStrech";
import YesNoAnimatedSwitch from "./src/YesNoAnimatedSwitch";
import ZeroOneSwitch from "./src/ZeroOneSwitch";

export default function App() {
  const [isOn, setIsOn] = useState(false);

  const onChange = () => {
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
          <DarkModeSwitch
            size={100}
            value={isOn}
            animationSpeed={"fast"}
            elevation={10}
            activeColor={"white"}
            inActiveColor={"black"}
            borderWidth={2}
            onChange={() => onChange()}
            knobColor={"orange"}
            borderColor={"orange"}
          />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Switcher
            size={100}
            value={isOn}
            onChange={onChange}
            activeColor={"black"}
            inActiveColor={"white"}
            borderWidth={2}
            animationSpeed={"fast"}
            elevation={10}
          />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ZeroOneSwitch
            size={100}
            value={isOn}
            onChange={() => onChange()}
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
            onChange={() => onChange()}
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
          <SpringSwitch
            size={100}
            value={isOn}
            onChange={() => onChange()}
            activeColor={"#11998e"}
            inActiveColor={"#cb2d3e"}
          />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <SwitcherFullStrech
            size={100}
            value={isOn}
            onChange={() => onChange()}
            activeColor={"white"}
            inActiveColor={"black"}
            animationSpeed={"fast"}
            elevation={10}
          />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <GradientSwitch
            size={100}
            value={isOn}
            onChange={() => onChange()}
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
          <SliderSwitch
            size={100}
            value={isOn}
            onChange={() => onChange()}
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
