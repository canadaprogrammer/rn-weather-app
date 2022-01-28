import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const API_KEY = '7d91988239d070118da74c34ea13ab33';

export default function App() {
  const [city, setCity] = useState('Loading...');
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    setDays(json.daily);
  };

  useEffect(() => {
    getWeather();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style='dark'></StatusBar>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        {days.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator color='white' size='large' />
          </View>
        ) : (
          days.map((day) => (
            <View style={styles.day} key={day.dt}>
              <Text style={styles.temp}>
                {parseFloat(day.temp.day).toFixed(1)}
              </Text>
              <Text style={styles.description}>{day.weather[0].main}</Text>
              <Text style={styles.tinyText}>{day.weather[0].description}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'violet',
  },
  city: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 46,
    fontWeight: '600',
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  temp: {
    marginTop: 50,
    fontSize: 100,
    fontWeight: '700',
  },
  description: {
    marginTop: -20,
    fontSize: 40,
  },
  tinyText: {
    fontSize: 20,
  },
});
