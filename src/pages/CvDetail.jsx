import React, { useState, useEffect } from "react";
import LanguageLevelList from "./LanguageLevelList";
import SchoolSectionList from "./SchoolSectionList";
import ImageList from "./ImageList";
import CvSkillList from "./CvSkillList";
import JobTitleList from "./JobTitleList";
import UpdateSchoolSection from "./UpdateSchoolSection";
import UpdateLanguageLevel from "./UpdateLanguageLevel";
import UpdateCvSkill from "./UpdateCvSkill";
export default function CvDetail() {
  const [updateSchoolSection, setUpdateSchoolSection] = useState(false);
  const [updateLanguageLevel, setUpdateLanguageLevel] = useState(false);
  const [updateCvSkill, setUpdateCvSkill] = useState(false);
  const [updateSchoolSectionId, setUpdateSchoolSectionId] = useState(0);
  const [updateLanguageLevelId, setUpdateLanguageLevelId] = useState(0);
  const [updateCvSkillId, setUpdateCvSkillId] = useState(0);
  useEffect(() => {
    setUpdateSchoolSection(false);
  }, []);

  const callbackUpdateSchoolSections = (paramId) => {
    setUpdateSchoolSectionId(paramId);
    setUpdateSchoolSection(true);
  };

  const callbackUpdateLanguageLevels = (paramId) => {
    setUpdateLanguageLevelId(paramId);
    setUpdateLanguageLevel(true);
  };

  const callbackUpdateCvSkills = (paramId) => {
    setUpdateCvSkillId(paramId);
    setUpdateCvSkill(true);
  };

  return (
    <div>
      <ImageList></ImageList>
      <LanguageLevelList
        functionUpdate={callbackUpdateLanguageLevels}
      ></LanguageLevelList>
      <SchoolSectionList
        functionUpdate={callbackUpdateSchoolSections}
      ></SchoolSectionList>
      <CvSkillList functionUpdate={callbackUpdateCvSkills}></CvSkillList>

      {updateSchoolSection ? (
        <UpdateSchoolSection
          variableId={updateSchoolSectionId}
        ></UpdateSchoolSection>
      ) : null}
      {updateLanguageLevel ? (
        <UpdateLanguageLevel
          variableId={updateLanguageLevelId}
        ></UpdateLanguageLevel>
      ) : null}

      {updateCvSkill ? (
        <UpdateCvSkill variableId={updateCvSkillId}></UpdateCvSkill>
      ) : null}
    </div>
  );
}
