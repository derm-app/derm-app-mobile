import { FC } from 'react';
import { DCHText } from '../Text';
import { FadeInLeft } from 'react-native-reanimated';
import { TextTheme } from '../../theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform } from 'react-native';
import { ContentTheme } from './DCHView';

type TitleViewType = {
  title: string;
  dark?: boolean;
};

export const TitleView: FC<TitleViewType> = ({ title, dark }) => {
  const { top } = useSafeAreaInsets();

  return (
    <DCHText
      animated
      entering={FadeInLeft.duration(1200)}
      style={[
        dark ? TextTheme.headingOneLight : TextTheme.headingOne,
        {
          marginTop: Platform.OS === 'ios' ? top : 59,
          marginBottom: 16,
        },
      ]}
    >
      {title}
    </DCHText>
  );
};
