import { FC } from "react";
// eslint-disable-next-line import/namespace
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "../Text";
import { Icon } from "../Icon";

type CardProps = {
  title: string;
  price: string;
  icon: string;
  status: string;
  onPress: () => void;
};

type Colors = {
  [key: string]: string;
};

const iconColors: Colors = {
  Cancelled: "#cf000f",
  "In Progress": "#e69138",
  Complete: "#009944",
  "Estimate Sent": "#63c0df",
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 5,
    width: "90%",
    height: 150,
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    color: "#32343b",
  },
  statusContainer: {
    flexDirection: "row",
    height: "50%",
    alignItems: "center",
  },
  statusText: {
    color: "#ced1d8",
    paddingHorizontal: 10,
    fontSize: 20,
  },
});

export const Card: FC<CardProps> = ({
  title,
  price,
  icon,
  status,
  onPress,
}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.header}>
      <Text value={title} h4 style={styles.headerText} />
      <Text value={price} h4 style={styles.headerText} />
    </View>
    <View style={styles.statusContainer}>
      <Icon iconName={icon} color={iconColors[status]} raised={false} />
      <Text value={status} style={styles.statusText} />
    </View>
  </TouchableOpacity>
);
