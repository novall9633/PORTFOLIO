import About from "../modules/About";
import Contact from "../modules/Contact";
import Experience from "../modules/Experience";
import Home from "../modules/Home";
import NavBar from "../modules/NavBar";
import Portfolio from "../modules/Portfolio";
import SocialLinks from "../modules/SocialLinks";

export function Main() {
    return (
        <div>
            <NavBar />
            <Home />
            <About />
            <Portfolio />
            <Experience />
            <Contact />
            <SocialLinks />
        </div>
    );
}
