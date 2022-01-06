import React, { FC } from "react";
import { Icon as RNEIcon } from "react-native-elements";

type ButtonsComponentProps = {
  onPress?: () => void;
  iconName: string;
  color: string;
  style?: object;
  raised: boolean;
};

export const Icon: FC<ButtonsComponentProps> = ({
  onPress,
  iconName,
  color,
  raised,
  ...rest
}) => (
  <RNEIcon
    raised={raised}
    name={iconName}
    type="ant-design"
    color={color}
    onPress={onPress}
    {...rest}
  />
);
