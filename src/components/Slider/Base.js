import React, { useRef } from "react";
import './index.css';
import { ArrowsAltOutlined, FullscreenOutlined, RedoOutlined, ShrinkOutlined } from '@ant-design/icons';
import SliderPage from "./Slide";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useState } from "react";
import { Carousel } from "antd";

const BasePage = ({ children, title }) => {
  const CarouselRef = useRef(null);
  const next = () => {
    CarouselRef.current.next();
  }
  const handle = useFullScreenHandle();
  const enter = handle.enter;
  const exit = handle.exit;
  return <div className="base" onClick={next}>
    <FullScreen handle={handle}>
      <div >
        <BaseTop title={title} exit={exit} enter={enter} />
        <Carousel effect="fade" ref={CarouselRef} >
          {children}
        </Carousel>
      </div>
    </FullScreen>
  </div>
}
export default BasePage;


export const BaseTop = ({ title, maximizeImage, enter, exit }) => {

  const [show, setShow] = useState(false);
  const OnclickEnter = () => {
    setShow(!show)
    enter()
  }
  const OnclickExit = () => {
    setShow(!show)
    exit()
  }
  return (
    <>
      <div className="top">
        <div className="left">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="center">
          <input placeholder={title} disabled />
          {/* <RedoOutlined style={{ cursor: "pointer" }} /> */}
        </div>
        <div className="right">
          {!show ? <FullscreenOutlined onClick={OnclickEnter} /> : <ShrinkOutlined onClick={OnclickExit} />}
        </div>
      </div>
    </>
  )
}

export const FullScreenPage = ({ children, title }) => {

  const handle = useFullScreenHandle();
  const enter = handle.enter;
  const exit = handle.exit;

  return <>
    <FullScreen handle={handle}>
      <BaseTop title={title} exit={exit} enter={enter} />
      <SliderPage>{children}</SliderPage>
    </FullScreen>
  </>
}