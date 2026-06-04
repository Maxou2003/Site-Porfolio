import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/HeaderSection/Header';
import About from './components/AboutSection/About';
import Projects from './components/ProjectsSection/Projects';
import CV from './components/CvSection/CV';
import Contact from './components/ContactSection/Contact';
import Footer from './components/FooterSection/Footer';
import './App.css';
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [githubUser, setGithubUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubUser = async () => {
      try {
        const response = await fetch('/api/github/user');
        const data = await response.json();
        setGithubUser(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des infos GitHub:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubUser();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Header githubUser={githubUser} />
      <About />
      <Projects />
      <CV />
      <Contact githubUser={githubUser} />
      <Footer />
      <Analytics/>
    </div>
  );
}

export default App;
