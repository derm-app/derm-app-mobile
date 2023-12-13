import React from 'react';
import { Text, TextProps } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

interface DCHTextProps extends TextProps {
  animated?: boolean;
  entering?: any;
  exiting?: any;
  ref?: any;
}

export const DCHText: React.FC<DCHTextProps> = ({
  animated,
  entering,
  exiting,
  style,
  ref,
  ...props
}) => {
  if (animated) {
    return (
      <Animated.Text
        ref={ref}
        style={style}
        entering={entering || FadeInDown.duration(1200)}
        exiting={exiting}
        {...props}
      />
    );
  }

  return <Text ref={ref} style={style} {...props} />;
};
