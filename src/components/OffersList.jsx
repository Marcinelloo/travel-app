import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import data from "../data/krajeData.json";

import OfferCountry from "./OfferCountry";

const OffersList = ({ country, dateFrom, dateBack }) => {
  return (
    <>
      <div style={{ backgroundColor: "#FBFBFB" }}>
        <Container
          style={{
            marginTop: "3%",
          }}
        >
          <h2>Najciekawsze wycieczki w {country}</h2>
          {data.map((data) => {
            if (data.kraj === country) {
              return data.lokalizacje.map((data, _id) => {
                return (
                  <Container
                    key={_id}
                    style={{
                      marginTop: "4%",
                      display: "grid",
                    }}
                  >
                    <h3>Miasto: {data.miasto}</h3>
                    <OfferCountry data={data.wycieczki} />
                  </Container>
                );
              });
            }
          })}
        </Container>
      </div>
    </>
  );
};

export default OffersList;
