import React, { useEffect, useRef } from "react";
import { Easing, View, Animated } from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler";
import PropTypes from "prop-types";
import MaskedView from "@react-native-community/masked-view";

export default function Switcher({
  value,
  handleSwitch,
  size,
  borderColor,
  borderWidth,
  knobColor,
  animationSpeed,
  elevation,
  darkModeBg,
  lightModeBg,
}) {
  const translateX = useRef(new Animated.Value(0)).current;
  const SIZE = size;
  useEffect(() => {
    Animated.timing(translateX, {
      toValue: value ? 0 : -SIZE * 1,
      duration:
        animationSpeed === "fast"
          ? 200
          : animationSpeed === "medium"
          ? 300
          : 400,
      useNativeDriver: false,
      easing: Easing.in,
    }).start();
  }, [value]);

  const styles = {
    container: {
      width: SIZE * 1,
      backgroundColor: "white",
      height: SIZE * 0.5,
      borderRadius: SIZE * 0.25,
      elevation: elevation ? elevation : null,
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      padding: SIZE * 0.05,
    },
    darkKnob: {
      width: SIZE * 0.34,
      height: SIZE * 0.34,
      backgroundColor: "white",
      borderRadius: SIZE * 0.17,
    },
    lightKnob: {
      width: SIZE * 0.34,
      height: SIZE * 0.34,
      backgroundColor: knobColor,
      borderRadius: SIZE * 0.17,
    },
  };
  return (
    <>
      <TapGestureHandler onHandlerStateChange={(e) => handleSwitch()}>
        {/* <View> */}
        <Animated.View
          style={{
            width: SIZE * 1,
            backgroundColor: "white",
            height: SIZE * 0.5,
            borderRadius: SIZE * 0.25,
            elevation: elevation ? elevation : null,
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: "row",
            transform: [
              {
                scale: translateX.interpolate({
                  inputRange: [-SIZE * 1, -SIZE * 0.5, 0],
                  outputRange: [1, 1.11, 1],
                }),
              },
            ],
          }}
        >
          <MaskedView maskElement={<Animated.View style={styles.container} />}>
            <View style={styles.container}>
              <Animated.View style={styles.lightKnob} />
              <Animated.View
                style={{
                  transform: [
                    {
                      translateX,
                    },
                  ],
                  position: "absolute",
                  width: SIZE * 1,
                  backgroundColor: "black",
                  height: SIZE * 0.6,
                  top: -(SIZE * 0.05),
                  borderRadius: SIZE * 0.5,
                }}
              />
              <Animated.View style={styles.darkKnob} />
            </View>
          </MaskedView>
        </Animated.View>
      </TapGestureHandler>
    </>
  );
}

Switcher.propTypes = {
  value: PropTypes.bool.isRequired,
  handleSwitch: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  knobColor: PropTypes.string,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderWidth: PropTypes.number,
  animationSpeed: PropTypes.string,
  elevation: PropTypes.number,
};

Switcher.defaultProps = {
  size: 100,
  value: false,
  knobColor: "orange",
  borderColor: "orange",
  lightModeBg: "white",
  darkModeBg: "black",
  borderWidth: 2,
  animationSpeed: "fast",
  elevation: 10,
};
