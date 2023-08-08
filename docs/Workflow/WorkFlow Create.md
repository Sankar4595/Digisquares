---
title : 'WorkFlow : Create a Workflow'
sidebar_position: 2
---

import SliderPage from "../../src/components/Slider/Slide.js";
import Workflow from '../../static/img/Workflow.png';
import BounceLoader from "react-spinners/BounceLoader";
import ImageTooltip from "../../src/components/Slider/ImageTooltip.js";
import { Tooltip } from 'antd';
import PuffLoader  from "react-spinners/PuffLoader";
import MaximizeIcon from "../../src/components/Slider/MaximizeIcon.js";
import {FullScreenPage,TooltipImage} from "../../src/components/Slider/Base.js";
import FrontPage from '../../static/img/fr1.png';
import FrontPage2 from '../../static/img/fr2.png';
import BasePage from "../../src/components/Slider/Base.js";

<BasePage title="Create a Workflow">
    <ImageTooltip>
    <div style={{ position: "absolute", right : "30px", top : "40px" }} >
      <Tooltip placement="bottom" title="Click New Project!" color="geekblue" trigger="hover">
        <PuffLoader size={50} color="red" />
      </Tooltip>
    </div>
    <img src={FrontPage} />
  </ImageTooltip>
  <ImageTooltip>
    <div style={{ position: "absolute", right : "291px", top : "76px" }}>
      <Tooltip placement="left" title="Create a WorkFlow" color="geekblue" trigger="hover">
        <PuffLoader size={50} color="red" />
      </Tooltip>
   </div>
   <img src={Workflow} />
  </ImageTooltip>
</BasePage>