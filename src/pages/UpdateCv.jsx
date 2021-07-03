// import { useFormik } from "formik";
// import React, { useEffect, useState } from "react";
// import { Button, Segment, Input, Dropdown, Form } from "semantic-ui-react";
// import CityService from "../services/CityService";
// import JobPostingService from "../services/JobPostingService";
// import JobTitleService from "../services/JobTitleService";
// import WorkingTimeService from "../services/WorkingTimeService";
// import TypeOfWorkService from "../services/TypeOfWorkService";
// import * as Yup from "yup";
// import SchoolSectionService from "../services/SchoolSectionService";

// export default function UpdateCv() {
//   const [cities, setCities] = useState([]);
//   const [jobTitles, setJobTitle] = useState([]);
//   const [workingTimes, setWorkingTimes] = useState([]);
//   const [typeOfWorks, setTypeOfWorks] = useState([]);
//   let jobPostingService = new JobPostingService();

//   useEffect(() => {
//     let cityService = new CityService();
//     let jobTitleService = new JobTitleService();
//     let workingTimeService = new WorkingTimeService();
//     let typeOfWorkService = new TypeOfWorkService();
//     let schoolSectionService=new SchoolSectionService();
//     cityService.getCities().then((result) => setCities(result.data.data));
//     jobTitleService
//       .getJobTitles()
//       .then((result) => setJobTitle(result.data.data));

//     workingTimeService
//       .getWorkingTimes()

//       .then((result) => setWorkingTimes(result.data.data));

//     typeOfWorkService
//       .getTypeOfWorks()
//       .then((result) => setTypeOfWorks(result.data.data));
//   }, []);

//   schoolSectionService.get


//   // const getLanguages = languages.map((language, index) => ({
//   //   key: index,
//   //   text: language.languageName,
//   //   value: language.id,
//   // }));
//   // const getLevels = levels.map((level, index) => ({
//   //   key: index,
//   //   text: level.levelName,
//   //   value: level.id,
//   // }));
//   // const getSchools = schools.map((school, index) => ({
//   //   key: index,
//   //   text: school.schoolName,
//   //   value: school.id,
//   // }));
//   const getSchoolSections=schoolSections.map((schoolSection,index)=>({
//     key:index,
//     text:schoolSection.school.schoolName,
//     text:schoolSection.section.sectionName,
//     value:schoolSection.id,
//   }));

//   const formik = useFormik({
//     initialValues: {
//       linkedlnAddress: "",
//       gitHubAddress: "",
//       coverLetter: "",
//       yearOfEmployment: "",
//       yearOfEntry: "",
//       yearOfGraduation: "",
//       yearOff: "",
//       typeOfWordId: "",
//       workingTimeId: "",
//       candidateId: 2,
//       cvSkillsId:"",
//       skillId:"",
//       languageLevelId:"",
//       languageId:"",
//       levelId:"",
//       schoolSectionId:"",
//       schoolId:"",
//       sectionId:""



//     },
//     // validationSchema: Yup.object({
//     //   jobTitleId: Yup.number().required("İş pozisyonu bilgisi seçiniz!"),
//     //   cityId: Yup.string().required("Şehir bilgisi seçiniz!"),
//     //   openPosition: Yup.number().required(
//     //     "Alınacak eleman sayısı boş bırakılamaz!"
//     //   ),
//     //   jobDescription: Yup.string().required("Açıklama boş bırakılamaz!"),
//     //   lastDate: Yup.string().required("Son başvuru tarihi boş bırakılamaz!"),
//     //   typeOfWordId: Yup.string().required("Çalışma tipi bilgisi seçiniz!"),
//     //   workingTimeId: Yup.string().required(
//     //     "Çalışma zamanı tipi bilgisi seçiniz!"
//     //   ),
//     // }),

