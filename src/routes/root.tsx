import React from "react";
import styled from "styled-components";
import { FlexBox } from "../components";
import A_Icon from "../components/A_Icon";
import { Outlet, Link } from "react-router-dom";
import { HeaderFooter } from "../components";
import O_Navbar from "../components/O_Navbar";
import O_Footer from "../components/O_Footer";
import ScrollToTop from "../helpers/ScrollToTop";

const MainWrapper = styled(FlexBox)`
  min-height: 100vh;
`;

const Footer = styled(FlexBox)`
  position: absolute;
  opacity: 0.5;
  bottom: 0;
  left: 0;
  height: 80px;
  width: calc(100vw - 132px);
  padding-left: 66px;
  padding-right: 66px;
  align-items: center;
  margin-bottom: 0;
  margin-top: auto;
  gap: 36px;
`;

export default function Root() {
  return (
    <>
      <MainWrapper>
        <ScrollToTop></ScrollToTop>
        <Outlet />
        <O_Navbar />
        <O_Footer />
      </MainWrapper>
    </>
  );
}
