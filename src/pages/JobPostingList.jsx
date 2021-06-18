import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { Icon, Menu, Table, Label, Button, Form } from "semantic-ui-react";
import JobPostingService from "../services/JobPostingService";
import { If, Then, ElseIf, Else } from "react-if-elseif-else-render";
import { useFormik } from "formik";
import { ReactDOM } from "react";
import App from "../App";
import Dashboard from "../layouts/Dashboard";


export default function JobPostingList() {

  let jobPostingService = new JobPostingService();
  const [jobPostings, setJobPostings] = useState([]);
  useEffect(() => {

    jobPostingService
      .getJobPostings()
      .then((result) => setJobPostings(result.data.data));
  }, []);

  let jobPostingStatus;
  let jobPostingId;
  const formik = useFormik({
    

    onSubmit: (values) => {
     
    alert(values);
    
      
     
      
    },
  });



  function changeState(id, status) {
    jobPostingId = id;
    jobPostingStatus = status;
    jobPostingService.updateStatus(jobPostingId,jobPostingStatus);
    
    window.location.reload(false);

   
  }


  render()
  {
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Minumum Ücret</Table.HeaderCell>
              <Table.HeaderCell>Maxiumum Ücret</Table.HeaderCell>
              <Table.HeaderCell>Açık Pozisyon</Table.HeaderCell>
              <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
              <Table.HeaderCell>Başvuru Durumu</Table.HeaderCell>
              <Table.HeaderCell>Genel İş Pozisyonu</Table.HeaderCell>
              <Table.HeaderCell>Şirket</Table.HeaderCell>
              <Table.HeaderCell>Şehir</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {jobPostings.map((jobPosting) => (
              <Table.Row key={jobPosting.id}>
                <Table.Cell>
                  <div>{jobPosting.minSalary}</div>
                </Table.Cell>
                <Table.Cell>
                  <div>{jobPosting.maxSalary}</div>
                </Table.Cell>
                <Table.Cell>
                  <div>{jobPosting.openPosition}</div>
                </Table.Cell>
                <Table.Cell>
                  <div>{jobPosting.lastDate}</div>
                </Table.Cell>
                <Table.Cell>
                  <div>
                    <If condition={jobPosting.status === -1}>
                      <Then>
                        <Label color="yellow">Onay Bekliyor</Label>
                      </Then>
                      <ElseIf condition={jobPosting.status === 0}>
                        <Then>
                          <Label color="red">Reddedildi</Label>
                        </Then>
                      </ElseIf>
                      <Else>
                        <Then>
                          <Label color="green">Onaylandı</Label>
                        </Then>
                      </Else>
                    </If>
                  </div>
                </Table.Cell>

                <Table.Cell>
                  <div>{jobPosting.jobTitle.title}</div>
                </Table.Cell>
                <Table.Cell>
                  <div>{jobPosting.employer.companyName}</div>
                </Table.Cell>
                <Table.Cell>
                  <div>{jobPosting.city.cityName}</div>
                </Table.Cell>
                <Table.Cell>
                  <Button.Group>
                    <div>
                     
                        <Button
                          type="submit"
                          onClick={() => changeState(jobPosting.id, 1)}
                        >
                          ONAYLA
                        </Button>
                        <Button
                          type="submit"
                          onClick={() => changeState(jobPosting.id, 0)}
                        >
                          REDDET
                        </Button>
                    
                    </div>
                  </Button.Group>
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

}
