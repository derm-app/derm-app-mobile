import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

type DCHLongTextInputProps = {
  title: string;
  dark: boolean;
  placeholder: string;
  onChangeText: (text: string) => void;
};

export const DCHLongTextInput = (props: DCHLongTextInputProps) => {
  const [value, setValue] = useState('');
  const { TextTheme, ColorPallet } = useTheme();

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          props.dark ? TextTheme.normalLight : TextTheme.normal,
        ]}
      >
        {props.title}
      </Text>
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: props.dark
              ? ColorPallet.grayscale.darkGrey
              : ColorPallet.grayscale.white,
          },
        ]}
        multiline={true}
        numberOfLines={4}
        placeholderTextColor={
          props.dark ? ColorPallet.grayscale.white : ColorPallet.brand.text
        }
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
    padding: 8,
    textAlignVertical: 'center',
    borderRadius: 12,
  },
});
