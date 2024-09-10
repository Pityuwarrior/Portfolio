import {Navbar} from "./components/ui/Navbar"
import {Home} from "./components/Home"
import {About_me} from "./components/About_me"
import {Education} from "./components/Education"
import {Projects} from "./components/Projects"
import {Contact} from "./components/Contact"

const myLinks = [
  { href: "home", label: "Home" },
  { href: "about_me", label: "About Me" },
  { href: "projects", label: "Project" },
  { href: "contact", label: "Contact" }
];



export default function App() {
    return( 
      <>
        <Navbar links={myLinks}/>
        <Home/>
        <About_me/>
        <Projects/>
        <Contact/>
      </>
    )
  }