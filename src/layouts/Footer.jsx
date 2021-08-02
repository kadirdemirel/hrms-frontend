import { Button } from "bootstrap";
import React from "react";
import { Header, Icon, Table, Menu } from "semantic-ui-react";
export default function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="footer-left col-md-4 col-sm-6">
          <p class="about">
            <span> Proje Detayı</span>
            Engin DEMİROĞ hocamızın önderliğinde Java+React teknolojilerini
            kullanarak HRMS(Human Resources Manager Salary) projesini
            geliştiriyoruz. Bu projede toplamda 3 modül bulunmaktadır. Bu
            modüller sırasıyla:
            <Table basic="very" celled collapsing>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>İş Arayanlar(Candidate)</Header.Content>
                    </Header>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>İş Verenlere(Employer)</Header.Content>
                    </Header>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>
                        Sistem Çalışanları(Employee)
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            dır. Sistemin temel amacı İş verenler ile İş arayanları ortak
            paydada buluşturup sektörün ihtiyacı olan yazılım geliştiricilerin
            bulunabilmesini sağlamaktadır.
          </p>

          <a href="https://www.linkedin.com/in/kadir-demirel/" target="_blank">
            <Icon color="violet" name="linkedin" size="big" />
          </a>
          <a href="https://github.com/kadirdemirel" target="_blank">
            <Icon color="violet" size="big" name="github"></Icon>
          </a>
        </div>
        <div class="footer-center col-md-4 col-sm-6">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span> Şehir</span> Mersin,Mezitli
            </p>
          </div>
          <div>
            <i class="fa fa-phone"></i>
            <p> 0505 031 5617</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:kadirdemirel_17@hotmail.com">
                {" "}
                kadirdemirel_17@hotmail.com
              </a>
            </p>
          </div>
        </div>
        <div class="footer-right col-md-4 col-sm-6">
          <h2>
 
            Kodlama.io<span> 

           
            </span>
          </h2>
          <p class="menu">
            <a href="http://localhost:3000/"> Ana Sayfa</a> |<a href="#"> About</a> |
            <a href="#"> Services</a> |<a href="#"> Portfolio</a> |
            <a href="#"> News</a> |<a href="#"> Contact</a>
          </p>
          <p class="name"> Kodlama.io &copy; 2021</p>
        </div>
      </footer>
    </div>
  );
}
