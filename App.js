import { View, Text, TextInput, Button, StyleSheet } from "react-native";
export default function App() {
  return (
    <View style={{ padding: 60 }}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Add Your Note Here" />
        <Button color="#000" title="Add Note" />
      </View>
      <View>
        <Text>Show Lists Here!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
  },
});
