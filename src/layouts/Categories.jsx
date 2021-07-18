import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Grid } from "semantic-ui-react";
export default function Categories() {
  return (
    <div>
      {/* <Menu pointing vertical>
        <Menu.Item name="Ana Sayfa" as={NavLink} to="/" />
        <Menu.Item name="İş İlanları" as={NavLink} to="/job_posting" />
        <Menu.Item name="İş Verenler" as={NavLink} to="/employer" />
        <Menu.Item name="İş Arayanlar" as={NavLink} to="/candidate" />
        <Menu.Item name="Cv Listesi" as={NavLink} to="/cv" />
      </Menu> */}

      <Grid>
        <Grid.Column >
          <Menu fluid vertical tabular  color="teal">
            <Menu.Item name="Ana Sayfa" as={NavLink} to="/" />
            <Menu.Item name="İş İlanları" as={NavLink} to="/job_posting" />
            <Menu.Item name="İş Verenler" as={NavLink} to="/employer" />
            <Menu.Item name="İş Arayanlar" as={NavLink} to="/candidate" />
            <Menu.Item name="Cv Listesi" as={NavLink} to="/cv" />
          </Menu>
        </Grid.Column>
      </Grid>
    </div>
  );
}
