import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import Animated, {
  useDerivedValue,
  SharedValue,
  withSpring,
  useAnimatedProps,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { HEIGHT, MIN_LEDGE, Side, WIDTH } from "@/configs/constants";
import { Vector } from "react-native-redash";
import MaskedView from "@react-native-community/masked-view";

const AnimatedPath = Animated.createAnimatedComponent(Path);

interface WaveProps {
  side: Side;
  children: React.ReactElement;
  position: Vector<SharedValue<number>>;
  isTransitioning: SharedValue<boolean>;
}

export default function Wave({
  side,
  children,
  position,
  isTransitioning,
}: WaveProps) {
  const R = useDerivedValue(() => {
    const value = Math.min(position.x.value - MIN_LEDGE, WIDTH / 2.5);
    return value > 0 ? value : MIN_LEDGE;
  });
  const ledge = useDerivedValue(() => {
    const baseLedge = Math.max(0, position.x.value - MIN_LEDGE - R.value);
    return withSpring(isTransitioning.value ? position.x.value : baseLedge, {
      stiffness: 200,
    });
  });

  const animatedProps = useAnimatedProps(() => {
    const stepY = position.x.value - MIN_LEDGE;
    const stepX = R.value / 2;
    const C = stepY * 0.5522847498;

    // Safeguard each point calculation to avoid NaN
    const p1x = ledge.value;
    const p1y = position.y.value - 2 * stepY;

    const p2x = p1x + stepX;
    const p2y = p1y + stepY;

    const p3x = p2x + stepX;
    const p3y = p2y + stepY;

    const p4x = p3x - stepX;
    const p4y = p3y + stepY;

    const p5x = p4x - stepX;
    const p5y = p4y + stepY;

    const d = [
      "M 0 0",
      `H ${p1x}`,
      `V${p1y}`,
      `C ${p1x} ${p1y + C} ${p2x} ${p2y} ${p2x} ${p2y}`,
      `C ${p2x} ${p2y} ${p3x} ${p3y - C} ${p3x} ${p3y}`,
      `C ${p3x} ${p3y + C} ${p4x} ${p4y} ${p4x} ${p4y}`,
      `C ${p4x} ${p4y} ${p5x} ${p5y - C} ${p5x} ${p5y}`,
      `V ${HEIGHT}`,
      `H 0`,
      "Z",
    ];

    return {
      d: d.join(" "),
    };
  });

  const maskElement = (
    <Svg
      style={[
        StyleSheet.absoluteFill,
        {
          transform: [{ rotateY: side === Side.RIGHT ? "180deg" : "0deg" }],
        },
      ]}
    >
      <AnimatedPath
        fill={
          Platform.OS === "android"
            ? children.props.slide.color
            : children.props.color
        }
        animatedProps={animatedProps}
      />
    </Svg>
  );

  const androidStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: isTransitioning.value
            ? withTiming(0)
            : side === Side.RIGHT
            ? WIDTH - ledge.value
            : -WIDTH + ledge.value,
        },
      ],
    };
  });

  if (Platform.OS === "android") {
    return (
      <View style={StyleSheet.absoluteFill}>
        {maskElement}
        <Animated.View style={[StyleSheet.absoluteFill, androidStyle]}>
          {children}
        </Animated.View>
      </View>
    );
  }

  return (
    // @ts-ignore
    <MaskedView style={StyleSheet.absoluteFill} maskElement={maskElement}>
      {children}
    </MaskedView>
  );
}
