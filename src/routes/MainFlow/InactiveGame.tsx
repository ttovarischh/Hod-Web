import styled from "styled-components";
import { D_Text, Panama, FlexBox } from "../../components/Common";
import O_Navbar from "../../components/Organisms/O_Navbar";
import O_Footer from "../../components/Organisms/O_Footer";
import A_Button from "../../components/Atoms/A_Button";
import { useTranslation } from "react-i18next";

const ErrorWrapper = styled(FlexBox)`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const ErrorContentWrapper = styled(FlexBox)`
  position: relative;
  width: 100%;
  margin-top: 20%;
  margin-left: 66px;
`;

const PPWrapper = styled(FlexBox)`
  position: relative;
  width: 884px;
  padding-top: 85px;
  gap: 39px;
  margin-bottom: 30px;
`;

const MainImage = styled.div`
  position: absolute;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  right: 0;
  background-repeat: no-repeat;
  background-position: center right;
  top: 0px;
  pointer-events: none;
`;

export default function InactiveGame() {
  const { t } = useTranslation();

  return (
    <ErrorWrapper>
      <O_Navbar />
      <ErrorContentWrapper>
        <PPWrapper style={{ width: "60vw" }}>
          <Panama>{t("common:wow")}</Panama>
          <D_Text>{t("common:inactiveGame")}</D_Text>
        </PPWrapper>
        <FlexBox style={{ gap: 24 }}>
          <A_Button>{t("common:goMain")}</A_Button>
          <A_Button secondary>{t("common:goProfile")}</A_Button>
        </FlexBox>
      </ErrorContentWrapper>
      <O_Footer />
      <MainImage
        style={{
          backgroundImage: "url(" + require("../../images/Inactive.png") + ")",
        }}
      ></MainImage>
    </ErrorWrapper>
  );
}
