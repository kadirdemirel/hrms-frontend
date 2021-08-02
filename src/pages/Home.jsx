import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Header, Image, Label, Table } from "semantic-ui-react";
export default function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://revampmind.com/wp-content/uploads/2021/06/HR.jpg"
            alt="Second slide"
            style={{
              height: "400px",
            }}
          />
          <Carousel.Caption>
            <h3>HRMS</h3>
            <p>Human Resources Manager Salary </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://amcham.az/uploads/event/7818c77008ee295992deea4d09406741.png?v=1613456424"
            alt="Second slide"
            style={{
              height: "400px",
            }}
          />
          <Carousel.Caption>
            <h3>HRMS</h3>
            <p>Human Resources Manager Salary </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/10/25/747245-management-human-resources-thinkstock-102518.jpg"
            alt="Third slide"
            style={{
              height: "400px",
            }}
          />
          <Carousel.Caption>
            <h3>HRMS</h3>
            <p>Human Resources Manager Salary </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        <h3
          style={{
            fontFamily: "sans-serif",
            marginTop: "1em",
          }}
        >
          Proje Hakkında
        </h3>
      </div>
      <div
        style={{
          padding: "31px 40px",
            backgroundColor:"#E7E9EB" ,
           opacity:"undefined",
            position:"relative"
        }}
      >
        <Table basic="very" celled collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Eğitmen</Table.HeaderCell>
              <Table.HeaderCell>Proje</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Image
                    src="https://yt3.ggpht.com/ytc/AKedOLQWh0NexoDeiPGyRUWvl1PqfYgPbjpOyILriXjWPw=s900-c-k-c0x00ffffff-no-rj"
                    rounded
                    size="mini"
                  />
                  <Header.Content>
                    Engin DEMİROĞ
                    <Header.Subheader>
                      Software Development Consultant & Instructor
                    </Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>HRMS System</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
