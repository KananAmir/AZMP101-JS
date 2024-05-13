import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Contact from "./components/Contact";
import Form from "./components/Form";
import HeroSection from "./components/Hero";
import Input from "./components/Input";
import ProductCard from "./components/ProductCard";
import Products from "./components/Products";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

function App() {
  return (
    <>
      <Header />
      <Products />
      {/* <HeroSection /> */}
      {/* <Card /> */}
      {/* <hr /> */}
      {/* <Button /> */}
      {/* <hr /> */}
      {/* <button className="btn">Click</button> */}
      {/* <Input type={"password"} bg={"teal"} />
      <Input type={"search"} bg={"orange"} />
      <Input type={"text"} /> */}

      <h1 className="text-3xl font-bold underline text-slate-500 hover:text-blue-600">
        Hello world!
      </h1>
      <h3>Contact Section</h3>
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
