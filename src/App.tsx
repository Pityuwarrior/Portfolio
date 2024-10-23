import {Navbar} from "./components/ui/Navbar"
import {Home} from "./components/Home"
import {About_me} from "./components/About_me"
import {Skills} from "./components/Skills"
import {Projects} from "./components/Projects"
import {Contact} from "./components/Contact"
import { ScrollAnimation } from "./utils/ScrollAnimation"

const myLinks = [
  { href: "home", label: "Home" },
  { href: "about_me", label: "About Me" },
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Project" },
  { href: "contact", label: "Contact" }
];



export default function App() {
    return( 
      <>
        <Navbar links={myLinks}/>
        <Home/>
        <About_me/>
        <Skills/>
        <Projects/>
        <Contact/>
        <ScrollAnimation/>
      </>
    )
  }
