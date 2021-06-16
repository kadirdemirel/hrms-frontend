import React from "react";
import { Grid } from "semantic-ui-react";
import Categories from "./Categories";
import JobTitleList from "../pages/JobTitleList";
import JobPostingList from "../pages/JobPostingList";
import CvSkillList from "../pages/CvSkillList";
import LanguageLevelList from "../pages/LanguageLevelList";
import SchoolSectionList from "../pages/SchoolSectionList";
import ImageList from "../pages/ImageList";
import CvList from "../pages/CvList";
import { Route } from "react-router-dom";
import EmployerList from "../pages/EmployerList";
import CandidateList from "../pages/CandidateList";
import AddJobPosting from "../pages/AddJobPosting";
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories></Categories>
          </Grid.Column>
          <Grid.Column width={12}>
        <Route path="/" exact component={JobPostingList}></Route>
        <Route path="/image" component={ImageList}></Route>
        <Route path="/job_title" component={JobTitleList}></Route>
        <Route path="/school_section" component={SchoolSectionList}></Route>
        <Route path="/language_level" component={LanguageLevelList}></Route>
        <Route path="/cv_skill" component={CvSkillList}></Route>
        <Route path="/job_posting" component={JobPostingList}></Route>
        <Route path="/employer" component={EmployerList}></Route>
        <Route path="/candidate" component={CandidateList}></Route>
        <Route path="/cv" component={CvList}></Route>
        <Route path="/add_job_posting" component={AddJobPosting}></Route>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
