import Hero from "../../components/Hero/Hero"
import About from "../../components/About/About"
import Project from "../../components/Project/Project"
import Services from "../../components/Services/Services"

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Project />
      <Services />
    </div>
  ) 
}
export default Home