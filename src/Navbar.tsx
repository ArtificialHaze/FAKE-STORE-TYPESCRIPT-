import {
  Navbar as NavbarBootStrap,
  Container,
  Nav,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useGlobalContext } from "./ShoppingCartContext";

const Navbar = () => {
  const { openCart, cartQuantity } = useGlobalContext();

  return (
    <NavbarBootStrap sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to={"/"} as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to={"/store"} as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to={"/about"} as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            variant="outline-primary"
            className="rounded-circle"
            style={{ width: "3rem", height: "3rem", position: "relative" }}
          >
            <AddShoppingCartIcon />
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%,25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBootStrap>
  );
};

export default Navbar;
