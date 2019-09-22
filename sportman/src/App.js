import React from 'react';
import './App.css';
import {goToExercisePage} from "./navigation";
import { useState } from 'react';

export function Routing({currentPage, setCurrentPage}) {
    if (currentPage === "Home Page") {
        return (
            <div data-testid="home-page" className="App">
                <h1>Sport Manager</h1>
                <h2>You can launch the app and do this quick set of exercises nearly anywhere with no special
                    equipment.</h2>
                <button onClick={() => setCurrentPage(goToExercisePage())} type="button">Start</button>
            </div>
        );

    } else if (currentPage === "EXERCISE 1") {
        return (
            <div data-testid="exercice-page">
                <h1>Exercise 1</h1>
                <h2>exercise description.</h2>
            </div>
        )
    }
}

function App() {
    const [currentPage, setCurrentPage] = useState("Home Page");
    return <Routing currentPage={currentPage} setCurrentPage={setCurrentPage} />;
}

export default App;
