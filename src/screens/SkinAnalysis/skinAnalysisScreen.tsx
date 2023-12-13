import { useTheme } from '../../hooks/useTheme';
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LineChart } from 'react-native-chart-kit'; // Assuming you're using this library for the graph
import { DCHView } from '../../components/Views/DCHView';

export const SkinAnalysisScreen = () => {
  const { ColorPallet, TextTheme, Buttons } = useTheme();
  const skinType = 'Oily';
  const problems = ['Acne', 'Blackheads', 'Visible pores'];

  const recommendations = [
    'Use non-comedogenic products to prevent blocked pores.',
    'Consider using a daily moisturizer suitable for oily skin types.',
    'Exfoliate regularly to remove dead skin cells and prevent acne.',
    // Add more recommendations as needed
  ];

  return (
    <DCHView type='primary' blurLevel={5} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120, paddingHorizontal: 16 }}
      >
        <View style={styles.section}>
          <Text style={TextTheme.headingOne}>Skin Analysis</Text>
          <Text style={TextTheme.normalLight}>
            Your skin is your largest organ and it's important to take care of
            it. Our skin analysis tool will help you understand your skin better
            and provide you with recommendations on how to take care of it.
          </Text>
          <Text style={TextTheme.normalLight}>
            Skin Type: <Text style={TextTheme.labelTitle}>{skinType}</Text>
          </Text>
          <Text style={TextTheme.headingFour}>Problems:</Text>
          {problems.map((problem, index) => (
            <Text
              key={index}
              style={TextTheme.normalLight}
            >{`• ${problem}`}</Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={TextTheme.headingThree}>Skin Health Score</Text>
          <Text style={TextTheme.normalLight}>
            Your skin health score is a number between 0 and 100 that represents
            how healthy your skin is. The higher the number, the healthier your
            skin is.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={TextTheme.headingThree}>Recommendations</Text>
          <View style={styles.cardContainer}>
            {recommendations.map((recommendation, index) => (
              <View
                key={index}
                style={[
                  styles.card,
                  {
                    shadowColor: ColorPallet.grayscale.black,
                    backgroundColor: ColorPallet.brand.primaryLight,
                  },
                ]}
              >
                <Text style={TextTheme.normal}>{recommendation}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={TextTheme.headingThree}>Skin Products</Text>
          {/* List skin products here */}
          <Text style={TextTheme.normalLight}>
            Here are some products that we recommend for your skin type:
          </Text>
        </View>

        <TouchableOpacity style={Buttons.primary}>
          <Text style={TextTheme.normal}>Reanalyze Skin</Text>
        </TouchableOpacity>
      </ScrollView>
    </DCHView>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingBottom: 36,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  cardContainer: {
    marginTop: 10,
  },
  card: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.1,
    elevation: 3,
  },
});
