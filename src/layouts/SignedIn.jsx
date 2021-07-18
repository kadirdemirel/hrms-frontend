import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://media-exp1.licdn.com/dms/image/C5603AQHnJHfqb81Dyw/profile-displayphoto-shrink_800_800/0/1610481907978?e=1632355200&v=beta&t=Uox1vAaRObyw1MXUTNUeGumjEexi7OpybcooEUKQuXY"
        />
        <Dropdown pointing="top left">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />

            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
