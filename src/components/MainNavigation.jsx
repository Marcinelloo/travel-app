import "../index.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import data from "../data/walutyData.json";

import { BsSun, BsSunFill } from "react-icons/bs";

const MainNavigation = () => {
  const [colorMode, setColorMode] = useState("light");
  const [language, setLanguage] = useState("PL");
  const [currency, setCurrency] = useState("PLN");

  return (
    <>
      <Navbar bg={colorMode}>
        <Container>
          <Navbar.Brand href={`#${language}`}>
            <span
              style={{ color: "#A93226", fontWeight: "bold", fontSize: "40px" }}
            >
              Tra
            </span>
            <span
              style={{ color: "#76448A", fontWeight: "bold", fontSize: "40px" }}
            >
              vel
            </span>
            <span
              style={{
                color: "#1F618D ",
                fontWeight: "bold",
                fontSize: "40px",
              }}
            >
              UN
            </span>
            <span
              style={{ color: "#B7950B", fontWeight: "bold", fontSize: "40px" }}
            >
              ION
            </span>
          </Navbar.Brand>
          <Nav className="justify-content-end flex-grow-1 p-3">
            <NavDropdown align="end" title={language} id="dropdown-1">
              <NavDropdown.Item
                href={`#${language}`}
                onClick={() => setLanguage("PL")}
              >
                PL
              </NavDropdown.Item>
              <NavDropdown.Item
                href={`#${language}`}
                onClick={() => setLanguage("EN")}
              >
                EN
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown align="end" title={currency} id="dropdown-2">
              <Container>
                {data.map((element, _id) => {
                  return (
                    <NavDropdown.Item
                      key={_id}
                      onClick={() => setCurrency(element.name)}
                    >
                      {element.name} -{" "}
                      {language === "PL" ? element.PL : element.EN}
                    </NavDropdown.Item>
                  );
                })}
              </Container>
            </NavDropdown>
          </Nav>
          {colorMode === "light" ? (
            <BsSunFill onClick={() => setColorMode("dark")} />
          ) : (
            <BsSun onClick={() => setColorMode("light")} />
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavigation;
