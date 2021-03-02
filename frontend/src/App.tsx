import React from 'react';

import { Router } from './components/Router';
import { AuthProvider } from './components/AuthProvider';
import { ToastProvider } from './components/ToastProvider';

import './App.css';

const App: React.FC = () => (
    <div className="App">
        <AuthProvider>
            <Router />
            <ToastProvider />
        </AuthProvider>
    </div>
);

export default App;
