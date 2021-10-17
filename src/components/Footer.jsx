import React from "react";
import { Container, Row } from "react-grid-system";
import { Link } from "react-router-dom";

function Footer() {
  const isLoggedin = localStorage.getItem("token");

  const logOut = () => {
    localStorage.removeItem("token");
    console.log("hey");
  };
  return (
    <div className="footer">
      <Container>
        <Row nogutter justify="between" align="center">
          <h4>{new Date().getFullYear()}© Exercise </h4>
          <div className="footer__navigation">
            {isLoggedin ? (
              <button className="footer__button" onClick={() => logOut()}>
                Log out
              </button>
            ) : (
              <Link to="/auth" className="footer__link">
                Log in
              </Link>
            )}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
