import React, { useState, useEffect } from "react";
import { Dropdown, Button, Icon } from "semantic-ui-react";
import LanguageLevelService from "../services/LanguageLevelService";
import LanguageService from "../services/LanguageService";
import LevelService from "../services/LevelService";
export default function UpdateLanguageLevel(props) {
  const [languages, setLanguages] = useState([]);
  const [levels, setlevels] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(0);
  useEffect(() => {
    let languageService = new LanguageService();
    languageService.getAll().then((result) => setLanguages(result.data.data));

    let levelService = new LevelService();
    levelService.getAll().then((result) => setlevels(result.data.data));
  }, []);

  const getLanguages = languages.map((language, index) => ({
    key: index,
    text: language.languageName,
    value: language.id,
  }));
  const getLevels = levels.map((level, index) => ({
    key: index,
    text: level.levelName,
    value: level.id,
  }));
  const updateArray = {
    id: props.variableId,
    languageId: currentLanguage,
    levelId: currentLevel,
  };
  const updateLanguageLevel = () => {
    let languageLeveService = new LanguageLevelService();
    languageLeveService.updateLanguageLevel(updateArray).then((result) => {
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
          placeholder="DİL SEÇİNİZ"
          fluid
          search
          selection
          id=""
          options={getLanguages}
          onChange={(event, data) => setCurrentLanguage(data.value)}
          value={currentLanguage}
        />

        <Dropdown
          style={{
            marginRight: "1em",
            marginTop: "1em",
            fontWeight: "lighter",
          }}
          button
          placeholder="SEVİYE SEÇİNİZ"
          fluid
          search
          selection
          id=""
          options={getLevels}
          onChange={(event, data) => setCurrentLevel(data.value)}
          value={currentLevel}
        />

        <Button positive animated onClick={() => updateLanguageLevel()}>
          <Button.Content visible>Güncelle</Button.Content>
          <Button.Content hidden>
            <Icon name="undo" />
          </Button.Content>
        </Button>
      </div>
    </div>
  );
}
