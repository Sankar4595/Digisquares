---
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


# Create Your First Web App

Developing Web Application with Digisquares is fast.

## **Let's create a project**

Log in to Digisquares. If you don't have an account yet, [signUp]('https://app.digisquares.com/register') for free.

<Video playing="true" url={demo} controls="true" loop="true" />

 1. In Dashboard, Click a New Project Button

<img id='Project' src={Project} usemap = "#workmap"
onClick={()=>{driverObj(
    {
    steps: [
    { element: '#newProject', popover: { title: 'Click New Project', description: 'Create a New Project', side: "right", align: 'start' }},
    { element: '#Project1', popover: { title: 'Enter Project Details', description: '', side : 'right', align : 'start' }},
    { element: '#ProjectName', popover: { title: 'Enter Project Name', description: '', side : 'right', align : 'center' }},
    { element: '#ProjectType', popover: { title: 'Select a Project Type', description: '', side : 'right', align : 'center' }},
    { element: '#ProjectDes', popover: { title: 'Enter Description', description: '', side : 'right', align : 'center' }},
    { element: '#ProjectAppType', popover: { title: 'Select a Project App Type', description: '', side : 'right', align : 'center' }},
    { element: '#ProjectStart', popover: { title: 'Select a Project Start Date', description: '', side : 'right', align : 'center' }},
    { element: '#ProjectEnd', popover: { title: 'Select a Project End Date', description: '', side : 'right', align : 'center' }}
    ]
  })
  }}/>

 2. And Show the Form fill the form below steps
<!--  
    - **Step 1 :** Enter your **Project Name**
        <img src={ProjectName} id='ProjectName'/>
    - **Step 2 :** Select your **Project Type** 
        <img src={ProjectType} id='ProjectType'/>
    - **Step 3 :** Enter your **Project Description**
        <img src={ProjectDes} id='ProjectDes'/>
    - **Step 4 :** Enter your **Project App Type**
        <img src={ProjectApptype} id='ProjectAppType'/>
    - **Step 5 :** Enter your **Project Start Date**
        <img src={ProjectStart} id='ProjectStart'/>
    - **Step 6 :** Enter your **Project End Date**
        <img src={ProjectEnd} id='ProjectEnd'/> -->
        

<!-- <img src={Project} id='Project'/> -->




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
    { element: '#SampleProject', popover: { title: 'Created successfull', description: '', side : 'right', align : 'center' }},
    ]
  })
  }}>
        <img src={ProjectName} id='ProjectName'/>
        <img src={ProjectType} id='ProjectType'/>
        <img src={ProjectDes} id='ProjectDes'/>
        <img src={ProjectApptype} id='ProjectAppType'/>
        <img src={ProjectStart} id='ProjectStart'/>
        <img src={ProjectEnd} id='ProjectEnd'/>
        <img src={ProjectAddBtn} id="ProjectAddBtn"/>
</div>

Project Created Successfull

<img src={SampleProject} id="SampleProject"/>