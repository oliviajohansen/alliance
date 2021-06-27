import React, { useState } from "react";
import { Button, Image, View, StyleSheet, Text, TextInput } from "react-native";

const View_Profile = ({ route, navigation }) => {
  const { username } = route.params;
  const [name, setName] = useState(username);
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");
  const [industry, setIndustry] = useState("");
  const [interests, setInterests] = useState("");

  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.profilePic}
          source={{
            uri: "https://miro.medium.com/max/2560/1*Ar1FqCuQ6sMSWWDYcN7n2Q.jpeg",
          }}
        ></Image>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.field}
            onChangeText={(text) => setName(text)}
            defaultValue={name}
            editable={false}
          />
        </View>
        <View>
          <Text style={styles.label}>Country</Text>
          <TextInput
            style={styles.field}
            onChangeText={(text) => setCountry(text)}
            placeholder="Select your country"
            defaultValue={country}
            editable={false}
          />
          {/* <IndustryList /> */}
        </View>
        <View>
          <Text style={styles.label}>Bio</Text>
          <TextInput
            style={styles.field}
            onChangeText={(text) => setBio(text)}
            defaultValue={bio}
            editable={false}
          />
        </View>
        <View>
          <Text style={styles.label}>Industry</Text>
          <TextInput
            style={styles.field}
            onChangeText={(text) => setIndustry(text)}
            placeholder="Select your industry"
            defaultValue={industry}
            editable={false}
          />
        </View>
        <View>
          <Text style={styles.label}>Interests</Text>
          <TextInput
            style={styles.field}
            onChangeText={(text) => setInterests(text)}
            placeholder="Select your interests"
            defaultValue={interests}
            editable={false}
          />
        </View>
        <View style={styles.complete}>
          <Button
            onPress={() => navigation.navigate("Chat", { screen: "Chat Room" })}
            color="#fff"
            title="Buddy Up"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
  },
  field: {
    marginBottom: 15,
    borderWidth: 1,
    height: 40,
    width: 300,
    borderRadius: 8,
    borderColor: "#AAB0B7",
    paddingLeft: 10,
  },
  label: {
    textAlign: "left",
    color: "#71787E",
    marginLeft: 3,
    marginBottom: 2,
  },
  back: {
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  profilePic: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  complete: {
    backgroundColor: "#D96258",
    borderRadius: 8,
    borderColor: "#D96258",
    width: 300,
    height: 40,
  },
});

export default View_Profile;
