import React, { useEffect, useRef } from "react";
import { Easing, View, Animated, Text } from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";

export default function GradientSwitch({
  value,
  onChange,
  size,
  borderColor,
  borderWidth,
  knobColor,
  animationSpeed,
  elevation,
  indicatorColor = "white",
  backgroundColor = "white",
}) {
  const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);
  const translateX = useRef(new Animated.Value(0)).current;
  const SIZE = size;
  useEffect(() => {
    Animated.timing(translateX, {
      toValue: value ? SIZE * 1.05 : 0,
      duration:
        animationSpeed === "fast"
          ? 100
          : animationSpeed === "medium"
          ? 200
          : 500,
      useNativeDriver: false,
      easing: Easing.in,
    }).start();
  }, [value]);
  const styles = {
    container: {
      width: SIZE * 1,
      backgroundColor,
      height: SIZE * 0.5,
      borderRadius: SIZE * 0.25,
      elevation: elevation ? elevation : null,
      justifyContent: "center",
      alignItems: "flex-start",
      padding: SIZE * 0.05,
    },
    moonLayer: {
      transform: [
        { translateX: translateX },
        {
          rotate: translateX.interpolate({
            inputRange: [0, SIZE * 0.9],
            outputRange: ["0deg", "-45deg"],
          }),
        },
      ],
      opacity: translateX.interpolate({
        inputRange: [SIZE * 0.4, SIZE * 0.5, SIZE * 0.7],
        outputRange: [0, 0, 1],
      }),
      width: SIZE * 0.4,
      height: SIZE * 0.25,
      backgroundColor,
      borderBottomLeftRadius: SIZE * 0.2,
      borderBottomRightRadius: SIZE * 0.2,
      borderTopRightRadius: SIZE * 0.05,
      zIndex: 10,
      top: SIZE * 0.09,
      marginLeft: SIZE * -0.45,
      position: "absolute",
    },
    knob: {
      transform: [
        {
          translateX: translateX.interpolate({
            inputRange: [0, SIZE * 1.05],
            outputRange: [0, SIZE * 0.5],
          }),
        },
        {
          scaleX: translateX.interpolate({
            inputRange: [0, SIZE * 0.5, SIZE * 1.05],
            outputRange: [1, 2, 1],
          }),
        },
      ],
      elevation: 11,
      justifyContent: "center",
      alignItems: "center",
      width: SIZE * 0.4,
      height: SIZE * 0.4,
      backgroundColor: "white",
      borderRadius: SIZE * 0.2,
    },
  };
  return (
    <>
      <TapGestureHandler onHandlerStateChange={(e) => onChange()}>
        <AnimatedGradient colors={["#777", "#434343"]} style={styles.container}>
          <Animated.View style={styles.knob} />
          <View
            style={{
              position: "absolute",
              justifyContent: "center",
              alignItems: "flex-end",
              padding: SIZE * 0.15,
              alignSelf: "flex-end",
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "monospace",
                fontWeight: "bold",
              }}
            >
              OFF
            </Text>
          </View>
          <AnimatedGradient
            colors={["#38ef7d", "#11998e"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={[
              styles.container,
              {
                opacity: translateX.interpolate({
                  inputRange: [0, SIZE * 1],
                  outputRange: [0, 1],
                }),
                padding: SIZE * 0.15,
                position: "absolute",
                justifyContent: "center",
                alignItems: "flex-start",
              },
            ]}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "monospace",
                fontWeight: "bold",
              }}
            >
              ON
            </Text>
          </AnimatedGradient>
        </AnimatedGradient>
      </TapGestureHandler>
    </>
  );
}

GradientSwitch.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  knobColor: PropTypes.string,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderWidth: PropTypes.number,
  animationSpeed: PropTypes.string,
  elevation: PropTypes.number,
};

GradientSwitch.defaultProps = {
  size: 100,
  value: false,
  knobColor: "orange",
  borderColor: "orange",
  activeColor: "white",
  inActiveColor: "black",
  borderWidth: 2,
  animationSpeed: "fast",
  elevation: 10,
};
