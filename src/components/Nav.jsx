import React from "react";
import { Container, Row } from "react-grid-system";
import { Link } from "react-router-dom";

function Nav() {
  const isLoggedin = localStorage.getItem("token");

  return (
    <header className="header">
      <Container>
        <Row justify="between" align="center" nogutter className="nav">
          <span>Blog</span>
          <div className="navigation">
            {isLoggedin ? (
              <>
                <Link to="/myposts" className="nav__link">
                  My Posts
                </Link>
                <Link to="/dashboard" className="nav__link">
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="nav__link">
                  Posts
                </Link>
              </>
            )}
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Nav;
