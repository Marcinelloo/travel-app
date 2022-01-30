import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Offer from "./Offer";

const OfferCountry = ({ data, sort }) => {
  const [maxToSee, setMaxToSee] = useState(4);

  const sortedObjects = data.sort((first, second) => {
    switch (sort) {
      case "alfabetycznie":
        return compareStrings(first.hotel, second.hotel);
      case "niealfabetycznie":
        return compareStrings(second.hotel, first.hotel);
      case "cenaMalejaco":
        return second.cena - first.cena;
      case "cenaRosnaco":
        return first.cena - second.cena;
      case "rabat":
        return second.znizka - first.znizka;
      case "ocena":
        return second.sredniaOcena - first.sredniaOcena;
      case "iloscDni":
        return first.iloscDni - second.iloscDni;
      case "gwiazdki":
        return second.gwiazki - first.gwiazki;
      case "iloscOpini":
        return second.iloscOpini - first.iloscOpini;
      default:
        return "";
    }
  });

  function compareStrings(first, second) {
    if (first < second) return -1;
    else if (first > second) return 1;
    return 0;
  }

  return (
    <>
    
      <Container
        style={{
          marginTop: "2%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr)",
          gap: "40px",
        }}
      >
        {sortedObjects.map((data, _id) => {
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
