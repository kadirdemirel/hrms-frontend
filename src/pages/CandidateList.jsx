import React, { useState, useEffect } from "react";
import { Icon, Menu, Table, Label } from "semantic-ui-react";
import CandidateService from "../services/CandidateService";
export default function CandidateList() {
  const [candidates, setcandidates] = useState([]);
  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidates()
      .then((result) => setcandidates(result.data.data));
  }, []);
  return (
    <div>
      <Table color="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>
              <Label pointing="below" color="violet">
                Ad
              </Label>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Label pointing="below" color="violet">
                Soyad
              </Label>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Label pointing="below" color="violet">
                TC Kimlik Numarası
              </Label>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Label pointing="below" color="violet">
                Doğum Tarihi
              </Label>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidates.map((candidate) => (
            <Table.Row key={candidate.id}>
              <Table.Cell collapsing>
                <Icon name="user" />
              </Table.Cell>
              <Table.Cell>
                <div>{candidate.firstName}</div>
              </Table.Cell>
              <Table.Cell>
                <div>{candidate.lastName}</div>
              </Table.Cell>
              <Table.Cell>
                <div>{candidate.identificationNumber}</div>
              </Table.Cell>
              <Table.Cell>
                <div>{candidate.birthDate}</div>
              </Table.Cell>
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
