# React Native Weather App

## Install

- `expo init weatherApp`

  - Choose `blank`

- `expo login`

- `yarn start`

## Snack

- Expo Snack is an open-source platform for running React Native apps in the browser. It dynamically bundles and compiles code and runs it in the Expo Client or a web-player.

- `https://snack.expo.dev/@USERNAME/webview`

## The Rules of Native

- `import { StyleSheet, Text, View } from 'react-native';`

- `View` is a container. It is the most fundamental component for building a UI.

- `Text` is a component for displaying text.

- `StyleSheet` provides an abstraction layer similar to CSS stylesheets.

  - With StyleSheet, you create a style object and refer to each style individually. Separating the styles from the render method makes the code easier to understand and promotes reuse of styles across components.

  - `StyleSheet.create(obj: object): object` creates a StyleSheet style reference from the given object.

  - ```jsx
    import { StatusBar } from 'expo-status-bar';
    import React from 'react';
    import { Text, View } from 'react-native';

    export default function App() {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 28, color: 'blue', textAlign: 'center' }}>
            This is React Native Weather App!
          </Text>
          <StatusBar style='auto' />
        </View>
      );
    }
    ```

  - ```jsx
    ...
    import { ..., StyleSheet } from 'react-native';

    export default function App() {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>This is React Native Weather App!</Text>
          <StatusBar style='auto' />
        </View>
      );
    }

    // const styles = {
    // `StyleSheet.create() is not required, but it provides nice autocomplete.
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        fontSize: 28,
        color: 'blue',
        textAlign: 'center',
      },
      // }
    });
    ```

- `StatusBar` is component to control the app status bar.

## Use Third Party Packages

- React Native only provides core components to support and maintain quickly, but they're not enough.

- Expo SDK provides a log of components and it's stable, `https://docs.expo.dev/versions/latest/`

## Layout with Flexbox

- Flexbox works the same way in React Native as it does in CSS on the web, with a few exceptions.

- The defaults are different

  - `flexDirection` defaulting to `column` instead of `row`,

  - `alignContent` defaulting to `flex-start` instead of `stretch`,

  - `flexShrink` defaulting to `0` instead of `1`

  - the `flex parameter` only supporting `a single number`.

- For layout, use `flex` instead of `width` and `height` because they are different depending on the screen of the phone.

  - `flex` will define how your items are going to "fill" over the available space along your main axis. Space will be divided according to each element's flex property.

  - ```
    import React from 'react';
    import { View } from 'react-native';

    export default function App() {
      return (
        <View style={{ flex: 1, padding: 15 }}> // 1 / 1, there is no other sibling.
          <View style={{ flex: 1, backgroundColor: 'tomato' }}></View> // 1 / (1
          + 2 + 1)
          <View style={{ flex: 2, backgroundColor: 'green' }}></View> // 2 / (1 +
          2 + 1)
          <View style={{ flex: 1, backgroundColor: 'gold' }}></View> // 1 / (1 +
          2 + 1)
        </View>
      );
    }
    ```

## Style

- ```jsx
  import { StatusBar } from 'expo-status-bar';
  import React from 'react';
  import { View, Text, StyleSheet } from 'react-native';

  export default function App() {
    return (
      <View style={styles.container}>
        <StatusBar style='dark'></StatusBar>
        <View style={styles.city}>
          <Text style={styles.cityName}>Seoul</Text>
        </View>
        <View style={styles.weather}>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </View>
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
    weather: {
      flex: 3,
    },
    day: {
      flex: 1,
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
  });
  ```

## ScrollView and Dimensions

### ScrollView

- `horizontal`: When true, the scroll view's children are arranged horizontally in a row instead of vertically in a column.

- `pagingEnabled`: When true, the scroll view stops on multiples of the scroll view's size when scrolling. This can be used for horizontal pagination.

- `indicatorStyle`: The style of the scroll indicators. It's only work on `ios`.

  - 'default' same as black.

  - 'black', scroll indicator is black. This style is good against a light background.

  - 'white', scroll indicator is white. This style is good against a dark background.

- `showsHorizontalScrollIndicator`: When true, shows a horizontal scroll indicator.

- `contentContainerStyle`: These styles will be applied to the scroll view content container which wraps all of the child views.

  - ScrollView needs to use `contentContainerStyle` for the style.

### Dimensions

- `Dimensions`: It gets the dimensions.

  - ```js
    const window = Dimensions.get('window');
    const screen = Dimensions.get('screen');

    console.log(window.width);
    ```

- ```jsx
  ...
  import { ..., Dimensions, ScrollView } from 'react-native';

  // const WINDOW_WIDTH = Dimensions.get('window').width;
  const { width: WINDOW_WIDTH } = Dimensions.get('window');

  export default function App() {
    return (
      <View style={styles.container}>
        <StatusBar style='dark'></StatusBar>
        <View style={styles.city}>
          <Text style={styles.cityName}>Seoul</Text>
        </View>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.weather}
        >
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </ScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    ...
    // On ScrollView, `flex: 1` is not working correctly.
    weather: {},
    day: {
      width: WINDOW_WIDTH,
      alignItems: 'center',
    },
    ...
  });
  ```

