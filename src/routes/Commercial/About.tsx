import styled from "styled-components";
import { FlexBox, Panama, D_Text, E_Text } from "../../components/Common";
import { useTranslation } from "react-i18next";

const PrivacyWrapper = styled(FlexBox)`
  width: 100%;
  padding-left: 66px;
  padding-right: 66px;
  padding-top: 96px;
  padding-bottom: 181px;
  overflow: hidden;
  position: relative;
  direction: column;
`;

const PPWrapper = styled(FlexBox)`
  position: relative;
  width: 884px;
  padding-top: 85px;
  gap: 39px;
  margin-bottom: 180px;
`;

const MainImage = styled.div`
  position: absolute;
  background-size: 64vw auto;
  height: 100%;
  width: 924px;
  height: 1392px;
  left: -17vw;
  top: 20vw;
  pointer-events: none;
  background-repeat: no-repeat;
`;

export default function About() {
  const { t } = useTranslation();
  return (
    <PrivacyWrapper direction="column">
      <MainImage
        style={{
          backgroundImage: "url(" + require("../../images/lady.png") + ")",
        }}
      ></MainImage>
      <PPWrapper style={{ width: "65vw" }}>
        <Panama>{t("common:about")}</Panama>
        <D_Text>{t("common:a")}</D_Text>
      </PPWrapper>
      <FlexBox
        direction="column"
        style={{ marginLeft: "auto", marginRight: 0 }}
      >
        <PPWrapper style={{ width: "57vw", paddingTop: 248 }}>
          <Panama>{t("common:forMasters")}</Panama>
          <D_Text>{t("common:b")}</D_Text>
          <FlexBox>
            <FlexBox direction="column" style={{ width: "50%" }}>
              <FlexBox style={{ gap: 31, marginTop: 26, flexWrap: "nowrap" }}>
                <E_Text>{t("common:c")}</E_Text>
              </FlexBox>
              <FlexBox style={{ gap: 25, marginTop: 24, flexWrap: "nowrap" }}>
                <E_Text>{t("common:d")}</E_Text>
              </FlexBox>
            </FlexBox>

            <FlexBox direction="column" style={{ width: "50%" }}>
              <FlexBox style={{ gap: 31, marginTop: 26, flexWrap: "nowrap" }}>
                <E_Text>{t("common:e")}</E_Text>
              </FlexBox>
              <FlexBox style={{ gap: 25, marginTop: 24, flexWrap: "nowrap" }}>
                <E_Text>{t("common:f")}</E_Text>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </PPWrapper>
        <PPWrapper style={{ width: "57vw", paddingTop: 248, marginBottom: 0 }}>
          <Panama>{t("common:forPlayers")}</Panama>
          <D_Text>{t("common:g")}</D_Text>
          <FlexBox>
            <FlexBox direction="column" style={{ width: "50%" }}>
              <FlexBox style={{ gap: 31, marginTop: 26, flexWrap: "nowrap" }}>
                <E_Text>{t("common:h")}</E_Text>
              </FlexBox>
              <FlexBox style={{ gap: 25, marginTop: 24, flexWrap: "nowrap" }}>
                <E_Text>{t("common:i")}</E_Text>
              </FlexBox>
            </FlexBox>

            <FlexBox direction="column" style={{ width: "50%" }}>
              <FlexBox style={{ gap: 31, marginTop: 26, flexWrap: "nowrap" }}>
                <E_Text>{t("common:j")}</E_Text>
              </FlexBox>
              <FlexBox style={{ gap: 25, marginTop: 24, flexWrap: "nowrap" }}>
                <E_Text>{t("common:k")}</E_Text>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </PPWrapper>
      </FlexBox>
    </PrivacyWrapper>
  );
}
