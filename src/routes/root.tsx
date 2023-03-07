import styled from "styled-components";
import { FlexBox } from "../components";
import { Outlet } from "react-router-dom";
import O_Navbar from "../components/O_Navbar";
import O_Footer from "../components/O_Footer";
import ScrollToTop from "../helpers/ScrollToTop";

const MainWrapper = styled(FlexBox)`
  min-height: 100vh;
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
