import React from "react";
import { Grid } from "semantic-ui-react";
import Categories from "./Categories";
import JobTitleList from "../pages/JobTitleList";
import JobPostingList from "../pages/JobPostingList";
import CvList from "../pages/CvList";
import { Route } from "react-router-dom";
import EmployerList from "../pages/EmployerList";
import CandidateList from "../pages/CandidateList";
import AddJobPosting from "../pages/AddJobPosting";
import AddJobTitle from "../pages/AddJobTitle";
import CvDetail from "../pages/CvDetail";
import UpdateJobPosting from "../pages/UpdateJobPosting";
import AddEmploye from "../pages/AddEmploye";
import Home from "../pages/Home";

export default function Dashboard() {
  return (
    <div>
    
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories></Categories>
          </Grid.Column>
          <Grid.Column width={12}>
            <Route path="/"  exact component={Home}></Route>
            <Route path="/home"  exact component={Home}></Route>
            <Route path="/job_title" exact component={JobTitleList}></Route>
            <Route path="/job_posting" component={JobPostingList}></Route>
            <Route path="/employer" component={EmployerList}></Route>
            <Route path="/candidate" component={CandidateList}></Route>
            <Route path="/cv" component={CvList}></Route>
            <Route path="/add_job_posting" component={AddJobPosting}></Route>
            <Route path="/add_job_title" component={AddJobTitle}></Route>
            <Route path="/cv_detail/:id" component={CvDetail}></Route>
            <Route
              path="/job_posting_update/:id"
              component={UpdateJobPosting}
            ></Route>
            <Route path="/add_employe" component={AddEmploye}></Route>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
