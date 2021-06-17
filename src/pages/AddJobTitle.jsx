import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Segment, Input, Dropdown,Form } from "semantic-ui-react";
import CityService from "../services/CityService";
import JobPostingService from "../services/JobPostingService";
import JobTitleService from "../services/JobTitleService";
import WorkingTimeService from "../services/WorkingTimeService";
import TypeOfWorkService from "../services/TypeOfWorkService";
import * as Yup from "yup";

export default function AddJobTitle() {

  let jobTitleService = new JobTitleService();





  const formik = useFormik({
    initialValues: {
      title: "",
  
    }, 
    validationSchema: Yup.object({
      title: Yup.string().required("İş pozisyonu bilgisi seçiniz!")
 
    }),
    onSubmit: (values) => {
      
      console.log(values);
      let jobTitle = {
        title: values.title,
   
    };
    console.log(jobTitle);
    jobTitleService.addJobTitle(jobTitle).then((result) => console.log(result.data.message));
   
    },
  });

  return (
    <div>
      <Segment.Group>
        <Segment inverted>
          <h3 className="headerStyle">İŞ İLANI EKLE</h3>
        </Segment>
        <Segment>
          <Form onSubmit={formik.handleSubmit}>
            <div
              style={{
                textAlign: "left",
                fontFamily: "Arial",
                fontWeight: "bold",
              }}
            >
  
              
          
           
      
           
              <div className="divStyle">
            
                <Input
                  id="title"
                  placeholder="AÇIK POZİSYON SAYISI GİRİNİZ"
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  onChange={formik.handleChange}
                  value={formik.values.title}
                ></Input>
                {formik.errors.title && formik.touched.title && (
                  <p style={{ color: "red" }}>{formik.errors.title}</p>
                )}
              </div>
              </div>
             
            <Button
              type="submit"
              style={{
                backgroundColor: "	#3399FF",
                color: "white",
                marginBottom: "0.001em",
              }}
            >
           İŞ İLANI EKLE
            </Button>
          </Form>
        </Segment>
      </Segment.Group>
    </div>
  );
}
