import { Outlet, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Dashboard = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#action1"> <Link to="/">Dashboard</Link> </Nav.Link>
              <Nav.Link href="#action2"><Link to="/home">Home</Link></Nav.Link>
            </Nav>

            <Nav className="me-auto">
              <Navbar.Collapse className="justify-content-center">
                <Navbar.Brand href="#home">
                  <img
                    alt=""
                    src="/images/fab.png"
                    width="60"
                    height="30"
                    className="d-inline-block align-top"
                  />{" "}
                  Fabulo Shopping Cart
                </Navbar.Brand>
              </Navbar.Collapse>
            </Nav>
            <Nav>
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  Cart: <a href="#login">SignIn</a>
                </Navbar.Text>
              </Navbar.Collapse>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};
export default Dashboard;
