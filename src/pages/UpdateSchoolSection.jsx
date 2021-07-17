import React, { useState, useEffect, forceUpdate } from "react";
import { Dropdown, Button,Icon } from "semantic-ui-react";
import SchoolSectionService from "../services/SchoolSectionService";
import SchoolService from "../services/SchoolService";
import SectionService from "../services/SectionService";

export default function UpdateSchoolSection(props) {
  const [schools, setSchool] = useState([]);
  const [sections, setSection] = useState([]);

  const [currentSchool, setCurrentSchool] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    let schoolServise = new SchoolService();
    schoolServise.getAll().then((result) => setSchool(result.data.data));

    let sectionService = new SectionService();
    sectionService.getAll().then((result) => setSection(result.data.data));
  }, []);

  const getSchools = schools.map((school, index) => ({
    key: index,
    text: school.schoolName,
    value: school.id,
  }));

  const getSections = sections.map((section, index) => ({
    key: index,
    text: section.sectionName,
    value: section.id,
  }));

  const updateArray = {
    id: props.variableId,
    schoolId: currentSchool,
    sectionId: currentSection,
  };

  const updateSchoolSection = () => {
    let schoolSectionService = new SchoolSectionService();
    schoolSectionService.updateSchoolSection(updateArray).then((result) => {
      if (result.data.success === true) {
        alert(result.data.message);
      }
    });

    // alert(props.variableId)
  };

  return (
    <div>
      <div className="divStyle">
        <Dropdown
          style={{
            marginRight: "1em",
            marginTop: "1em",
            fontWeight: "lighter",
          }}
          button
          placeholder="OKUL SEÇİNİZ"
          fluid
          search
          selection
          id=""
          options={getSchools}
          onChange={(event, data) => setCurrentSchool(data.value)}
          value={currentSchool}
        />

        <Dropdown
          style={{
            marginRight: "1em",
            marginTop: "1em",
            fontWeight: "lighter",
          }}
          button
          placeholder="BÖLÜM SEÇİNİZ"
          fluid
          search
          selection
          id=""
          options={getSections}
          onChange={(event, data) => setCurrentSection(data.value)}
          value={currentSection}
        />

        <Button positive animated onClick={() => updateSchoolSection()}>
          <Button.Content visible>Güncelle</Button.Content>
          <Button.Content hidden>
            <Icon name="undo" />
          </Button.Content>
        </Button>
      </div>
    </div>
  );
}
