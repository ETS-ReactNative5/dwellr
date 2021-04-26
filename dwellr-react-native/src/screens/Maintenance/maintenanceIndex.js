import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import NativeForms from "native-forms";

const Maintenance = () => {
  const [hasForm, showForm] = useState(false);
  const show = () => showForm(true);
  const hide = () => showForm(false);

  return (
    <View style={styles.container}>
      <Text>NativeForms.com</Text>

      <Button title="Show Form" onPress={show} color="#47c9ba" />

      {hasForm && (
        <NativeForms
          form="https://my.nativeforms.com/o3YkhjRr1jZmglN4AlZH1Db"
          onClose={hide}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Maintenance;

