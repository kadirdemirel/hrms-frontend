import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Icon, Menu, Table,Button } from "semantic-ui-react";
import CvSkillService from "../services/CvSkillService";

export default function CvSkillList(props) {
  const [cvSkills, setCvSkills] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    let cvSkillService = new CvSkillService();
    cvSkillService
      .getCvSkills(id)
      .then((result) => setCvSkills(result.data.data));
  }, []);

  return (
    <div>
      <Table celled color="violet">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Beceri</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cvSkills.map((cvSkill) => (
            <Table.Row key={cvSkill.id}>
              <Table.Cell>
                <div>{cvSkill.skillName}</div>
              </Table.Cell>
              <Table.Cell>
                <Button
                  icon="pencil"
                  white
                  onClick={() => props.functionUpdate(cvSkill.id)}
                ></Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        {/* <Table.Footer>
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
        </Table.Footer> */}
      </Table>
    </div>
  );
}
