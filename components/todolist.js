import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";

import Todo from "../components/todo";

const TodoList = () => {
  const [title, setTitle] = useState("WELCOME TO TODO LIST");
  const [text, setText] = useState("");
  const [list, setList] = useState(["Add Item"]);

  //Add Item Method
  const addItem = () => {
    const updatedList = list;
    updatedList.push(text);
    setList(updatedList);
    setText("");
  };

  // Delete Item methods
  const deleteItem = (index) => {
    const updatedList = list.filter((todo) => todo !== index);
    setList(updatedList);
    console.log(updatedList);
  };

  //Update Item Method
  const updateItem = (index) => {
    const updatedItem = list.filter((todo) => todo !== index);
    setList(updatedItem);
    setText(index);
    console.log(index);
    console.log(updatedItem);
  };
  return (
    <View style={{ width: "80%", height: "40%" }}>
      <Text style={(styles.align, styles.font)}>{title}</Text>
      <ScrollView>
        {list.map((x, index) => (
          <Todo
            key={index}
            item={x}
            index={index}
            delete={deleteItem}
            update={updateItem}
          />
        ))}
      </ScrollView>
      <View>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Button
          style={styles.button}
          title="Add Item"
          onPress={() => setList(addItem)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  align: {
    alignSelf: "center",
  },
  font: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    borderRadius: 5,
    borderWidth: 8,
    padding: 8,
  },
  button: {},
});

export default TodoList;
