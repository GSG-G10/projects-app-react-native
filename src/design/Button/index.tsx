import { FC } from "react";
import { Button as RNEButton } from "react-native-elements";
import { StyleSheet } from "react-native";


type ButtonProps = {
  title: string;
  containerStyle?: object;
  buttonStyle?: object;
  titleStyle?: object;
  loading: boolean;
  onPress: () => void;
};
export const Button: FC<ButtonProps> = ({
  title,
  containerStyle,
  buttonStyle,
  titleStyle,
  loading,
  onPress,
}) => {
  return (
    <RNEButton
      title={title}
      titleStyle={titleStyle || styles.titleStyle}
      containerStyle={containerStyle || styles.containerStyle}
      buttonStyle={buttonStyle || styles.buttonStyle}
      loading={loading}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: "700",
  },
  containerStyle: {
    width: 180,
  },
  buttonStyle: {
    backgroundColor: "rgba(90, 154, 230, 1)",
    height: 60,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 4,
  },
});
