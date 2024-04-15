import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { TitleView } from './TitleView';

export enum ContentTheme {
  dark = 'DARK',
  light = 'LIGHT',
}

type Props = {
  contentTheme?: ContentTheme;
  scrollable?: boolean;
  contentContainerStyle?: ScrollView['props']['contentContainerStyle'];
  style?: View['props']['style'];
  edges?: ['top' | 'right' | 'bottom' | 'left'];
  scrollStyle?: View['props']['style'];
  children: React.ReactNode;
  title?: string;
};

export const DCHView: React.FC<Props> = ({
  contentTheme = ContentTheme.dark,
  scrollable = false,
  contentContainerStyle,
  scrollStyle,
  children,
  style,
  title,
}) => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        style,
        {
          backgroundColor:
            contentTheme === ContentTheme.light ? 'white' : '#ccc',
        },
      ]}
      edges={['top', 'bottom']}
    >
      {scrollable ? (
        <ScrollView
          contentContainerStyle={
            contentContainerStyle ? contentContainerStyle : {}
          }
          style={[styles.container, styles.contentContainer, scrollStyle]}
        >
          {title ? (
            <TitleView
              title={title}
              dark={contentTheme === ContentTheme.dark}
            />
          ) : null}
          {children}
        </ScrollView>
      ) : (
        <>
          <View style={styles.contentContainer}>
            {title ? <TitleView title={title} /> : null}
            {scrollable ? null : children}
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});
