import { useEffect } from 'react'
import './App.css'
import { AboutMe } from './components/AboutMe'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Projects } from './components/Projects'
import axios from 'axios'
import { useState } from 'react'


function App() {

  const username = 'Brunno-costa27'
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        setProjects(response.data);
        // setLoading(false);
      } catch (err) {
        // setError(err);
        // setLoading(false);
      }
    };

    fetchProjects();
  }, [username]);

  console.log(projects)

  return (
    <>
      <Header />
      <Main />
      <AboutMe />
      <Projects  projects={projects}/>
    </>
  )
}

export default App
