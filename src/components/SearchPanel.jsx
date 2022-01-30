import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/esm/Button";
import OffersList from "./OffersList";
import Table from "react-bootstrap/Table";

const SearchPanel = () => {
  const date = new Date();
  const currentDate = date.toISOString().substring(0, 10);

  const [children, setChildren] = useState(0);
  const [adult, setAdult] = useState(0);
  const [roomsNumber, setRoomsNumber] = useState(0);

  const [country, setCountry] = useState("Polska");
  const [goDate, setGoDate] = useState(currentDate);
  const [backDate, setBackDate] = useState(currentDate);

  return (
    <>
      <Container
        style={{
          marginTop: "2%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          style={{
            boxShadow: " 0 2px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "40px",
            minWidth: "700px",
            display: "flex",
            flexDirection: "row",
            paddingLeft: "1%",
            paddingTop: "1%",
            minHeight: "80px",
          }}
        >
          <Form.Group
            controlId="city"
            style={{
              fontSize: "10px",
              paddingTop: "1%",
              minWidth: "150px",
            }}
          >
            <Form.Label
              style={{
                borderColor: "white",
                backgroundColor: "transparen",
                outline: "none",
                marginLeft: "2%",
                marginBottom: "1%",
              }}
            >
              Skad planujesz wycieczke?
            </Form.Label>
            <span style={{ display: "flex" }}>
              <i
                style={{ marginLeft: "2%", marginTop: "6%" }}
                class="fa fa-search"
              ></i>
              <Form.Control
                type="text"
                onChange={(city) => setCountry(city.target.value)}
                placeholder="Wpisz swoje miasto"
                style={{
                  fontSize: "12px",
                  borderRadius: "40px 0px 0px 40px",
                  borderColor: "white",
                  backgroundColor: "transparen",
                  outline: "none",
                }}
              />
            </span>
          </Form.Group>
          <Form.Group
            controlId="date"
            aria-required
            style={{
              marginLeft: "0%",
              fontSize: "12px",
              borderLeft: "1px solid lightgrey",
            }}
          >
            <Form.Label style={{ marginLeft: "10%" }}>
              Od kiedy masz czas?
            </Form.Label>
            <Form.Control
              type="date"
              name="dob"
              value={goDate}
              onChange={(date) => setGoDate(date.target.value)}
              style={{ marginLeft: "10%", fontSize: "12px" }}
            />
          </Form.Group>

          <Form.Group
            controlId="date"
            aria-required
            style={{
              marginLeft: "5%",
              fontSize: "12px",
              borderLeft: "1px solid lightgrey",
            }}
          >
            <Form.Label style={{ marginLeft: "10%" }}>
              Do kiedy masz czas??
            </Form.Label>
            <Form.Control
              type="date"
              name="dob"
              value={backDate}
              onChange={(date) => setBackDate(date.target.value)}
              style={{ marginLeft: "10%", fontSize: "12px" }}
            />
          </Form.Group>

          <Form.Group
            controlId="people"
            style={{
              marginLeft: "4%",
              fontSize: "12px",
              width: "25%",
              borderLeft: "1px solid lightgrey",
            }}
          >
            <Form.Label
              style={{
                borderRadius: "40px 0px 0px 40px",
                borderColor: "white",
                backgroundColor: "transparen",
                outline: "none",
                paddingLeft: "6%",
              }}
            >
              W ile osób?
            </Form.Label>
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  color: "black",
                  backgroundColor: "white",
                  borderColor: "white",
                  fontSize: "12px",
                }}
              >
                <i class="fa fa-user" /> {adult + children}{" "}
                <i class="fa fa-bed"></i> {roomsNumber}
              </Dropdown.Toggle>
              <Dropdown.Menu
                align={{ lg: "end" }}
                style={{
                  borderRadius: "20px",
                }}
              >
                <Container
                  style={{
                    display: "grid",
                    gridColumn: "1",
                    justifyContent: "center",
                    fontSize: "10px",
                  }}
                >
                  <Table style={{ fontSize: "14px" }}>
                    <tbody>
                      <tr>
                        <th>
                          <i class="fa fa-user"></i>
                        </th>
                        <th>
                          <Form.Control
                            type="text"
                            style={{ fontSize: "12px" }}
                            placeholder={adult}
                          ></Form.Control>
                        </th>
                        <th>
                          <Button
                            size="sm"
                            variant="outline-dark"
                            onClick={() => setAdult(adult + 1)}
                          >
                            +
                          </Button>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <i class="fa fa-child"></i>
                        </th>
                        <th>
                          <Form.Control
                            type="text"
                            style={{ fontSize: "12px" }}
                            placeholder={children}
                          ></Form.Control>
                        </th>
                        <th>
                          <Button
                            size="sm"
                            variant="outline-dark"
                            onClick={() => setChildren(children + 1)}
                          >
                            +
                          </Button>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          {" "}
                          <i class="fa fa-bed"></i>
                        </th>
                        <th>
                          <Form.Control
                            type="text"
                            style={{ fontSize: "12px" }}
                            placeholder={roomsNumber}
                          ></Form.Control>
                        </th>
                        <th>
                          <Button
                            size="sm"
                            variant="outline-dark"
                            onClick={() => setRoomsNumber(roomsNumber + 1)}
                          >
                            +
                          </Button>
                        </th>
                      </tr>
                    </tbody>
                  </Table>
                </Container>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
        </Card>
      </Container>

      <OffersList country={country} dateFrom={goDate} dateBack={backDate} />
    </>
  );
};

export default SearchPanel;
