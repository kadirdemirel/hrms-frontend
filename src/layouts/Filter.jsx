import TypeOfWorkService from "../services/TypeOfWorkService";
import CityService from "../services/CityService";
import React, { useEffect, useState, createRef } from "react";
import { Button, Segment, Dropdown, Label, Icon } from "semantic-ui-react";
var dropdownItem = createRef();

export default function Filter({ clickEvent }) {
  const [cities, setCities] = useState([]);
  const [typeOfWorks, setTypeOfWOrks] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));

    let typeOfWorkService = new TypeOfWorkService();
    typeOfWorkService
      .getTypeOfWorks()
      .then((result) => setTypeOfWOrks(result.data.data));
  }, []);

  const [cityIndex, setCityIndex] = useState([]);
  const handleChangeCity = (e, { value }) => {
    setCityIndex(value);
    clickEvent({ cityId: cityIndex, typeOfWorkId: typeOfWorkIndex });
  };
  // const handleDropdownClear = e => {
  //   var element = dropdownItem.current.querySelector('[aria-selected="true"]');
  //   if (element) {
  //     dropdownItem.current.querySelector(".clear").click();
  //   }

  //   // dropdownItem.current.lastChild.firstChild.focus();
  // };
  const [typeOfWorkIndex, setTypeOfWorkIndex] = useState([]);
  const handleChangeTypeOfWork = (e, { value }) => {
    setTypeOfWorkIndex(value);
    clickEvent({ cityId: cityIndex, typeOfWorkId: typeOfWorkIndex });
  };

  return (
    <div>
      <Segment color="black" raised>
        <Label size="large">Şehir</Label>
        <Dropdown
          placeholder="Şehir seçiniz"
          selection
          search
          clearable
          options={cities.map((city, index) => {
            return { text: city.cityName, key: city.index, value: city.id };
          })}
          onChange={handleChangeCity}
          value={cityIndex}
        />
      </Segment>

      <Segment color="black" raised>
        <Label size="large">Çalışma Türü</Label>
        <Dropdown
          placeholder="Çalışma türü seçiniz"
          selection
          search
          clearable
          options={typeOfWorks.map((typeOfWork, index) => {
            return {
              text: typeOfWork.typeOfWorkName,
              key: typeOfWork.index,
              value: typeOfWork.id,
            };
          })}
          onChange={handleChangeTypeOfWork}
          value={typeOfWorkIndex}
        />
      </Segment>

      {/* <Button
            type="button"
            fluid
            color="green"
            onClick={() =>
              clickEvent({ cityId: cityIndex, typeOfWorkId: typeOfWorkIndex })
            }
          >
            Filtrele
          </Button> */}
      {/* <Button
            type="button"
            fluid
            color="green"
            onClick={() =>{
              clickEvent({ cityId: 0, typeOfWorkId: 0 });
              // handleDropdownClear();


            }
          }
          >
          Temizle
          </Button> */}
      <div>
        <Segment>
          <Button
           inverted
           color="green"
            onClick={() =>
              clickEvent({ cityId: cityIndex, typeOfWorkId: typeOfWorkIndex })
            }
            icon
            labelPosition="left"
          >
            <Icon name="filter" />
            Filtrele
          </Button>
          <Button
            inverted
            color="red"
            onClick={() => {
              clickEvent({ cityId: 0, typeOfWorkId: 0 });
              // handleDropdownClear();
            }}
            icon
            labelPosition="right"
          >
            Temizle
            <Icon name="trash alternate outline" />
          </Button>
        </Segment>
      </div>
    </div>
  );
}
