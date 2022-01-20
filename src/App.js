import Navbar from "./components/navbar.js";
import Header from "./components/header.js";
import About from "./components/about.js";
import Education from "./components/education";
import Services from "./components/services";
import Works from "./components/works";
import Footer from "./components/footer";


function App() {
  return (
    <>
  <div id="fh5co-hero-carousel" class="carousel slide header" data-ride="carousel">
    
    <Navbar />
    <Header />

   </div>

   <About />

   <Education />
   <Services />
   <Works />
   <Footer />






</>
 
  );
}

export default App;
