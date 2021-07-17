import React, { useState, useEffect } from "react";
import { Button, Icon, Menu, Table, Label } from "semantic-ui-react";
import CvService from "../services/CvService";

import { Link } from "react-router-dom";

import LanguagePopups from "./popups/LanguagePopups";
export default function CvList() {
  let cvService = new CvService();
  const [cvs, setCvs] = useState([]);
  const [id, setId] = useState(0);
  const [cvUpdate, setCvUpdate] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  useEffect(() => {
    if (isUpdate === true) {
      cvService.getCvsById(id).then((result) => setCvUpdate(result.data.data));
    }
  }, [isUpdate]);
  useEffect(() => {
    setIsUpdate(false);
    cvService.getCvs().then((result) => setCvs(result.data.data));
  }, []);

  // const [stateModal, setStateModal] = useState({ type: "close", size: "tiny" });

  const handleLanguagePopups = (id) => {
    setIsUpdate(true);
    setId(id);
    //console.log(stateModal)
  };
  if (isUpdate === true) {
    return <LanguagePopups propsCv={cvUpdate}></LanguagePopups>;
  }
  return (
    <div>
      <Table color="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
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
              <Table.Cell>
                <Label size="small" as="a" color="red" ribbon>
                  Özgeçmiş
                </Label>
              </Table.Cell>
              <Table.Cell>
                <div>{cv.gitHubAddress}</div>
              </Table.Cell>
              <Table.Cell>
                <div>{cv.linkedlnAddress}</div>
              </Table.Cell>
              <Table.Cell>
                <div>{cv.coverLetter}</div>
              </Table.Cell>
              <Table.Cell>
                <div>{cv.yearOfEntry}</div>
              </Table.Cell>
              <Table.Cell>
                <div>{cv.yearOfGraduation}</div>
              </Table.Cell>
              <Table.Cell>
                <div>{cv.yearOfEmployment}</div>
              </Table.Cell>
              <Table.Cell>
                <div>{cv.yearOff}</div>
              </Table.Cell>
              <Table.Cell>
                <div>{cv.candidate.firstName}</div>
              </Table.Cell>
              <Table.Cell>
                <div>{cv.candidate.lastName}</div>
              </Table.Cell>
              <Table.Cell>
                <div>
                  {/* <Button onClick={() => handleLanguagePopups(cv.id)}>
                    Tiny
                  </Button> */}
                  <Button
                    icon="pencil"
                    white
                    onClick={() => handleLanguagePopups(cv.id)}
                  ></Button>
                </div>
              </Table.Cell>
              <Table.Cell>
                <div>
                  <Button>
                    <Link to={`/cv_detail/${cv.id}`}>Detay</Link>
                  </Button>
                </div>
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
