import Navbar from "./components/navbar/Navbar";
import Hero from "./components/navbar/hero/Hero";
import Find from "./components/find/Find"
import Driver from "./components/driver/Driver";
import Luxury from "./components/Luxury/Luxury";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Find/>
      <Driver/>
      <Luxury/>
      <Footer/>
    </div>
  );
}

export default App;
