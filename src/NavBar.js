import React from "react";
import { Navbar,Container,Nav,NavDropdown,Offcanvas } from "react-bootstrap";

export const NavBar = ()=>{
    return(
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
          <Navbar.Brand>
            <img           
              src="/logo192.png"
              width="35"
              height="33"
              className="image"
            />{' '}
            Numerical Method
          </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />  
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Numerical Medthod</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown
                    title="Root of Equation"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="BisectionMethod">Bisection Method</NavDropdown.Item>
                    <NavDropdown.Item href="FalsePosition">False Position Method</NavDropdown.Item>
                    <NavDropdown.Item href="OnePointIterationMethod">One Point Iteration Method</NavDropdown.Item>
                    <NavDropdown.Item href="NewtonRaphsonMethod">Newton Raphson Method</NavDropdown.Item>
                    <NavDropdown.Item href="SecantMethod">Secant Method</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown
                    title="Linear Algebraic Equation"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="CramersRule">Cramer's Rule Medthod</NavDropdown.Item>
                    <NavDropdown.Item href="GaussElimination">Gauss Elimination Method</NavDropdown.Item>
                    <NavDropdown.Item href="MatrixInversion">Matrix Inversion Method</NavDropdown.Item>
                    <NavDropdown.Item href="JacobiIteration">Jacobi Iteration Method</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Gauss Seidel Iteration Method</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Conjugate Gradient Method</NavDropdown.Item>
                  </NavDropdown>
                </Nav>                              
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}