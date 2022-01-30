import React from "react";
import Card from "react-bootstrap/Card";
import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import changeMonth from "../functions/changeDate";
import Rating from "./Rating";
import Button from "react-bootstrap/esm/Button";

const Offer = ({ data }) => {
  const navigate = useNavigate();

  const monthStart = changeMonth(data.dataOd.split("-")[1]);
  const monthEnd = changeMonth(data.dataDo.split("-")[1]);

  const startDate = data.dataOd.split("-")[2] + " " + monthStart;
  const endDate = data.dataDo.split("-")[2] + " " + monthEnd;

  function offerPageHandler(event) {
    event.preventDefault();
    navigate(`/:${data.id}`);
  }

  return (
    <>
      <Card
        style={{
          boxShadow: " 0 2px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "40px",
          height: "300px",
          width: "300px",
          backgroundColor: "# dD3D3D3",
        }}
      >
        <img
          src={data.zdjecie}
          alt={data.hotel}
          height="120px"
          width="298ąąpx"
          style={{ borderRadius: "40px 40px 0px 0px" }}
        />
        <Container>
          <div
            style={{
              display: "flex",
              gap: "5px",
            }}
          >
            <div style={{ color: "gray", fontStyle: "italic" }}>
              {data.rodzaj}
            </div>
            <Rating stars={data.gwiazki} />
          </div>
          <h4 style={{ marginBottom: "-1%" }}>{data.hotel}</h4>

          <div style={{ fontSize: "11px" }}>
            {data.sredniaOcena}
            /10 oceny: {data.iloscOpini}
          </div>
          <div style={{ display: "flex", gap: "7px" }}>
            <div
              style={{
                marginTop: "9%",
                border: "0px",
                background: "black",
                height: "1px",
                width: "20%",
              }}
            />
            <div
              style={{
                marginTop: "6%",
                boxShadow: " 0 2px 8px rgba(0, 0, 0, 0.2)",
                borderRadius: "40px",
                height: "14px",
                width: "150px",
                backgroundColor: "lightGreen",
                color: "#228B22",
                fontSize: "10px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Tylko u nas {data.znizka}% taniej*
            </div>
            <div
              style={{
                marginTop: "9%",
                border: "0px",
                background: "black",
                height: "1px",
                width: "20%",
              }}
            />
          </div>
          <div
            style={{
              textAlign: "right",
              fontSize: "12px",
              marginTop: "2%",
              marginBottom: "2%",
            }}
          >
            {startDate} - {endDate}
          </div>
          <div style={{ display: "flex", gap: "18%" }}>
            <div
              style={{
                paddingLeft: "4%",
                fontSize: "20px",
                color: "#228B22",
                fontWeight: "bold",
              }}
            >
              {data.cena}
              <span style={{ fontSize: "16px" }}>zł</span>
              <span style={{ fontSize: "12px" }}>/{data.iloscDni}dni</span>
            </div>
            <div>
              <Button
                variant="outline-success"
                onClick={(event) => offerPageHandler(event)}
                size="sm"
                bsPrefix="btn"
                style={{ borderRadius: "10px", fontSize: "13px" }}
              >
                Zobacz Ofert{" "}
                <i
                  style={{ fontSize: "20px" }}
                  className="fa fa-angle-right"
                ></i>
              </Button>
            </div>
          </div>
          <div style={{ marginLeft: "2%", marginTop: "-2%", fontSize: "8px" }}>
            * rabat naliczany podczas tranzakcji
          </div>
        </Container>
      </Card>
    </>
  );
};

export default Offer;
