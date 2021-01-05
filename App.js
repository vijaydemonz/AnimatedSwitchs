import React, { useState } from "react";
import { View } from "react-native";
import { AnimatedSwitch } from "react-native-animated-switch";

export default function App() {
  const [isOn, setIsOn] = useState(false);

  const handleSwitch = () => {
    setIsOn((d) => !d);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
      />
    </View>
  );
}
