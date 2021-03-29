import './App.css';

import React from 'react';
import { ThemeProvider } from 'styled-components';

import { ToastProvider } from './components/ToastProvider';
import { Router } from './containers/Router';
import { AuthProvider } from './context/AuthProvider';
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
