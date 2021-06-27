import React from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Label,
  TouchableOpacity,
  Icon,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Home = ({ navigation }) => (
  <View style={styles.home}>
    <View style={styles.center}>
      <Text style={styles.title}>alliance</Text>
    </View>
    <View style={styles.body}>
      <Text style={styles.header2}>Buddy Up</Text>
      <View style={styles.buddyUpSection}>
        <TouchableOpacity
          style={styles.col}
          onPress={() => navigation.navigate("Buddy Up Industry")}
        >
          <Ionicons
            name={"ios-briefcase-outline"}
            size={40}
            color={"#D96258"}
          />
          <Text>By Industry</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.col}
          onPress={() => navigation.navigate("Buddy Up Interest")}
        >
          <Ionicons name={"ios-heart-outline"} size={40} color={"#D96258"} />
          <Text>By Interest</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.col}
          onPress={() => navigation.navigate("Buddy Up Country")}
        >
          <Ionicons name={"ios-globe-outline"} size={40} color={"#D96258"} />
          <Text>By Origin</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginBottom: 20,
        }}
      />
      <Text style={styles.header2}>alliance Academy</Text>
      <Text style={styles.text}>
        You've beaten 67% of users this week! Learn more and win more points!
      </Text>
      <View style={styles.image}>
        <Image style={styles.stats} source={require("./67.png")} />
      </View>
      <View style={styles.learnMoreButton}>
        <TouchableOpacity
          style={styles.learnMore}
          onPress={() => navigation.navigate("Alliance Academy")}
        >
          <Text style={styles.learnMoreText}>Learn More</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginBottom: 110,
        }}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 50,
    //backgroundColor: "#F7F7F9",
  },
  center: {
    justifyContent: "center",
    flexDirection: "row",
    paddingBottom: 20,
  },
  body: {
    padding: 10,
  },
  header2: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  buddyUpSection: {
    backgroundColor: "#F7F7F9",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
  home: {
    backgroundColor: "#FFFFFF",
  },
  col: {
    // flexDirection: "column",
    // justifyContent: "center",
  },
  text: {
    paddingTop: 10,
    paddingLeft: 20,
  },
  image: {
    justifyContent: "center",
    flexDirection: "row",
  },
  stats: {
    height: 200,
    width: 200,
    marginBottom: 10,
  },
  learnMoreButton: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
  },
  learnMore: {
    backgroundColor: "#D96258",
    color: "#FFFFFF",
    height: 45,
    width: 250,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  learnMoreText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default Home;
