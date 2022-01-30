import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Offer from "./Offer";

const OfferCountry = ({ data }) => {
  const [maxToSee, setMaxToSee] = useState(5);

  return (
    <>
      <Container
        style={{
          marginTop: "2%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, 280px",
          gap: "40px",
        }}
      >
        {data.map((data, _id) => {
          if (maxToSee > _id) {
            return <Offer key={_id} data={data} />;
          }
          return "";
        })}
      </Container>
      {data.length > maxToSee ? (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}
        >
          <Button
            variant="outline-success"
            onClick={() => setMaxToSee(maxToSee + 4)}
          >
            Click to see more <i className="fa fa-search-plus"></i>
          </Button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default OfferCountry;
