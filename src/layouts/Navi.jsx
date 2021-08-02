import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Container, Label, Menu,Image } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
export default function Navi() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const history = useHistory();
  function handleSignedIn(params) {
    setisAuthenticated(true);
  }
  function handleSignedOut(params) {
    setisAuthenticated(false);
    history.push("/");
  }
  return (
    <div>
      <Menu color="teal" inverted fixed="top">
        <Container>
          <Menu.Item exact as={NavLink}  to="/home">
            <Label color="teal"><Image src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/4mZobU9NSRKr8UJADi4M"></Image></Label>
          </Menu.Item>
          <Menu.Item as={NavLink} exact to="/" name="Ana Sayfa" />
          <Menu.Item
            name="Yeni İlan Oluştur"
            as={NavLink}
            to="/add_job_posting"
          />
         

          <Menu.Menu position="right">
            <Menu.Item>
            <CartSummary />
            {isAuthenticated ? (
              <SignedIn signOut={handleSignedOut} />
            ) : (
              <SignedOut signIn={handleSignedIn} />
            )}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
