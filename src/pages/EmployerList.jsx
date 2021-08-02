import React, { useState, useEffect } from "react";
import { Icon, Label, Menu, Table, Button } from "semantic-ui-react";
import EmployerService from "../services/EmployerService";
import { If, Then, ElseIf, Else } from "react-if-elseif-else-render";
import UpdateEmployer from "./UpdateEmployer";

export default function EmployerList() {

  const [isUpdate, setIsUpdate] = useState(false);
  const [id, setId] = useState(0);
  const [employerUpdate, setEmployerUpdate] = useState([]);
  const [employers, setEmployers] = useState([]);
  let employerService = new EmployerService();
  const [value, setValue] = useState(0); // integer state
  useEffect(() => {
    if (isUpdate === true)
      employerService
        .getById(id)
        .then((result) => setEmployerUpdate(result.data.data));
  }, [isUpdate]);
  useEffect(() => {
    setIsUpdate(false);

    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, [value]);
  const confirmEmployer = (employer) => {
  
    console.log(employer);
    const array = {
      id: employer.id,
      phone: employer.phoneClone,
      companyName: employer.companyNameClone,
      status: false,
    };
    const arrayClone = {
      id: employer.id,
      phoneClone: "",
      companyNameClone: "",
      status: false,
    };
    employerService
      .updateEmployer(array)
      .then(() =>
        employerService
          .updateEmployerClone(arrayClone)
          .then(console.log("Başarılı"))
      )
      .catch(() => console.log("Başarısız"));
      setValue((value) => value + 1); 
  };
  const updateEmployer = (id) => {
    setIsUpdate(true);
    setId(id);
  };
  if (isUpdate === true) {
    return <UpdateEmployer propsEmployer={employerUpdate}></UpdateEmployer>;
  }
  return (
    <div>
      <Table color="blue" selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>
              <Label pointing="below" color="violet">
                Şirket Adı
              </Label>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Label pointing="below" color="violet">
                Web Adresi
              </Label>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Label pointing="below" color="violet">
                Telefon
              </Label>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Label pointing="below" color="violet">
                Status
              </Label>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Label pointing="below" color="violet"></Label>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((employer) => (
            <Table.Row key={employer.id}>
              <Table.Cell collapsing>
                <Icon name="handshake" />
              </Table.Cell>
              <Table.Cell>
                <div>{employer.companyName}</div>
              </Table.Cell>
              <Table.Cell>
                <div>{employer.webAddress}</div>
              </Table.Cell>
              <Table.Cell>
                <div>{employer.phone}</div>
              </Table.Cell>
              <Table.Cell>
                <div>{employer.status}</div>
              </Table.Cell>
              <Table.Cell>
                <div>
                  <If condition={employer.status === true}>
                    <Then>
                      <Label color="red">Onay Bekliyor</Label>
                    </Then>
                  </If>
                </div>
              </Table.Cell>
              <Table.Cell>
                <div>
                  <Button positive onClick={() => updateEmployer(employer.id)}>
                    Güncelle
                  </Button>
                </div>
              </Table.Cell>
              <Table.Cell>
                {employer.status === true ? (
                  <div>
                    <Button
                      positive
                      onClick={() => {
                        confirmEmployer(employer);
                       
                      }}
                    >
                      Onayla
                    </Button>
                  </div>
                ) : null}
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
