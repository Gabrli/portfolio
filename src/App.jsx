import { useState, useCallback } from "react"
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"
import { themeContext } from "./contexts/themeContext"
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import SectionHeader from "./components/SectionsHeader/sectionHeader";
import About from "./components/About/about";
import ProjectList from "./components/Projects/projectsList";
import Footer from "./components/Footer/footer";

function App() {
  const [theme, setTheme] = useState("dark")

  const particlesInit = useCallback(async engine => {
 
    await loadSlim(engine);
}, []);
const particlesLoaded = useCallback(async container => {
  await console.log(container);
}, []);
 
  return (
    <>
    <themeContext.Provider value={theme}>
    
    <Header setTheme={setTheme} theme={theme}/>
    <Hero/>
    <SectionHeader content="About me "/>
    <About/>
    <SectionHeader content="My Portfolio"/>
    <ProjectList/>
    <Footer/>
    
    
    
    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen:{
                    enable: true,
                    zIndex: -1
                },
                background: {
                    color: {
                        value: theme === "dark" ? "#111" : "#f2f2f2",
                    },
                },
                fpsLimit: 120,
                
                particles: {
                    color: {
                        value: theme === "dark" ? "#ffffff" : "#111",
                    },
                    links: {
                        color: theme === "dark" ? "#ffffff" : "#111",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                      type: "circle",
                  },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    
    
    </themeContext.Provider>
    </>
     
  )
}

export default App
