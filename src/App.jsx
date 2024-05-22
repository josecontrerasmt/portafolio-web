import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Proyectos from "./Components/Proyectos";
import Habilidades from "./Components/Habilidades";
import About from "./Components/About";
import Footer from "./Components/Footer";

function App() {
  
  return (
    <div className="w-full min-h-screen overflow-auto">
      <NavBar />
      <Header />
      <main className="md:container md:max-w-5xl m-auto px-6 mt-12 mb-20 text-white">
        <Proyectos/>
        <Habilidades/>
        <About/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
