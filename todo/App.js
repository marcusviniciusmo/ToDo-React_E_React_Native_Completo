import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './src/views/Home';

// Desabilita os alertas
console.disableYellowBox = true;

export default function App() {
  return <Home />
}
