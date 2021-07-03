import TypeOfWorkService from "../services/TypeOfWorkService";
import CityService from "../services/CityService";
import React, { useEffect, useState } from "react";
import {
  Button,
  Segment,
  Dropdown,
  Label,
  Accordion,
  Icon,
} from "semantic-ui-react";

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
  });

  const [cityIndex, setCityIndex] = useState([]);
  const handleChangeCity = (e, { value }) => {
    setCityIndex(value);
  };

  const [typeOfWorkIndex, setTypeOfWorkIndex] = useState([]);
  const handleChangeTypeOfWork = (e, { value }) => {
    setTypeOfWorkIndex(value);
  };

  return (
    <div>
     
          <Segment color="black" raised>
            <Label size="large">Şehir</Label>
            <Dropdown
              placeholder="Şehir seçiniz"
              selection
              search
              multiple
              clearable
              options={cities.map((city, index) => {
                return { text: city.cityName, key: index, value: city.id };
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
              multiple
              clearable
              options={typeOfWorks.map((typeOfWork, index) => {
                return {
                  text: typeOfWork.typeOfWorkName,
                  key: index,
                  value: typeOfWork.id,
                };
              })}
              onChange={handleChangeTypeOfWork}
              value={typeOfWorkIndex}
            />
          </Segment>

          <Button
            type="button"
            fluid
            color="green"
            onClick={() =>
              clickEvent({ cityId: cityIndex, typeOfWorkId: typeOfWorkIndex })
            }
          >
            Filtrele
          </Button>
     
    </div>
  );
}
