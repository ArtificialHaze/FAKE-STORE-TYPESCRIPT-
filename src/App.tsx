import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./Home";
import Store from "./Store";
import About from "./About";
import Navbar from "./Navbar";
import { ShoppingCartContext } from "./ShoppingCartContext";

const App = () => {
  return (
    <>
      <ShoppingCartContext>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </ShoppingCartContext>
    </>
  );
};

export default App;
