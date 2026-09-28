import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Navbar />

      <main>
        <Hero />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;