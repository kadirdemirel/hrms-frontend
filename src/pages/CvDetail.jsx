import React from "react";
import LanguageLevelList from "./LanguageLevelList";
import SchoolSectionList from "./SchoolSectionList";
import ImageList from "./ImageList";
import CvSkillList from "./CvSkillList";
import JobTitleList from "./JobTitleList";
export default function CvDetail() {
  return (
    <div>
      <ImageList></ImageList>
      <LanguageLevelList></LanguageLevelList>
      <SchoolSectionList></SchoolSectionList>
      <CvSkillList></CvSkillList>
    </div>
  );
}
