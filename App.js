import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useState } from "react";
export default function App() {
  const [Note, setNote] = useState("");
  const [ListOfNotes, setListOfNotes] = useState([]);
  function handleOnChangeText(getEnteredText) {
    //console.log(getEnteredText);
    setNote(getEnteredText);
  }

  function handleOnPressButton() {
    setListOfNotes((currentNotes) => [...currentNotes, Note]);
  }

  console.log(Note);
  return (
    <View style={{ padding: 60, paddingHorizontal: 15, flex: 1 }}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleOnChangeText}
          style={styles.input}
          placeholder="Add Your Note Here"
        />
        <Button onPress={handleOnPressButton} color="#000" title="Add Note" />
      </View>

      <View style={styles.listContainer}>
        <ScrollView>
          {ListOfNotes.map((item, index) => (
            <Text style={styles.listItems} key={index}>
              {item}
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    paddingBottom: 30,
    borderBottomWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
  },
  listContainer: { paddingTop: 30, flex: 1 },
  listItems: {
    borderRadius: 1,
    borderColor: "red",
    backgroundColor: "green",
    padding: 20,
    marginBottom: 20,
    color: "#fff",
    fontSize: 20,
  },
});
