import './App.css';

import React from 'react';

import { AuthProvider } from './components/AuthProvider';
import { Router } from './components/Router';
import { ToastProvider } from './components/ToastProvider';

const App: React.FC = () => (
    <div className="App">
        <AuthProvider>
            <Router />
            <ToastProvider />
        </AuthProvider>
    </div>
);

export default App;
