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
