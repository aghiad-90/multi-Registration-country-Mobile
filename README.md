# Overview

This Mobile app is designed to support users from different countries with a seamless multi-language experience. It provides the flexibility to switch between languages, making the app accessible to a diverse user base.

# Features
* Multi-Language Support: The app supports multiple languages, allowing users to choose their preferred language for a personalized experience.
* Country-Specific Content: Tailor content based on the user's country, ensuring relevant information is presented to enhance user engagement.
* Easy Language Switching: Users can effortlessly switch between languages within the app, providing a user-friendly experience.
* unique input validation based on the Country.
* Country Theme based.

# Countries supported: 

```
1- UAE
2- Egypt
3- India
4- Spain 
```


# This App integrated with Firebase as backend as a service for two features:

```
1- Authentication
2- Cloud Messaging. 

```

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android
 navigate to the project folder and run:
```bash
yarn
cd android/
./gradlew clean
```

### and use Android Studio for build the Android project. 
Preffered Android Studio : Android Studio Hedgehog | 2023.1.1 Patch 1

### For iOS
please run these commands:

```bash
yarn 
cd ios/
pod install
```

### Please use Xcode for build the IOS project. 
Preffered Xcode : 15.2
