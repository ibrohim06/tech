import "./App.css";
import Case from "./page/case";
import Footer from "./page/footer";
import Navbar from "./page/navbar";
import Product from "./page/products";
import Showcase from "./page/showcase";
import Tech from "./page/tech";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <Case />
      <Product />
      <Tech />
      <Footer />
    </div>
  );
}

export default App;
