import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import JobPostingService from "../services/JobPostingService";

export default function JobPostingList() {
  const [jobPostings, setJobPostings] = useState([]);
  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getJobPostings()
      .then((result) => setJobPostings(result.data.data));
  }, []);
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
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPostings.map((jobPosting) => (
            <Table.Row key={jobPosting.id}>
              <Table.Cell><div>{jobPosting.minSalary}</div></Table.Cell>
              <Table.Cell><div>{jobPosting.maxSalary}</div></Table.Cell>
              <Table.Cell><div>{jobPosting.openPosition}</div></Table.Cell>
              <Table.Cell><div>{jobPosting.lastDate}</div></Table.Cell>
              <Table.Cell><div>{jobPosting.status}</div></Table.Cell>
              <Table.Cell><div>{jobPosting.jobTitle.title}</div></Table.Cell>
              <Table.Cell><div>{jobPosting.employer.companyName}</div></Table.Cell>
              <Table.Cell><div>{jobPosting.city.cityName}</div></Table.Cell>
    
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
