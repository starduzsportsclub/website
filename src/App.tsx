import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Ticketer from './pages/Ticketer/Ticketer';
import Header from './components/Header/Header';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ticketer" element={<Ticketer />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
