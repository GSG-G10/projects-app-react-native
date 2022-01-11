import React, { FC } from "react";
import { View, TextInput } from "react-native";
import { Text } from "../Text";

type InputProps = {
  label: string;
  containerStyle?: object;
  inputStyle?: object;
  onChangeText: (args: any) => void;
  labelStyle: Object;
  keyboardType?: any;
  secureTextEntry?: boolean;
};
export const Input: FC<InputProps> = ({
  labelStyle,
  label,
  containerStyle,
  inputStyle,
  onChangeText,
  keyboardType,
  secureTextEntry,
}) => {
  return (
    <View style={containerStyle}>
      <Text style={labelStyle} value={label} />
      <TextInput
        style={inputStyle}
        onChange={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry || false}
      />
    </View>
  );
};
