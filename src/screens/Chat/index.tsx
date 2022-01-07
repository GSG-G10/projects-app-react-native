import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon, Input, Text, Image } from "../../design";
import { UserCard } from "../../design/UserCard";

const fakeUsers = [
  {
    username: "Ahmad Sabbah",
    projectName: "Project1",
    time: "5:36",
  },
  {
    username: "Mohamed",
    projectName: "Project2",
    time: "13:05",
  },
  {
    username: "Sami",
    projectName: "Project3",
    time: "20:16",
  },
  {
    username: "Ahmad ",
    projectName: "Project4",
    time: "10:45",
  },
];
export const ChatScreen = ({ navigation }: { navigation: any }) => {
  const [searchInput, setSearchInput] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [searchVisable, setSearchVisable] = useState(false);
  const [users, setUsers] = useState(fakeUsers);

  const searchVisiblity = () => setSearchVisable(!searchVisable);

  const sendSearchRequest = () => {
    const newUsers = users.filter((ele) => ele.username.includes(searchInput));
    setUsers(newUsers);
    setSearchVisable(false);
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text value={"Messages"} h2 />
        <Icon
          color="gray"
          iconName="search1"
          raised={false}
          onPress={searchVisiblity}
        />
      </View>
      <View
        style={{
          ...styles.searchContainer,
          display: searchVisable ? "flex" : "none",
        }}
      >
        <Input
          label="Search"
          onChangeText={({ nativeEvent: { text } }) => setSearchInput(text)}
          labelStyle={{ fontSize: 18 }}
          inputStyle={{ backgroundColor: "#fff" }}
          containerStyle={{ width: "60%", height: 100 }}
        />
        <Icon
          color="gray"
          iconName="search1"
          raised={false}
          onPress={sendSearchRequest}
        />
        <Icon
          color="gray"
          iconName="closecircleo"
          raised={false}
          onPress={searchVisiblity}
        />
      </View>

      <View>
        {users?.map((ele) => (
          <UserCard
            key={ele.time}
            username={ele.username}
            projectName={ele.projectName}
            time={ele.time}
            onPress={() => navigation.navigate("Messages", { user: ele })}
            imageUri={`https://robohash.org/${ele.username.trim()}`}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
