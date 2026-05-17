import { Routes, Route, useLocation, useEffect } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Projects } from "./components/Projects/Projects";
import { ThemeProvider } from "./components/Theme/ThemeContext";
import { Footer } from "./components/Footer/Footer";
import { LinkProvider } from "./components/Navbar/ChosenLinkContext";
import { ContactUs } from "./components/ContactUs/ContactUs";
import { ThemeChangingFooter } from "./components/Footer/ThemeChangingFooter";

function App() {
  const location = useLocation();

  // Change favicon based on browser theme (light/dark mode)
  useEffect(() => {
    const updateFavicon = () => {
      const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const faviconHref = isDarkMode
        ? "./src/assets/favicon-dark.svg"
        : "./src/assets/favicon-light.svg";
      
      let favicon = document.querySelector("link[rel='icon']");
      if (!favicon) {
        favicon = document.createElement("link");
        favicon.rel = "icon";
        favicon.type = "image/svg+xml";
        document.head.appendChild(favicon);
      }
      favicon.href = faviconHref;
    };

    updateFavicon();

    // Listen for browser theme changes
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    darkModeQuery.addEventListener("change", updateFavicon);

    return () => darkModeQuery.removeEventListener("change", updateFavicon);
  }, []);
  return (
    <div className="whole-app">
      <ThemeProvider>
        <LinkProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
        </Routes>
        {location.pathname === "/contact-us" ? <ThemeChangingFooter /> : <Footer />}
        </LinkProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
