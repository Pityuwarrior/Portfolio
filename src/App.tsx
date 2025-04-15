import {Navbar} from "./components/ui/Navbar"
import {Home} from "./components/Home"
import {About_me} from "./components/About_me"
import {Skills} from "./components/Skills"
import {Contact} from "./components/Contact"
import { ScrollAnimation } from "./utils/ScrollAnimation"
import { Footer } from "./components/ui/Footer"

const myLinks = [
  { href: "home", label: "Home" },
  { href: "about_me", label: "About Me" },
  { href: "skills", label: "Skills" },
  { href: "contact", label: "Contact" }
];


export default function App() {
    return( 
      <>
        <Navbar links={myLinks}/>
        <Home/>
        <About_me/>
        <Skills/>
        <Contact/>
        <Footer/>
        <ScrollAnimation/>
      </>
    )
  }
