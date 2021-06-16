import React, { useState, useEffect } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import CvService from "../services/CvService";
export default function CvList() {
  const [cvs, setCvs] = useState([]);
  useEffect(() => {
    let cvService = new CvService();
    cvService.getCvs().then((result) => setCvs(result.data.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Github</Table.HeaderCell>
            <Table.HeaderCell>Linkedln</Table.HeaderCell>
            <Table.HeaderCell>Ön Yazı</Table.HeaderCell>
            <Table.HeaderCell>Giriş Yılı</Table.HeaderCell>
            <Table.HeaderCell>Mezuniyet Yılı</Table.HeaderCell>
            <Table.HeaderCell>İşe Giriş Yılı</Table.HeaderCell>
            <Table.HeaderCell>İşten Çıkış Yılı</Table.HeaderCell>
            <Table.HeaderCell>Ad</Table.HeaderCell>
            <Table.HeaderCell>Soyad</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cvs.map((cv) => (
            <Table.Row key={cv.id}>
              <Table.Cell><div>{cv.gitHubAddress}</div></Table.Cell>
              <Table.Cell><div>{cv.linkedlnAddress}</div></Table.Cell>
              <Table.Cell><div>{cv.coverLetter}</div></Table.Cell>
              <Table.Cell><div>{cv.yearOfEntry}</div></Table.Cell>
              <Table.Cell><div>{cv.yearOfGraduation}</div></Table.Cell>
              <Table.Cell><div>{cv.yearOfEmployment}</div></Table.Cell>
              <Table.Cell><div>{cv.yearOff}</div></Table.Cell>
              <Table.Cell><div>{cv.candidate.firstName}</div></Table.Cell>
              <Table.Cell><div>{cv.candidate.lastName}</div></Table.Cell>
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
  )
}