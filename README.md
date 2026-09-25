# 🧠 Quizzler App

[![React Native](https://img.shields.io/badge/React_Native-v0.81.5-61DAFB?style=flat-square&logo=react)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-v54.0.25-000000?style=flat-square&logo=expo)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.9.2-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

**Quizzler** is an interactive, modern mobile & web quiz application built with **React Native**, **Expo Router**, and **TypeScript**. Test your React Native knowledge through multiple-choice questions with instant sound feedback, progress tracking, and score summary!

---

## 🌟 Key Features

- **🎮 Dynamic Quiz Experience**: Start screen, animated progress tracking, questions with 4 option choices, and a final score summary.
- **🔊 Instant Audio Feedback**: Uses `expo-av` to play distinct sound effects for correct (ding) and incorrect answers.
- **📊 Real-time Progress Bar**: Visual progress indicator that updates dynamically as you answer questions.
- **🔄 Replayability**: Reset and restart the quiz at any time to improve your score.
- **🎨 Sleek Dark Theme**: Clean, responsive layout designed using Flexbox and dark mode UI palette (`#0f172a` Slate).
- **📱 Cross-Platform**: Optimized for Android, iOS, and Web environments.

---

## 🎯 Learning Objectives

- **Core Components**: Master React Native primitives such as `View`, `Text`, `TouchableOpacity`, `SafeAreaView`, and `StyleSheet`.
- **State Management**: Utilize React `useState` hooks to manage current question index, total score, quiz state machine (start, playing, finished), and progress calculations.
- **Multimedia Integration**: Learn to asynchronously load and play sound assets using `expo-av` (`Audio.Sound.createAsync`).
- **Responsive Layouts**: Apply Flexbox techniques for consistent UI scaling across diverse screen dimensions.
- **TypeScript Integration**: Strong typing for quiz questions, choices, and state interfaces.

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: [Expo SDK 54](https://expo.dev/) / [React Native 0.81](https://reactnative.dev/)
- **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/)
- **Audio Engine**: `expo-av`
- **Language**: TypeScript & React 19
- **Styling**: React Native `StyleSheet` with dark mode UI design

---

## 📂 Project Structure

```text
Quizzler-main/
├── app/
│   └── index.tsx          # Main Quiz application view & logic
├── assets/
│   ├── images/            # Image assets
│   └── sounds/            # Sound effects (.mp3)
│       ├── ding-sound-effect_2.mp3  # Correct answer audio
│       └── rizz-sound-effect.mp3    # Incorrect answer audio
├── components/            # Reusable UI components
├── constants/             # App constants & styling tokens
├── hooks/                  # Custom React hooks
├── package.json           # Project dependencies & scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo Go](https://expo.dev/go) app on iOS / Android (for physical device testing) or an Emulator.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/VeanceVancott-Vu/Quizzler.git
   cd Quizzler-main
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   # Start Expo dev server
   npm start

   # Run on Web
   npm run web

   # Run on Android Emulator
   npm run android

   # Run on iOS Simulator
   npm run ios
   ```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.