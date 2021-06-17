import React, { useState, useEffect } from "react";
import { Icon,  Menu, Table } from "semantic-ui-react";
import LanguageLevelService from "../services/LanguageLevelService";

export default function LanguageLevelList() {
  const [languageLevels, setlanguageLevels] = useState([]);
  useEffect(() => {
    let languageLevelService = new LanguageLevelService();
    languageLevelService
      .getLanguageLevels(1)
      .then((result) => setlanguageLevels(result.data.data));
  }, []);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Yabancı Dil</Table.HeaderCell>
            <Table.HeaderCell>Seviye</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {languageLevels.map((languageLevel) => (
            <Table.Row key={languageLevel.id}>
              <Table.Cell><div>{languageLevel.languageName}</div></Table.Cell>
              <Table.Cell><div>{languageLevel.levelName}</div></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
