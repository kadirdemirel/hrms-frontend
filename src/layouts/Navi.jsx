import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="Ana Sayfa" as={NavLink} to="/" />
          <Menu.Item name="Yeni İlan Oluştur" as={NavLink} to="/add_job_posting" />
    

          <Menu.Menu position="right">
            <CartSummary />
            <Menu.Item>
              <Button primary>SignUp</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
