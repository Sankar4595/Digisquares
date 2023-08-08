---
title : "Create a Project"
sidebar_position: 2
---

import newProject from '../../static/img/Dashboard.png';
import driverObj from '../../src/components/drive.js';
import Project from '../../static/img/dropdetails.png';
import ProjectName from '../../static/img/de1.png';
import ProjectType from '../../static/img/ptype.png';
import ProjectApptype from '../../static/img/papptype.png';
import ProjectDes from '../../static/img/pdes.png';
import ProjectStart from '../../static/img/psdate.png';
import ProjectEnd from '../../static/img/penddate.png';
import ProjectAddBtn from '../../static/img/Addbtn.png';
import ProjectBtn from '../../static/img/paddbtn.png';
import SampleProject from '../../static/img/sampleProject.png';
import Video from "../../src/components/Video.js";
import demo from "../../src/components/demo.mp4";
import SliderPage from "../../src/components/Slider/Slide.js";
import FrontPage from '../../static/img/fr1.png';
import FrontPage2 from '../../static/img/fr2.png';
import BounceLoader from "react-spinners/BounceLoader";
import ImageTooltip from "../../src/components/Slider/ImageTooltip.js";
import { Tooltip } from 'antd';
import PuffLoader  from "react-spinners/PuffLoader";
import MaximizeIcon from "../../src/components/Slider/MaximizeIcon.js";
import {BaseTop} from "../../src/components/Slider/Base.js";
import BasePage from "../../src/components/Slider/Base.js";

# Create Your First Web App

Developing Web Application with Digisquares is fast.

## **Let's create a project**

Log in to Digisquares. If you don't have an account yet, [Signup](https://app.digisquares.com/register) for free.

<Video url={demo} controls={true} />



## 1. In Dashboard, Click a **New Project Button**

## 2. Enter the below details

<div className = "demo" onClick={()=>{driverObj(
    {
    steps: [
    { element: '#ProjectName', popover: { title: 'Enter Project Name', description: '', side : 'right', align : 'center' }},
    { element: '#ProjectType', popover: { title: 'Select a Project Type', description: '', side : 'right', align : 'center' }},
    { element: '#ProjectDes', popover: { title: 'Enter Description', description: '', side : 'right', align : 'center' }},
    { element: '#ProjectAppType', popover: { title: 'Select a Project App Type', description: '', side : 'right', align : 'center' }},
    { element: '#ProjectStart', popover: { title: 'Select a Project Start Date', description: '', side : 'right', align : 'center' }},
    { element: '#ProjectEnd', popover: { title: 'Select a Project End Date', description: '', side : 'right', align : 'center' }},
    { element: '#ProjectAddBtn', popover: { title: 'Add Project', description: '', side : 'right', align : 'center' }},
    { element: '#SampleProject', popover: { title: 'Project Created successfull', description: '', side : 'right', align : 'center' }},
    ]
  })
  }}>
        <img data-toggle="ProjectName" data-placement="top" title="Project Name" src={ProjectName} id='ProjectName'/>
        <img data-toggle="ProjectType" data-placement="top" title="Project Type" src={ProjectType} id='ProjectType'/>
        <img data-toggle="ProjectDes" data-placement="top" title="Project Description" src={ProjectDes} id='ProjectDes'/>
        <img data-toggle="ProjectApptype" data-placement="top" title="Project Apptype" src={ProjectApptype} id='ProjectAppType'/>
        <img data-toggle="ProjectStart" data-placement="top" title="Project Start Date" src={ProjectStart} id='ProjectStart'/>
        <img data-toggle="ProjectEnd" data-placement="top" title="Project End Date" src={ProjectEnd} id='ProjectEnd'/>
        <img data-toggle="ProjectAddBtn" data-placement="top" title="Add New Project" src={ProjectAddBtn} id="ProjectAddBtn"/>
</div>

  - Step 1 : Enter your **Project Name**

  This is a text field where users can enter the name of their project. It allows them to provide a unique identifier or title for their project.
  - Step 2 : Select your **Project Type**
    - Web Develop
    - UI design
    - Game Design

  This is a dropdown field where users can select the type of their project from a list of predefined options. It helps categorize projects into different types or categories for easier organization
  - Step 3 : Enter your **Project Description**
  
  This is a text area field where users can provide a brief description of their project. It allows them to explain the purpose, objectives, or any other relevant details about the project.
  - Step 4 : Enter your **Project App Type**
  - Step 5 : Enter your **Project Start Date**

  This is a date picker field that enables users to select the start date of their project. It helps establish the project's timeline and when it officially begins.
  - Step 6 : Enter your **Project End Date** 

  This is another date picker field that allows users to select the end date of their project. It helps define the project's duration and when it is expected to be completed.


## 3. Project **Created Successfull**
Finally, there is a **Add New Project** button at the bottom of the form that users can click to submit their project details. Once submitted, the form data can be processed and saved in the backend for further use or displayed on the web application as required.

By providing these form fields, users can input relevant information about their project, such as its name, type, description, start date, and end date. This form structure helps capture the necessary details for creating a project within your web application.

<img data-toggle="SampleProject" data-placement="top" title="New Project" src={SampleProject} id="SampleProject"/>

<MaximizeIcon title="Create a Project">
  <SliderPage>
    <ImageTooltip>
      <div style={{ position: "absolute", right : "30px", top : "40px" }} >
        <Tooltip placement="bottom" title="Click New Project!" color="geekblue" trigger="hover">
          <PuffLoader size={30} color="red" />
        </Tooltip>
      </div>
      <img src={FrontPage} />
    </ImageTooltip>
    <ImageTooltip>
      <div style={{ position: "absolute", right : "300px", bottom : "140px" }}>
        <Tooltip title="Click New Project!" color="geekblue" trigger="hover">
          <PuffLoader size={30} color="red" />
        </Tooltip>
     </div>
     <img src={FrontPage2} />
    </ImageTooltip>
  </SliderPage>
</MaximizeIcon>

<SliderPage>
  <ImageTooltip>
    <div style={{ position: "absolute", right : "30px", top : "40px" }} >
      <Tooltip placement="bottom" title="Click New Project!" color="geekblue" trigger="hover">
        <PuffLoader size={30} color="red" />
      </Tooltip>
    </div>
    <img src={FrontPage} />
  </ImageTooltip>
  <ImageTooltip>
    <div style={{ position: "absolute", right : "300px", bottom : "140px" }}>
      <Tooltip title="Click New Project!" color="geekblue" trigger="hover">
        <PuffLoader size={30} color="red" />
      </Tooltip>
   </div>
   <img src={FrontPage2} />
  </ImageTooltip>
</SliderPage>

