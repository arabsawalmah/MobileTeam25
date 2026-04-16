import React from "react";
import { Text, View } from "react-native";
import HomePageStyles from "@/constants/HomePageStyles";

interface StepProps {
  title: string;
  active?: boolean;
  done?: boolean;
}

export default function Step({ title, active, done }: StepProps) {
  const circleStyle = [
    HomePageStyles.circle,
    active && { backgroundColor: "#1E3A8A" },
    done && { backgroundColor: "#22C55E" },
  ];

  return (
    <View style={HomePageStyles.step}>
      <View style={circleStyle} />
      <Text>{title}</Text>
    </View>
  );
}
