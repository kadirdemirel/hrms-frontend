import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import {
  Icon,
  Menu,
  Table,
  Label,
  Button,
  Segment,
  Dropdown,
} from "semantic-ui-react";
import { Pagination } from "semantic-ui-react";
import JobPostingService from "../services/JobPostingService";
import { If, Then, ElseIf, Else } from "react-if-elseif-else-render";
import { useFormik } from "formik";
import MyFavouriteService from "../services/MyFavouriteService";
import Filter from "../layouts/Filter";

export default function JobPostingList() {
  let jobPostingService = new JobPostingService();
  let myFavoriteService = new MyFavouriteService();
  const [jobPostings, setJobPostings] = useState([]);
  const [filterOption, setFilterOption] = useState({});

  const [activePage, setActivePage] = useState(1);
  const [pageSize] = useState(10);
  const [totalPageSize, setTotalPageSize] = useState(0);

  useEffect(() => {
    jobPostingService
      .getByFilter(activePage, pageSize, filterOption)
      .then((result) => {
        setJobPostings(result.data.data);
        setTotalPageSize(parseInt(result.data.message));
      });
    console.log(filterOption);
  }, [filterOption, activePage, pageSize]);

  let jobPostingStatus;
  let jobPostingId;

  const handlePaginationChange = (e, { activePage }) => {
    setActivePage(activePage);
  };
  const handleFilterClick = (param) => {
    if (param.cityId.length === 0) {
      param.cityId = null;
    }
    if (param.typeOfWorkId.length === 0) {
      param.typeOfWorkId = null;
    }

    setFilterOption(param);
    setActivePage(1);
  };

  function changeState(id, status) {
    jobPostingId = id;
    jobPostingStatus = status;
    jobPostingService.updateStatus(jobPostingId, jobPostingStatus);

    window.location.reload(false);
  }
  function changeStatee(candidateId, id) {
    myFavoriteService.addFavourite(candidateId, id);

    window.location.reload(false);
  }

  render();
  {
    return (
      <div>
        <Filter clickEvent={handleFilterClick}></Filter>
        <Segment color="black" raised>
          <Label size="large">Sayfa</Label>
          <Dropdown
            placeholder="Seçiniz"
            selection
            options={[
              { key: 1, text: "10", value: 10 },
              { key: 2, text: "20", value: 20 },
              { key: 3, text: "50", value: 50 },
            ]}
            onChange={handlePaginationChange}
            value={pageSize}
          />
        </Segment>
        <Table    selectable   color="blue">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell><Label pointing="below" color="violet">Minumum Ücret</Label></Table.HeaderCell>
              <Table.HeaderCell><Label pointing="below" color="violet">Maxiumum Ücret</Label></Table.HeaderCell>
              <Table.HeaderCell><Label pointing="below" color="violet">Açık Pozisyon</Label></Table.HeaderCell>
              <Table.HeaderCell><Label pointing="below" color="violet">Son Başvuru Tarihi</Label></Table.HeaderCell>
              <Table.HeaderCell><Label pointing="below" color="violet">Başvuru Durumu</Label></Table.HeaderCell>
              <Table.HeaderCell><Label pointing="below" color="violet">Genel İş Pozisyonu</Label></Table.HeaderCell>
              <Table.HeaderCell><Label pointing="below" color="violet">Şirket</Label></Table.HeaderCell>
              <Table.HeaderCell><Label pointing="below" color="violet">Şehir</Label></Table.HeaderCell>
              <Table.HeaderCell><Label pointing="below" color="violet">Çalışma Zamanı</Label></Table.HeaderCell>
              <Table.HeaderCell><Label pointing="below" color="violet">Çalışma Türü</Label></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
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
                        <Label color="red">Reddedildi</Label>
                      </Then>
                      <ElseIf condition={jobPosting.status === 0}>
                        <Then>
                          <Label color="yellow">Onay Bekliyor</Label>
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
                  <div>{jobPosting.workingTime.workingTimeName}</div>
                </Table.Cell>
                <Table.Cell>
                  <div>{jobPosting.typeOfWork.typeOfWorkName}</div>
                </Table.Cell>
                
                <Table.Cell>
                  <Button.Group>
                    <div>
                      <Button
                        positive
                        animated
                        onClick={() => changeState(jobPosting.id, 1)}
                      >
                        <Button.Content visible>Onayla</Button.Content>
                        <Button.Content hidden>
                          <Icon name="check" />
                        </Button.Content>
                      </Button>
                      {/* <Button positive
                        type="submit"
                        onClick={() => changeState(jobPosting.id, 1)}
                      >
                        ONAYLA
                      </Button> */}
                      <Button 
                        negative
                        animated
                        onClick={() => changeState(jobPosting.id, -1)}
                        style={{marginTop:"0.5em"}}
                      >
                        <Button.Content visible>Reddet</Button.Content>
                        <Button.Content hidden>
                          <Icon name="ban" />
                        </Button.Content>
                      </Button>
                      {/* <Button
                        negative
                        type="submit"
                        onClick={() => changeState(jobPosting.id, -1)}
                      >
                        Reddet
                      </Button> */}
                    </div>
                  </Button.Group>
                </Table.Cell>

                <Table.Cell>
                  <div>
                    <Button
                      color="yellow"
                      animated
                      onClick={() => changeStatee(7, jobPosting.id)} 
                    >
                      <Button.Content visible>
                        {" "}
                        <Icon name="star outline" />
                      </Button.Content>
                      <Button.Content hidden>
                        <Icon name="star" />
                      </Button.Content>
                    </Button>
                    {/* <Button
                      type="submit"
                      onClick={() => changeStatee(7, jobPosting.id)}
                    >
                      FAVORİLERİME EKLE
                    </Button> */}
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="3">
                <Pagination
                  firstItem={null}
                  lastItem={null}
                  activePage={activePage}
                  onPageChange={handlePaginationChange}
                  totalPages={Math.ceil(totalPageSize / pageSize)}
                />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    );
  }
}
