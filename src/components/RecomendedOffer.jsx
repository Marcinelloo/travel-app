import React from "react";
import Container from "react-bootstrap/esm/Container";
import data from "../data/krajeData.json";
import Offer from "./Offer";

const RecomendedOffer = () => {
  return (
    <div
      style={{
        backgroundColor: "#FBFBFB",
        marginTop: "5%",
        marginBottom: "5%",
        padding: "3%",
        display: "grid",
        justifyContent: "center",
      }}
    >
      <h1>Najlepiej oceniane</h1>
      <Container
        style={{
          marginTop: "2%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr)",
          gap: "40px",
          paddingBottom: "3%",
        }}
      >
        {data[0].lokalizacje[0].wycieczki.map((data, _id) => {
          if (3 > _id) {
            return <Offer key={_id} data={data} />;
          }
          return "";
        })}
      </Container>
      <h1>Najczesciej odwiedzane</h1>
      <Container
        style={{
          marginTop: "2%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr)",
          gap: "40px",
        }}
      >
        {data[0].lokalizacje[0].wycieczki.map((data, _id) => {
          if (3 > _id) {
            return <Offer key={_id} data={data} />;
          }
          return "";
        })}
      </Container>
    </div>
  );
};

export default RecomendedOffer;
