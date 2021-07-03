import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { Icon, Menu, Table, Label, Button } from "semantic-ui-react";
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

  // useEffect(() => {
  //   console.log(filterOption);
  //   if (
  //     filterOption.cityId === undefined &&
  //     filterOption.typeOfWorkId === undefined
  //   ) {
  //     jobPostingService.getJobPostings().then((result) => {
  //       setJobPostings(result.data.data);
  //     });
  //   } else {
  //     jobPostingService
  //       .getByCityIdAndTypeOfWorkId(
  //         filterOption.cityId,
  //         filterOption.typeOfWorkId
  //       )
  //       .then((result) => {
  //         setJobPostings(result.data.data);
  //       });
  //   }
  // }, [filterOption]);

  let jobPostingStatus;
  let jobPostingId;
  const formik = useFormik({
    onSubmit: (values) => {
      alert(values);
    },
  });
  const handleFilterClick = (param) => {
    if (param.cityId.length === 0) {
      param.cityId = undefined;
    }
    if (param.typeOfWorkId.length === 0) {
      param.typeOfWorkId = undefined;
    }

    setFilterOption(param);
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
  const options = [
    { key: 1, text: "Choice 1", value: 1 },
    { key: 2, text: "Choice 2", value: 2 },
    { key: 3, text: "Choice 3", value: 3 },
  ];
  render();
  {
    return (
      <div>
        <Filter clickEvent={handleFilterClick}></Filter>

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
              <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
              <Table.HeaderCell>Çalışma Türü</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
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
                        type="submit"
                        onClick={() => changeState(jobPosting.id, 1)}
                      >
                        ONAYLA
                      </Button>
                      <Button
                        type="submit"
                        onClick={() => changeState(jobPosting.id, -1)}
                      >
                        REDDET
                      </Button>
                    </div>
                  </Button.Group>
                </Table.Cell>

                <Table.Cell>
                  <div>
                    <Button
                      type="submit"
                      onClick={() => changeStatee(7, jobPosting.id)}
                    >
                      FAVORİLERİME EKLE
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
}