//     onSubmit: (values) => {
//       console.log(values);
//       let jobPosting = {
//         linkedlnAddress:values.linkedlnAddress,
//         gitHubAddress:values.gitHubAddress,
//         coverLetter:values.coverLetter,
//         yearOfEmployment:values.yearOfEmployment,
//         yearOfEntry:values.yearOfEntry,
//         yearOfGraduation:values.yearOfGraduation,
//         yearOff:values.yearOff,
//         candidate: { id: values.candidateId },
//         openPosition: values.openPosition,
//         typeOfWork: {
//           id: values.typeOfWordId,
//         },
//         workingTime: {
//           id: values.workingTimeId,
//         },
//         cvSkills: [
//           {
//             id: values.cvSkillsId,
//             skill: {
//               id: values.skillId,
//             },
//           },
//         ],
//         languageLevels: [
//           {
//             id: values.languageLevelId,
//             language: {
//               id: values.languageId,
//             },
//             level: {
//               id: values.levelId,
//             },
//           },
//         ],

//         schoolSections: [
//           {
//             id: values.schoolSectionId,
           
//           },
//         ],
//       };
//       console.log(jobPosting);
//       jobPostingService
//         .addJobPosting(jobPosting)
//         .then((result) => console.log(result.data.message));
//     },
//   });

