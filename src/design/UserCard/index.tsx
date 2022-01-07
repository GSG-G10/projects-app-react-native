import React, { FC } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "../Image";
import { Text } from "../Text";

type UserCardProps = {
  username: string;
  projectName: string;
  time: string;
  onPress: () => void;
  imageUri?: string;
};

export const UserCard: FC<UserCardProps> = ({
  username,
  projectName,
  time,
  onPress,
  imageUri,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Image
            style={styles.avatar}
            height={58}
            width={58}
            uri={imageUri ? imageUri : undefined}
          />
          <View>
            <Text value={username} h4 />
            <Text value={projectName} p style={styles.projectName} />
          </View>
        </View>
        <Text value={time} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    paddingHorizontal: 30,
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    borderRadius: 50,
  },
  projectName: {
    color: "gray",
  },
});
