import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
export default function Navi() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  function handleSignedIn(params) {
    setisAuthenticated(true);
  }
  function handleSignedOut(params) {
    setisAuthenticated(false);
  }
  return (
    <div>
      <Menu color="teal" inverted  fixed="top">
        <Container>
          <Menu.Item  name="Ana Sayfa" as={NavLink} to="/" />
          <Menu.Item
            name="Yeni İlan Oluştur"
            as={NavLink}
            to="/add_job_posting"
          />
          <Menu.Item
            name="Yeni Başlık Oluştur"
            as={NavLink}
            to="/add_job_title"
          />

          <Menu.Menu position="right">
            <CartSummary />
            {isAuthenticated ? (
              <SignedIn signOut={handleSignedOut} />
            ) : (
              <SignedOut signIn={handleSignedIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
