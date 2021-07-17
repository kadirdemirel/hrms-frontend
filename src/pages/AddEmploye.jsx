import EmployeService from "../services/EmployeService";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Segment, Input, Dropdown, Form } from "semantic-ui-react";
import * as Yup from "yup";

import { useParams } from "react-router";
export default function AddEmploye() {
  let employeService = new EmployeService();

  const formik = useFormik({
    initialValues: {
      id: 38,
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Ad boş bırakılamaz!"),
      lastName: Yup.string().required("Soyad boş bırakılamaz!"),
      emailAddress: Yup.string().required("Email boş bırakılamaz!"),
      password: Yup.string().required("Şifre boş bırakılamaz!"),
    }),
    onSubmit: (values) => {
      console.log(values);
      let employe = {
        id: values.id,
        firstName: values.firstName,
        lastName: values.lastName,
        emailAddress: values.emailAddress,
        password: values.password,
      };
      console.log(employe);
      employeService
        .addEmploye(employe)
        .then((result) => console.log(result.data.message));
    },
  });

  return (
    <div>
      <Segment.Group>
        <Segment inverted>
          <h3 className="headerStyle">HRMS PERSONEL BİLGİLERİ GÜNCELLEME</h3>
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
                  id="firstName"
                  placeholder="AD GİRİNİZ"
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                ></Input>
                {formik.errors.firstName && formik.touched.firstName && (
                  <p style={{ color: "red" }}>{formik.errors.firstName}</p>
                )}
              </div>
              <div className="divStyle">
                <Input
                  id="lastName"
                  placeholder="SOYAD GİRİNİZ"
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                ></Input>
                {formik.errors.lastName && formik.touched.lastName && (
                  <p style={{ color: "red" }}>{formik.errors.lastName}</p>
                )}
              </div>
              <div className="divStyle">
                <Input
                  id="emailAddress"
                  placeholder="E-MAİL GİRİNİZ"
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  onChange={formik.handleChange}
                  value={formik.values.emailAddress}
                ></Input>
                {formik.errors.emailAddress && formik.touched.emailAddress && (
                  <p style={{ color: "red" }}>{formik.errors.emailAddress}</p>
                )}
              </div>
              <div className="divStyle">
                <Input
                  id="password"
                  placeholder="ŞİFRE GİRİNİZ"
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                ></Input>
                {formik.errors.password && formik.touched.password && (
                  <p style={{ color: "red" }}>{formik.errors.password}</p>
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
              GÜNCELLE
            </Button>
          
          </Form>
        </Segment>
      </Segment.Group>
    </div>
  );
}
