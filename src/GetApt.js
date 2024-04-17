import React, { useEffect, useState } from "react";
import { supabase } from "./supabase";
import PixabayAPI from "./PixabayAPI";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function GetApt({ selectedLoco }) {
  const [myApt, setMyApt] = useState([]);

  useEffect(() => {
    async function getApt() {
      let { data: apartments } = await supabase.from("apartments").select("*");
      setMyApt(apartments);
    }
    getApt();
  }, [selectedLoco]);
  return (
    <div>
      {myApt
        .filter((apt) => apt.location === selectedLoco)
        .map((a) => (
          <div>
            <hr />
            <Row>
              <Col xs={12} md={6}>
                <h3>{a.aptName}</h3>
                <p>{a.location}, MI</p>
              </Col>
              <Col xs={12} md={6}>
                <h3 className="text-right">&#9734;</h3>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={12} md={6}>
                <PixabayAPI query={a.aptimg} />
              </Col>
              <Col xs={12} md={6}>
                <p className="text-left">
                  ${a.priceMin} - ${a.priceMax}{" "}
                </p>
                <p className="text-left">
                  {a.bedMin} - {a.bedMax} Bedrooms{" "}
                </p>
                <br></br>
                <p className="text-left">{a.availUnits} Units available</p>
              </Col>
            </Row>
          </div>
        ))}
    </div>
  );
}

export default GetApt;
