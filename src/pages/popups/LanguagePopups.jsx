import React, { useEffect, useState } from "react";
import { Button, Icon, Modal, Image, Header, Label } from "semantic-ui-react";
import CvService from "../../services/CvService";
import { Form } from "react-bootstrap";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LanguagePopups(props) {
  const [gitHubAddress, setGitHubAddress] = useState(undefined);
  const [linkedlnAddress, setLinkedlnAddress] = useState(undefined);
  const [coverLetter, setCoverLetter] = useState(undefined);
  const [yearOfEntry, setYearOfEntry] = useState(undefined);
  const [yearOfGraduation, setYearOfGraduation] = useState(undefined);
  const [yearOfEmployment, setYearOfEmployment] = useState(undefined);
  const [yearOff, setYearOff] = useState(undefined);

  const notify = () => toast("Wow so easy!");

  useEffect(() => {
    setGitHubAddress(props.propsCv.gitHubAddress);
    setLinkedlnAddress(props.propsCv.linkedlnAddress);
    setCoverLetter(props.propsCv.coverLetter);
    setYearOfEntry(props.propsCv.yearOfEntry);
    setYearOfGraduation(props.propsCv.yearOfGraduation);
    setYearOfEmployment(props.propsCv.yearOfEmployment);
    setYearOff(props.propsCv.yearOff);
  }, [
    props.propsCv.gitHubAddress,
    props.propsCv.linkedlnAddress,
    props.propsCv.coverLetter,
    props.propsCv.yearOfEntry,
    props.propsCv.yearOfGraduation,
    props.propsCv.yearOfEmployment,
    props.propsCv.yearOff,
  ]);
  const array = {
    gitHubAddress: gitHubAddress,
    linkedlnAddress: linkedlnAddress,
    coverLetter: coverLetter,
    yearOfEntry: yearOfEntry,
    yearOfGraduation: yearOfGraduation,
    yearOfEmployment: yearOfEmployment,
    yearOff: yearOff,
  };
  const [open, setOpen] = React.useState(false);
  const updateCv = () => {
    let cvService = new CvService();
    cvService
      .updateCv(props.propsCv.id, array)
      .then((result) => console.log(result.data.message));
    
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Github</Form.Label>
          <Form.Control
            type="text"
            value={gitHubAddress}
            onChange={(gitHubAddress) =>
              setGitHubAddress(gitHubAddress.target.value)
            }
            placeholder="Enter Github"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Linkedln</Form.Label>
          <Form.Control
            type="text"
            value={linkedlnAddress}
            onChange={(linkedlnAddress) =>
              setLinkedlnAddress(linkedlnAddress.target.value)
            }
            placeholder="Enter Linkedln"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>coverLetter</Form.Label>
          <Form.Control
            type="text"
            value={coverLetter}
            onChange={(coverLetter) => setCoverLetter(coverLetter.target.value)}
            placeholder="Enter Ön Yazı"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>yearOfEntry</Form.Label>
          <Form.Control
            type="text"
            value={yearOfEntry}
            onChange={(yearOfEntry) => setYearOfEntry(yearOfEntry.target.value)}
            placeholder="Enter Github"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>yearOfGraduation</Form.Label>
          <Form.Control
            type="text"
            value={yearOfGraduation}
            onChange={(yearOfGraduation) =>
              setYearOfGraduation(yearOfGraduation.target.value)
            }
            placeholder="Enter Github"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>yearOfEmployment</Form.Label>
          <Form.Control
            type="text"
            value={yearOfEmployment}
            onChange={(yearOfEmployment) =>
              setYearOfEmployment(yearOfEmployment.target.value)
            }
            placeholder="Enter Github"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>yearOff</Form.Label>
          <Form.Control
            type="text"
            value={yearOff}
            onChange={(yearOff) => setYearOff(yearOff.target.value)}
            placeholder="Enter Github"
          />
        </Form.Group>

        <Button positive animated onClick={(() => updateCv(), notify)}>
          <Button.Content visible>Güncelle</Button.Content>
          <Button.Content hidden>
            <Icon name="undo" />
          </Button.Content>
        </Button>
       
      </Form>
      <ToastContainer position="bottom-right"autoClose={5000} />
    </div>
  );
}
