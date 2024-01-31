import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";

function Home() {
  return <h2>Home</h2>;
}

function Projects() {
  return <h2>Projects</h2>;
}

function Skills() {
  return <h2>Skills</h2>;
}

function Resume() {
  return <h2>Resume</h2>;
}

function App() {
  return (
    <Router>
      <Navbar />
      
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
        <Route path="/resume" component={Resume} />
      
    </Router>
  );
}

export default App;
