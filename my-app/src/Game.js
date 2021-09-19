import React from 'react';
import logo from './logo.svg';
import './App.css';

// Router Init
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import Components
import CardGrid from './components/CardGrid';
import Navigation from './components/Navigation';
import Chessboard from './components/board.js';

function Game() {
    return (
        <div className="App">
            <Router>
                <Navigation />
            </Router>
            <Chessboard />
        </div>
    );
}

export default Game;