//   return (
//     <div>
//       <Segment.Group>
//         <Segment inverted>
//           <h3 className="headerStyle">İŞ İLANI EKLE</h3>
//         </Segment>
//         <Segment>
//           <form onSubmit={formik.handleSubmit}>
//             <div
//               style={{
//                 textAlign: "left",
//                 fontFamily: "Arial",
//                 fontWeight: "bold",
//               }}
//             >
//               <div className="divStyle">
//                 <Dropdown
//                   style={{
//                     marginRight: "1em",
//                     marginTop: "1em",
//                     fontWeight: "lighter",
//                   }}
//                   button
//                   placeholder="ŞEHİR SEÇİNİZ"
//                   fluid
//                   search
//                   selection
//                   id="schoolSectionId"
//                   options={getCities}
//                   onChange={(event, data) =>
//                     formik.setFieldValue("schoolSectionId", data.value)
//                   }
//                   value={formik.values.schoolSectionId}
//                 />
//                 {formik.errors.schoolSectionId && formik.touched.schoolSectionId && (
//                   <p style={{ color: "red" }}>{formik.errors.schoolSectionId}</p>
//                 )}
//               </div>
//               <div className="divStyle">
//                 <Dropdown
//                   style={{
//                     marginRight: "1em",
//                     marginTop: "1em",
//                     fontWeight: "lighter",
//                   }}
//                   button
//                   placeholder="İŞ POZİSYONU SEÇİNİZ"
//                   fluid
//                   search
//                   selection
//                   id="jobTitleId"
//                   options={getJobTitles}
//                   onChange={(event, data) =>
//                     formik.setFieldValue("jobTitleId", data.value)
//                   }
//                   value={formik.values.jobTitleId}
//                 />
//                 {formik.errors.jobTitleId && formik.touched.jobTitleId && (
//                   <p style={{ color: "red" }}>{formik.errors.jobTitleId}</p>
//                 )}
//               </div>
//               <div className="divStyle">
//                 <Dropdown
//                   style={{
//                     marginRight: "1em",
//                     marginTop: "1em",
//                     fontWeight: "lighter",
//                   }}
//                   button
//                   placeholder="ÇALIŞMA ŞEKLİ SEÇİNİZ"
//                   fluid
//                   search
//                   selection
//                   id="typeOfWordId"
//                   options={getTypeOfWorks}
//                   onChange={(event, data) =>
//                     formik.setFieldValue("typeOfWordId", data.value)
//                   }
//                   value={formik.values.typeOfWordId}
//                   required
//                 />
//                 {formik.errors.typeOfWordId && formik.touched.typeOfWordId && (
//                   <p style={{ color: "red" }}>{formik.errors.typeOfWordId}</p>
//                 )}
//               </div>
//               <div className="divStyle">
//                 <Dropdown
//                   style={{
//                     marginRight: "1em",
//                     marginTop: "1em",
//                     fontWeight: "lighter",
//                   }}
//                   button
//                   placeholder="ÇALIŞMA ZAMANI SEÇİNİZ"
//                   fluid
//                   search
//                   selection
//                   id="workingTimeId"
//                   options={getWorkingTimes}
//                   onChange={(event, data) =>
//                     formik.setFieldValue("workingTimeId", data.value)
//                   }
//                   value={formik.values.workingTimeId}
//                 />
//                 {formik.errors.workingTimeId &&
//                   formik.touched.workingTimeId && (
//                     <p style={{ color: "red" }}>
//                       {formik.errors.workingTimeId}
//                     </p>
//                   )}
//               </div>
//               <div className="divStyle">
//                 <Input
//                   id="minSalary"
//                   placeholder="MİNUMUM MAAŞ GİRİNİZ"
//                   fluid
//                   style={{ marginRight: "1em", marginTop: "1em" }}
//                   onChange={formik.handleChange}
//                   value={formik.values.minSalary}
//                 ></Input>
//                 {formik.errors.minSalary && formik.touched.minSalary && (
//                   <p style={{ color: "red" }}>{formik.errors.minSalary}</p>
//                 )}
//               </div>
//               <div className="divStyle">
//                 <Input
//                   id="maxSalary"
//                   placeholder="MAXİUMUM MAAŞ GİRİNİZ"
//                   fluid
//                   style={{ marginRight: "1em", marginTop: "1em" }}
//                   onChange={formik.handleChange}
//                   value={formik.values.maxSalary}
//                 ></Input>
//                 {formik.errors.maxSalary && formik.touched.maxSalary && (
//                   <p style={{ color: "red" }}>{formik.errors.maxSalary}</p>
//                 )}
//               </div>
//               <div className="divStyle">
//                 <Input
//                   id="openPosition"
//                   placeholder="AÇIK POZİSYON SAYISI GİRİNİZ"
//                   fluid
//                   style={{ marginRight: "1em", marginTop: "1em" }}
//                   onChange={formik.handleChange}
//                   value={formik.values.openPosition}
//                 ></Input>
//                 {formik.errors.openPosition && formik.touched.openPosition && (
//                   <p style={{ color: "red" }}>{formik.errors.openPosition}</p>
//                 )}
//               </div>
//               <div className="divStyle">
//                 <Input
//                   type="date"
//                   id="lastDate"
//                   placeholder="SON BAŞVURU TARİHİ GİRİNİZ"
//                   fluid
//                   style={{ marginRight: "1em", marginTop: "1em" }}
//                   onChange={formik.handleChange}
//                   value={formik.values.lastDate}
//                 ></Input>
//                 {formik.errors.lastDate && formik.touched.lastDate && (
//                   <p style={{ color: "red" }}>{formik.errors.lastDate}</p>
//                 )}
//               </div>
//               <div className="divStyle">
//                 <Input
//                   id="jobDescription"
//                   placeholder="İŞ TANIMI GİRİNİZ"
//                   fluid
//                   style={{ marginRight: "1em", marginTop: "1em" }}
//                   onChange={formik.handleChange}
//                   value={formik.values.jobDescription}
//                 ></Input>
//                 {formik.errors.jobDescription &&
//                   formik.touched.jobDescription && (
//                     <p style={{ color: "red" }}>
//                       {formik.errors.jobDescription}
//                     </p>
//                   )}
//               </div>
//             </div>
//             <Button
//               type="submit"
//               style={{
//                 backgroundColor: "	#3399FF",
//                 color: "white",
//                 marginBottom: "0.001em",
//               }}
//             >
//               İŞ İLANI EKLE
//             </Button>
//           </form>
//         </Segment>
//       </Segment.Group>
//     </div>
//   );
// }
