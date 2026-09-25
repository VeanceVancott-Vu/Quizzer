import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Audio } from "expo-av";

type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
};

const questions: Question[] = [
  {
    question: "React Native was written in which language?",
    options: ["Java", "Swift", "JavaScript", "Kotlin"],
    correctAnswer: 2,
  },
  {
    question: "What is Expo?",
    options: [
      "CSS library",
      "Framework that makes building React Native apps easier",
      "Photo editing app",
      "Web browser",
    ],
    correctAnswer: 1,
  },
  {
    question: "What hook is used to manage state?",
    options: ["useState", "useFetch", "useClass", "useRender"],
    correctAnswer: 0,
  },
  {
    question: "What is Flexbox used for?",
    options: [
      "Managing APIs",
      "Aligning layout",
      "Managing audio",
      "Creating animation effects",
    ],
    correctAnswer: 1,
  },
];

const playSound = async (soundFile: number) => {
  const { sound } = await Audio.Sound.createAsync(soundFile);
  await sound.playAsync();

  sound.setOnPlaybackStatusUpdate((status: any) => {
    if (status.isLoaded && status.didJustFinish) {
      sound.unloadAsync();
    }
  });
};

export default function App() {
  const [start, setStart] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const progress = (currentIndex + 1) / questions.length;

  const handleAnswer = (index: number) => {
    const isCorrect = index === questions[currentIndex].correctAnswer;

    if (isCorrect) {
      playSound(require("../assets/sounds/ding-sound-effect_2.mp3"));
      setScore((prev) => prev + 1);
    } else {
      playSound(require("../assets/sounds/rizz-sound-effect.mp3"));
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setStart(false);
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {!start && !showResult && (
        <View style={styles.centerView}>
          <Text style={styles.title}>Quiz App</Text>
          <Text style={styles.subtitle}>Check your React Native knowledge!</Text>

          <TouchableOpacity style={styles.startButton} onPress={() => setStart(true)}>
            <Text style={styles.startText}>Start</Text>
          </TouchableOpacity>
        </View>
      )}

      {start && !showResult && (
        <View style={styles.quizContainer}>
          <View style={styles.progressWrapper}>
            <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
          </View>

          <Text style={styles.questionCount}>
            Question {currentIndex + 1}/{questions.length}
          </Text>

          <Text style={styles.questionText}>
            {questions[currentIndex].question}
          </Text>

          {questions[currentIndex].options.map((option, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.optionButton}
              onPress={() => handleAnswer(idx)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {showResult && (
        <View style={styles.centerView}>
          <Text style={styles.title}>Result</Text>
          <Text style={styles.scoreText}>
            You got {score}/{questions.length} correct!
          </Text>

          <TouchableOpacity style={styles.startButton} onPress={restartQuiz}>
            <Text style={styles.startText}>Restart Quiz</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#f1f5f9",
    marginBottom: 12,
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  quizContainer: {
    flex: 1,
    padding: 20,
  },
  progressWrapper: {
    height: 12,
    backgroundColor: "#334155",
    borderRadius: 8,
    marginBottom: 20,
  },
  progressBar: {
    height: 12,
    backgroundColor: "#3b82f6",
    borderRadius: 8,
  },
  questionCount: {
    color: "#cbd5e1",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  questionText: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: "#1e293b",
    padding: 14,
    marginVertical: 8,
    borderRadius: 10,
  },
  optionText: {
    color: "#f1f5f9",
    fontSize: 16,
    textAlign: "center",
  },
  startButton: {
    backgroundColor: "#3b82f6",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  startText: {
    color: "#f8fafc",
    fontSize: 18,
    fontWeight: "bold",
  },
  scoreText: {
    fontSize: 22,
    marginBottom: 20,
    color: "#facc15",
    fontWeight: "bold",
  },
});
