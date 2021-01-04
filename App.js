import React, { useState } from "react";
import { View } from "react-native";
import DarkModeSwitch from "./DarkMoodSwitch";

export default function App() {
  const [isOn, setIsOn] = useState(false);

  const handleSwitch = () => {
    setIsOn((d) => !d);
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <DarkModeSwitch
        size={100}
        value={isOn}
        handleSwitch={handleSwitch}
        knobColor={"orange"}
        borderColor={"orange"}
        backgroundColor={"black"}
        tintColor={"red"}
        borderWidth={2}
        animationSpeed={"fast"}
        elevation={10}
      />
    </View>
  );
}
