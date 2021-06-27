import React from "react";
import {
  ScrollView,
  View,
  Image,
  SectionList,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  DImensions,
} from "react-native";
import { AllianceAcademyData } from "../data";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Alliance_academy = () => (
  <ScrollView style={styles.container}>
    <View style={styles.account}>
      <Text style={styles.name}>Suzan Winterson</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://eriehouse.org/wp-content/uploads/2020/02/SW-Headshot-e1582832304774.jpg",
        }}
        style={styles.profilePic}
      />
    </View>
    <SectionList
      sections={AllianceAcademyData}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  account: {
    flexDirection: "row",
  },
  name: {
    fontSize: 55,
    fontWeight: "bold",
    justifyContent: "center",
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    justifyContent: "center",
  },

  item: {
    backgroundColor: "#D96258",
    padding: 10,
    marginVertical: 8,
  },
  header: {
    fontSize: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default Alliance_academy;
