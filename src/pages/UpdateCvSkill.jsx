import React, { useState, useEffect } from "react";
import { Dropdown, Button, Icon } from "semantic-ui-react";
import SkillService from "../services/SkillService";
import CvSkillService from "../services/CvSkillService";
export default function UpdateCvSkill(props) {
  const [skills, setSkills] = useState([]);
  const [currentSkill, setCurrentSkill] = useState(0);
  useEffect(() => {
    let skillService = new SkillService();
    skillService.getAll().then((result) => setSkills(result.data.data));
  }, []);
  const getSkills = skills.map((skill, index) => ({
    key: index,
    text: skill.skillName,
    value: skill.id,
  }));

  const updateArray = {
    id: props.variableId,
    skillId: currentSkill,
  };

  const updateCvSkill = () => {
    let cvSkillService = new CvSkillService();
    cvSkillService.updateCvSkill(updateArray).then((result) => {
      if (result.data.success === true) {
        alert(result.data.message);
      }
    });
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
          placeholder="BECERİ SEÇİNİZ"
          fluid
          search
          selection
          id=""
          options={getSkills}
          onChange={(event, data) => setCurrentSkill(data.value)}
          value={currentSkill}
        />

        <Button positive animated onClick={() => updateCvSkill()}>
          <Button.Content visible>Güncelle</Button.Content>
          <Button.Content hidden>
            <Icon name="undo" />
          </Button.Content>
        </Button>
      </div>
    </div>
  );
}
