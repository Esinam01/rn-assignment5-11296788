import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../screens/ThemeContext';

const Home = () => {
  const { colors } = useTheme();
  useEffect(() => {
    console.log('Home rendered with colors:', colors);
  }, [colors]);

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Image source={require('../assets/profile.png')} style={styles.profileImage} />
        <TouchableOpacity style={styles.searchButton}>
          <Image source={require('../assets/search.png')} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>Welcome back,</Text>
        <Text style={[styles.title1, { color: colors.text }]}>Eric Atsu</Text>
        
        <View style={styles.mastercardContainer}>
          <Image source={require('../assets/Card.png')} style={styles.mastercardImage} />
        </View>

        <View style={styles.featuresRow}>
          <TouchableOpacity style={styles.feature}>
            <View style={styles.featureIconBackground}>
              <Image source={require('../assets/send.png')} style={styles.featureIcon} />
            </View>
            <Text style={[styles.featureText, { color: colors.text }]}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.feature}>
            <View style={styles.featureIconBackground}>
              <Image source={require('../assets/receive.png')} style={styles.featureIcon} />
            </View>
            <Text style={[styles.featureText, { color: colors.text }]}>Receive</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.feature}>
            <View style={styles.featureIconBackground}>
              <Image source={require('../assets/loan.png')} style={styles.featureIcon} />
            </View>
            <Text style={[styles.featureText, { color: colors.text }]}>Loan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.feature}>
            <View style={styles.featureIconBackground}>
              <Image source={require('../assets/topUp.png')} style={styles.featureIcon} />
            </View>
            <Text style={[styles.featureText, { color: colors.text }]}>Topup</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.transactionRow}>
          <Text style={[styles.transactionText, { color: colors.text }]}>Transactions</Text>
          <TouchableOpacity>
            <Text style={[styles.seeAllText, { color: colors.primary }]}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.additionalInfo}>
          <View style={styles.infoColumn}>
            <View style={styles.logoBackground}>
              <Image source={require('../assets/apple.png')} style={styles.logo} />
            </View>
            <Text style={[styles.storeText, { color: colors.text }]}>Apple Store</Text>
          </View>
          <Text style={[styles.amountText, { color: colors.text }]}>-$5.99</Text>
        </View>
        <Text style={[styles.entertainmentText, { color: colors.text }]}>Entertainment</Text>

        <View style={styles.additionalInfo}>
          <View style={styles.infoColumn}>
            <View style={styles.logoBackground}>
              <Image source={require('../assets/spotify.png')} style={styles.logo} />
            </View>
            <Text style={[styles.storeText, { color: colors.text }]}>Spotify</Text>
          </View>
          <Text style={[styles.amountText, { color: colors.text }]}>-$12.99</Text>
        </View>
        <Text style={[styles.musicText, { color: colors.text }]}>Music</Text>

        <View style={styles.additionalInfo}>
          <View style={styles.infoColumn}>
            <View style={styles.logoBackground}>
              <Image source={require('../assets/moneyTransfer.png')} style={styles.logo} />
            </View>
            <Text style={[styles.storeText, { color: colors.text }]}>Money Transfer</Text>
          </View>
          <Text style={[styles.amountText, { color: colors.text }]}>-$300</Text>
        </View>
        <Text style={[styles.transactionText1, { color: colors.text }]}>Transaction</Text>

        <View style={styles.additionalInfo}>
          <View style={styles.infoColumn}>
            <View style={styles.logoBackground}>
              <Image source={require('../assets/grocery.png')} style={styles.logo} />
            </View>
            <Text style={[styles.storeText, { color: colors.text }]}>Grocery</Text>
          </View>
          <Text style={[styles.amountText, { color: colors.text }]}>-$88</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  searchButton: {
    padding: 10,
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: '#FAF9F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    width: 35,
    height: 35,
    tintColor: 'black',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '200',
    marginBottom: 5,
    color: 'gray',
  },
  title1: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mastercardContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  mastercardImage: {
    width: '90%',
    height: 700,
    aspectRatio: 2,
    borderRadius: 10,
  },
  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  feature: {
    alignItems: 'center',
  },
  featureIconBackground: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FAF9F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  featureIcon: {
    width: 35,
    height: 35,
  },
  featureText: {
    fontSize: 16,
  },
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  transactionText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  additionalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoColumn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoBackground: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FAF9F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  logo: {
    width: 30,
    height: 30,
  },
  storeText: {
    fontSize: 25,
    flex: 1,
    textAlign: 'left',
  },
  amountText: {
    fontSize: 15,
  },
  entertainmentText: {
    fontSize: 15,
    textAlign: 'left',
    color: 'gray',
    marginBottom: 10,
    marginLeft: 60,
  },
  musicText: {
    fontSize: 15,
    textAlign: 'left',
    color: 'gray',
    marginBottom: 10,
    marginLeft: 60,
  },
  transactionText1: {
    fontSize: 15,
    textAlign: 'left',
    color: 'gray',
    marginBottom: 10,
    marginLeft: 60,
  },
});

export default Home;
