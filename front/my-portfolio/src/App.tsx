import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';


export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router basename="/PORTFOLIO">   {/* <-- FIXED HERE */}
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />

        <GlobalStyles
          styles={{
            "html, body, #root": {
              margin: 0,
              padding: 0,
              height: "100%",
              background: "transparent",
            },
            body: {
              backgroundColor: "transparent !important",
            },
          }}
        />

        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <main style={{ flex: 1, paddingBottom: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </ThemeProvider>
    </Router>
  );
}