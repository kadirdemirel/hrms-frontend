import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import EmployerService from "../services/EmployerService";
import { Button } from "semantic-ui-react";
export default function UpdateEmployer(props) {
  let employerService = new EmployerService();
  const [phones, setPhones] = useState(undefined);
  const [companyNames, setCompanyNames] = useState(undefined);

  useEffect(() => {
    setCompanyNames(props.propsEmployer.companyName);
    setPhones(props.propsEmployer.phone);
  
  }, [
    props.propsEmployer.companyName,
    props.propsEmployer.phone,
    props.propsEmployer.id,
    
  ]);

 
  const updateEmployer = () => {
    const array = {
      id:props.propsEmployer.id,
      companyNameClone: companyNames,
      phoneClone: phones,
      status:true,
    };
    employerService
      .updateEmployerClone(array)
      .then((result) => console.log(result.data.message));
// console.log(array)
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Şirket</Form.Label>
          <Form.Control
            type="text"
            value={companyNames}
            onChange={(companyNames) =>
              setCompanyNames(companyNames.target.value)
            }
            placeholder="Enter Şirket"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Telefon</Form.Label>
          <Form.Control
            type="text"
            value={phones}
            onChange={(phones) => setPhones(phones.target.value)}
            placeholder="Enter Telefon"
          />
        </Form.Group>

        <a onClick={()=> updateEmployer()}>adasd</a>
      </Form>
    </div>
  );
}
