import './App.css';

import React from 'react';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './components/AuthProvider';
import { Router } from './components/Router';
import { ToastProvider } from './components/ToastProvider';
import { theme } from './theme';

const App: React.FC = () => (
    <div className="App">
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <Router />
                <ToastProvider />
            </AuthProvider>
        </ThemeProvider>
    </div>
);

export default App;
