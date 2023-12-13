import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

type Props = {
  type: 'primary' | 'secondary';
  blurLevel?: number;
  scrollable?: boolean;
  contentContainerStyle?: ScrollView['props']['contentContainerStyle'];
  style?: View['props']['style'];
  edges?: ['top' | 'right' | 'bottom' | 'left'];
  scrollStyle?: View['props']['style'];
  children: React.ReactNode;
};

export const DCHView: React.FC<Props> = ({
  type = 'primaryBackground.png',
  blurLevel = 0,
  scrollable = false,
  contentContainerStyle,
  scrollStyle,
  children,
  style,
}) => {
  const getImage = () => {
    switch (type) {
      case 'primary':
        return require('../../../assets/primaryBackground.png');
      case 'secondary':
        return require('../../../assets/dermcarebg.png');
      default:
        return require('../../../assets/primaryBackground.png');
    }
  };

  const getBlurLevel = () => {
    return blurLevel * 10;
  };

  return (
    <SafeAreaView style={[styles.container, style]} edges={['top']}>
      <Image
        source={getImage()}
        style={{
          width: '120%',
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          position: 'absolute',
        }}
        blurRadius={getBlurLevel()}
      />
      {scrollable ? (
        <ScrollView
          contentContainerStyle={
            contentContainerStyle ? contentContainerStyle : {}
          }
          style={[styles.container, styles.contentContainer, scrollStyle]}
        >
          {children}
        </ScrollView>
      ) : (
        <>
          <Image
            source={getImage()}
            style={{
              flex: 1,
              width: '130%',
              height: '130%',
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
              position: 'absolute',
            }}
            blurRadius={getBlurLevel()}
          />
          <View style={styles.contentContainer}>
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