## Location

- `expo install expo-location`

- `expo-location` allows reading geo-location information from the device. Your app can poll for the current location or subscribe to location update events.

### Get permission

- ```jsx
  import * as Location from 'expo-location';

  export default function App() {
    const [ok, setOk] = useState(true);
    const ask = async () => {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        setOk(false);
      }
    };
    useEffect(() => {
      ask();
    }, []);
  ```

### Get Current Position

- Get the Latitude and Longitude of current location, `Location.getCurrentPositionAsync(LocationOptions)`

  - Requests for one-time delivery of the user's current location. Depending on given `accuracy option` it may take some time to resolve, especially when you're inside a building.

- Get human address from the latitude and longitude, `Location.reverseGeocodeAsync({ latitude, longitude }, { useGoogleMaps: false })`

- ```jsx
  const [city, setCity] = useState('Loading...');

  const ask = async () => {
    ...
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
  };

  <Text style={styles.cityName}>{city}</Text>
  ```

## Weather

- Use Weather API - One Call API, "https://openweathermap.org/api/one-call-api"

  - `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`

    - example, `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}`

  - The One Call API provides the following weather data for any geographical coordinates:

    - Current weather
    - Minute forecast for 1 hour
    - Hourly forecast for 48 hours
    - Daily forecast for 7 days
    - National weather alerts
    - Historical weather data for the previous 5 days

  - Parameters
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Required</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>lat, lon</td>
          <td>required</td>
          <td>Geographical coordinates (latitude, longitude)</td>
        </tr>
        <tr>
          <td>appid</td>
          <td>required</td>
          <td>your unique API key (you can always find it on your account page under the "API key" tab)</td>
        </tr>
        <tr>
          <td>exclude</td>
          <td>optional</td>
          <td>By using this parameter you can exclude some parts of the weather data from the API response. It should be a comma-delimited list (without spaces).<br>
          Available values: `current`, `minutely`, `hourly`, `daily`, `alerts`</td>
        </tr>
        <tr>
          <td>units</td>
          <td>optional</td>
          <td> Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default.</td>
        </tr>
        <tr>
          <td>lang</td>
          <td>optional</td>
          <td>You can use the lang parameter to get the output in your language.</td>
        </tr>
      </tbody>
    </table>

- Display loading, `<ActivityIndicator />`

- ```jsx
  ...
  import { ..., ActivityIndicator } from 'react-native';
  ...
  const API_KEY = '7d91988239d070118da74c34ea13ab33';

  export default function App() {
    ...
    const [days, setDays] = useState([]);
    ...
    const getWeather = async () => {
      ...
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
      );
      const json = await response.json();
      setDays(json.daily);
    };

    ...
    return (
      ...
          {days.length === 0 ? (
            // when you want to use stylesheet with other style, use spread operator(...)
            <View style={{ ...styles.day, justifyContent: 'center' }}>
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
        ...
    );
  }

  const styles = StyleSheet.create({
    ...
    tinyText: {
      fontSize: 20,
    },
  });
  ```

## Icons

- Weather Conditions, `https://openweathermap.org/weather-conditions`

- `@expo/vector-icons` library is installed by default on the template project that get through `expo init` -- it is part of the expo package. It includes popular icon sets and you can browse all of the icons using `icons.expo.fyi`.

  - ```jsx
    import { Fontisto } from '@expo/vector-icons';

    <Fontisto name='cloudy' size={32} color='white' />;
    ```

- Weather Conditions with Icon

  - | Weather      | Icon         |
    | ------------ | ------------ |
    | Thunderstorm | lightning    |
    | Atmosphere   | cloudy-gusts |
    | Drizzle      | rain         |
    | Rain         | rains        |
    | Snow         | snow         |
    | Clear        | day-sunny    |
    | Clouds       | cloudy       |

- ```jsx
  import { Fontisto } from '@expo/vector-icons';
  ...

  const icons = {
    Clouds: 'cloudy',
    Rain: 'rains',
    Snow: 'snow',
    Clear: 'day-sunny',
    Thunderstorm: 'lightning',
    Drizzle: 'rain',
    Atmosphere: 'cloudy-gusts',
  };

  export default function App() {
    ...
    return (
      ...
            days.map((day) => (
              <View style={styles.day} key={day.dt}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Text style={styles.temp}>
                    {parseFloat(day.temp.day).toFixed(1)}
                  </Text>
                  <Fontisto
                    name={icons[day.weather[0].main]}
                    size={40}
                    style={{ marginTop: 50 }}
                  />
                </View>
                <Text style={styles.description}>{day.weather[0].main}</Text>
                <Text style={styles.tinyText}>{day.weather[0].description}</Text>
              </View>
            ))
          ...
  ```
