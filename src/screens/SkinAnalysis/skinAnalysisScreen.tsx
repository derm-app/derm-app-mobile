import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { LineChart } from 'react-native-chart-kit'; // Assuming you're using this library for the graph
import { theme } from '../../theme/theme'; // Import the the

const SkinAnalysisScreen = () => {
  // Sample data, replace with your actual data
  const skinType = 'Oily';
  const problems = ['Acne', 'Blackheads', 'Visible pores'];
  
  const recommendations = [
    'Use non-comedogenic products to prevent blocked pores.',
    'Consider using a daily moisturizer suitable for oily skin types.',
    'Exfoliate regularly to remove dead skin cells and prevent acne.'
    // Add more recommendations as needed
  ];

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <View style={styles.section}>
        <Text style={theme.TextTheme.headingOne}>Skin Analysis</Text>
        <Text style={theme.TextTheme.normalLight}>
          Your skin is your largest organ and it's important to take care of it.
          Our skin analysis tool will help you understand your skin better and
          provide you with recommendations on how to take care of it.
        </Text>
        <Text style={theme.TextTheme.normalLight}>Skin Type: {skinType}</Text>
        <Text style={theme.TextTheme.headingFour}>Problems:</Text>
        {problems.map((problem, index) => (
          <Text key={index} style={theme.TextTheme.normalLight}>{`- ${problem}`}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={theme.TextTheme.headingThree}>Skin Health Score</Text>
        <Text style={theme.TextTheme.normalLight}>
          Your skin health score is a number between 0 and 100 that represents
          how healthy your skin is. The higher the number, the healthier your
          skin is.
        </Text>
      </View>

      <View style={styles.section}>
            <Text style={theme.TextTheme.headingThree}>Recommendations</Text>
            <View style={styles.cardContainer}>
              {recommendations.map((recommendation, index) => (
                <View key={index} style={styles.card}>
                  <Text style={theme.TextTheme.normal}>{recommendation}</Text>
                </View>
              ))}
        </View>
          </View>

      <View style={styles.section}>
        <Text style={theme.TextTheme.headingThree}>Skin Products</Text>
        {/* List skin products here */}
        <Text style={theme.TextTheme.normalLight}>
            Here are some products that we recommend for your skin type:
            </Text>
            
      </View>

      <TouchableOpacity style={theme.Buttons.primary}>
        <Text style={theme.TextTheme.normal}>Reanalyze Skin</Text>
      </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    padding: 16,
    marginBottom: 20,
    
  },
  container: {
    flex: 1,
    backgroundColor: theme.ColorPallet.brand.primaryBackground,
    marginBottom: 100
  },
  section: {
    marginBottom: 20,
  },
  safeArea: {
    flex: 1,
    backgroundColor: theme.ColorPallet.brand.primaryBackground,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  cardContainer: {
    marginTop: 10,
  },
  card: {
    backgroundColor: theme.ColorPallet.brand.primaryLight,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: theme.ColorPallet.grayscale.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.1,
    elevation: 3, // for Android shadow
  },
});

export default SkinAnalysisScreen;
