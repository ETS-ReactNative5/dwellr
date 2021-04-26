import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import NativeForms from "native-forms";
import styles from './maintenanceStyles';

const Maintenance = () => {
  const [hasForm, showForm] = useState(false);
  const show = () => showForm(true);
  const hide = () => showForm(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Maintenance Request Form </Text>

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

export default Maintenance;

