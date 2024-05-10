import {Navbar} from "./components/ui/Navbar"
import {Home} from "./components/Home"
import {About_me} from "./components/About_me"

const myLinks = [
    { href: "/a", label: "Home" },
    { href: "/b", label: "About Me" },
    { href: "/c", label: "Education" },
    { href: "/d", label: "Project" },
    { href: "/e", label: "Contact" }
  ];

export default function App() {
    return( 
      <>
        <Navbar links={myLinks}/>
        <Home/>
        <About_me/>
      </>
    )
  }