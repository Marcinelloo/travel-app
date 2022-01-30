import React from "react";
import { useState } from "react";
import Dropdown from "react-bootstrap/esm/Dropdown";
import Container from "react-bootstrap/esm/Container";
import data from "../data/krajeData.json";

import OfferCountry from "./OfferCountry";

const OffersList = ({ country, dateFrom, dateBack }) => {
  const [sortBy, setSortBy] = useState("sortuj");

  return (
    <>
      <div style={{ backgroundColor: "#FBFBFB" }}>
        <Container
          style={{
            marginTop: "3%",
            paddingBottom: "3%",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Najciekawsze wycieczki w {country}</h2>

            <Dropdown
              align={{ lg: "end" }}
              style={{ marginRight: "3%", marginTop: "1%" }}
            >
              <Dropdown.Toggle variant="outline-dark" id="dropdown">
                Sortuj wg:
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ borderRadius: "20px" }}>
                <Dropdown.Item onClick={() => setSortBy("alfabetycznie")}>
                  alfabetycznie
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy("niealfabetycznie")}>
                  niealfabetycznie
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy("cenaRosnaco")}>
                  cena rosnaco
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy("cenaMalejaco")}>
                  cena malejaco
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy("ocena")}>
                  ocena
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy("iloscDni")}>
                  ilosc dni
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy("rabat")}>
                  rabat
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy("iloscOpini")}>
                  ilosc opini
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy("gwiazdki")}>
                  gwiazdki
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {data.map((data) => {
            if (data.kraj === country) {
              return data.lokalizacje.map((data, _id) => {
                return (
                  <div key={_id}>
                    <h3 style={{ marginTop: "4%", marginLeft: "2%" }}>
                      Miasto: {data.miasto}
                    </h3>
                    <Container
                      style={{
                        display: "grid",
                        justifyContent: "center",
                      }}
                    >
                      <OfferCountry data={data.wycieczki} sort={sortBy} />
                    </Container>
                  </div>
                );
              });
            }
            return "";
          })}
        </Container>
      </div>
    </>
  );
};

export default OffersList;
