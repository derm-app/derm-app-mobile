import React from 'react';
import {
  TouchableOpacity,
  Text,
  ViewStyle,
  StyleProp,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import type { Buttons } from '../../theme/theme';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  type?: Buttons;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

export const Button: React.FC<CustomButtonProps> = ({
  title,
  type = 'primary',
  style,
  disabled,
  ...props
}) => {
  const { Buttons, ButtonText } = useTheme();

  const styles = StyleSheet.create({
    primary: {
      ...Buttons.primary,
    },
    primaryDisabled: {
      ...Buttons.primaryDisabled,
    },
    primaryText: {
      ...ButtonText.primaryText,
    },
    secondary: {
      ...Buttons.secondary,
    },
    secondaryDisabled: {
      ...Buttons.secondaryDisabled,
    },
    secondaryText: {
      ...ButtonText.secondaryText,
    },
    critical: {
      ...Buttons.critical,
    },
    criticalText: {
      ...ButtonText.criticalText,
    },
  });

  const getButtonStyle = () => {
    switch (type) {
      case 'secondary':
        return disabled ? styles.secondaryDisabled : styles.secondary;
      case 'critical':
        return styles.critical;
      default:
        return disabled ? styles.primaryDisabled : styles.primary;
    }
  };

  const getButtonTextStyle = () => {
    switch (type) {
      case 'secondary':
        return styles.secondaryText;
      case 'critical':
        return styles.criticalText;
      default:
        return styles.primaryText;
    }
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[getButtonStyle(), style]}
      {...props}
    >
      <Text style={getButtonTextStyle()}>{title}</Text>
    </TouchableOpacity>
  );
};
