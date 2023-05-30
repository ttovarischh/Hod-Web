import { useEffect, useState } from "react";
import styled from "styled-components";
import { FlexBox } from "../components/Common";
import { Outlet, useLocation } from "react-router-dom";
import O_Navbar from "../components/Organisms/O_Navbar";
import O_Footer from "../components/Organisms/O_Footer";
import ScrollToTop from "../helpers/ScrollToTop";

const MainWrapper = styled(FlexBox)`
  min-height: 100vh;
`;

export default function Root() {
  const location = useLocation();
  const [isSingleGameRoute, setIsSingleGameRoute] = useState(false);

  useEffect(() => {
    setIsSingleGameRoute(location.pathname.startsWith("/game/"));
  }, [location]);
  return (
    <>
      <MainWrapper>
        <ScrollToTop></ScrollToTop>
        <Outlet />
        {!isSingleGameRoute && <O_Navbar />}
        <O_Footer />
      </MainWrapper>
    </>
  );
}
