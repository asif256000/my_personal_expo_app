import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

function NavBar() {}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function NavBar() {
  return (
    <View style={navStyles.container}>
      <View style={navStyles.tabContainer}>
        <View style={navStyles.tab}>
          <Text style={navStyles.tabText}>Home</Text>
        </View>
        <View style={navStyles.tab}>
          <Text style={navStyles.tabText}>Profile</Text>
        </View>
        <View style={navStyles.tab}>
          <Text style={navStyles.tabText}>Settings</Text>
        </View>
      </View>
    </View>
  );
}

const navStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f5f5f5",
    paddingTop: 10,
    paddingBottom: 10,
  },
  tabContainer: {
    flexDirection: "row",
  },
  tab: {
    flex: 1,
    alignItems: "center",
  },
  tabText: {
    fontSize: 18,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
