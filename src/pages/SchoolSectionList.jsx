import React,{ useState,useEffect } from "react";
import SchoolSectionService from "../services/SchoolSectionService";
import { Icon,  Menu, Table } from "semantic-ui-react";

export default function SchoolSectionList() {
  const [schoolSections, setschoolSections] = useState([]);
  useEffect(() => {
    let schoolSectionService = new SchoolSectionService();
    schoolSectionService
      .getSchoolSections(1)
      .then((result) => setschoolSections(result.data.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Okul</Table.HeaderCell>
            <Table.HeaderCell>Bölüm</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {schoolSections.map((schoolSection) => (
            <Table.Row key={schoolSection.id}>
              <Table.Cell><div>{schoolSection.schoolName}</div></Table.Cell>
              <Table.Cell><div>{schoolSection.sectionName}</div></Table.Cell>
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
