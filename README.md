## Animated Switchs

This npm is to help react native developers animating and customizing switchs for both ios and android devices.

| **props**      | **default** | **type**              | **description**                   | **reqired** |
| -------------- | ----------- | --------------------- | --------------------------------- | ----------- |
| Size           | 100         | number                | size of switch in pixels          | yes         |
| value          | false       | bool                  | state of switch                   | yes         |
| handleSwitch   | null        | func                  | onChange funtion for switch       | yes         |
| darkModeBg     | black       | string(hex color/rgb) | nightmode color                   | no          |
| lightModeBg    | white       | string(hex color/rgb) | day mode color                    | no          |
| borderColor    | orange      | string(hex color/rgb) | border color of switch            | no          |
| borderWidth    | orange      | string(hex color/rgb) | border width of switch            | no          |
| elevation      | 10          | number                | to add shadow to switch if needed | no          |
| knobColor      | orange      | string(hex color/rgb) | knob color                        | yes         |
| animationSpeed | fast        | `fast;medium;slow`    | animation speed of transition     | no          |

## Demo

![demo](https://raw.githubusercontent.com/vijaydemonz/AnimatedSwitchs/AnimatedSwitches/demo.gif)

### Installation

```javascript
npm i react-native-animated-switch
```

### Importing

```javascript
import { AnimatedSwitch } from "react-native-animated-switch";
```

### Usage example

```javascript
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
        handleSwitch={handleSwitch}
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
```
