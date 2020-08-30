import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './src/views/Home';
import Task from './src/views/Task';

// Desabilita os alertas
console.disableYellowBox = true;

export default function App() {
  return <Task />
}
