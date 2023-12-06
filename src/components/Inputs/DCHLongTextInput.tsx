import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

type DCHLongTextInputProps = {
  title: string;
  placeholder: string;
  onChangeText: (text: string) => void;
};

export const DCHLongTextInput = (props: DCHLongTextInputProps) => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput
        style={styles.input}
        multiline={true}
        numberOfLines={4}
        placeholder={props.placeholder}
        onChangeText={(text) => setValue(text)}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 8,
  },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 8,
    textAlignVertical: 'top',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CACACA',
  },
});
