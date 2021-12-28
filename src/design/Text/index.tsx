import React, { FC } from "react";
import { Text as RNEText } from "react-native-elements";

type TextComponentProps = {
  value: String;
  style?: Object;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  p?: boolean;
};
export const Text: FC<TextComponentProps> = ({
  value,
  ...rest
}: TextComponentProps) => <RNEText {...rest}>{value}</RNEText>;
