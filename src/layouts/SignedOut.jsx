import React from "react";
import { Button} from "semantic-ui-react";
export default function SignedOut({signIn}) {
  return (
    <div>
      <Button.Group size="small">
        <Button >Kayıt Ol</Button>
        <Button.Or />
        <Button onClick={signIn} positive>Giriş Yap</Button>
      </Button.Group>
    </div>
  );
}
