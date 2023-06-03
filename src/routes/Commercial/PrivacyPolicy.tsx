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
  right: -17vw;
  top: 20vw;
  pointer-events: none;
  background-repeat: no-repeat;
`;

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  return (
    <PrivacyWrapper direction="column">
      <MainImage
        style={{
          backgroundImage: "url(" + require("../../images/demon.png") + ")",
        }}
      ></MainImage>
      <PPWrapper style={{ width: "65vw" }}>
        <Panama>{t("common:policy")}</Panama>
        <D_Text>{t("common:one")}</D_Text>
        <D_Text>{t("common:two")}</D_Text>
      </PPWrapper>
      <FlexBox direction="column" style={{ width: "58vw", marginBottom: 180 }}>
        <D_Text>{t("common:weSave")}</D_Text>
        <FlexBox style={{ gap: 31, marginTop: 26, flexWrap: "nowrap" }}>
          <E_Text>1</E_Text>
          <E_Text>{t("common:three")}</E_Text>
        </FlexBox>
        <FlexBox style={{ gap: 25, marginTop: 24, flexWrap: "nowrap" }}>
          <E_Text>2</E_Text>
          <E_Text>{t("common:four")}</E_Text>
        </FlexBox>
        <FlexBox style={{ gap: 25, marginTop: 24, flexWrap: "nowrap" }}>
          <E_Text>3</E_Text>
          <E_Text>{t("common:five")}</E_Text>
        </FlexBox>
        <FlexBox style={{ gap: 25, marginTop: 24, flexWrap: "nowrap" }}>
          <E_Text>4</E_Text>
          <E_Text>{t("common:nine")}</E_Text>
        </FlexBox>
      </FlexBox>
      <FlexBox direction="column" style={{ width: "58vw" }}>
        <D_Text>{t("common:howWe")}</D_Text>
        <FlexBox style={{ gap: 31, marginTop: 26, flexWrap: "nowrap" }}>
          <E_Text>{t("common:eight")}</E_Text>
        </FlexBox>
        <FlexBox style={{ gap: 25, marginTop: 24, flexWrap: "nowrap" }}>
          <E_Text>{t("common:six")}</E_Text>
        </FlexBox>
      </FlexBox>
      <FlexBox direction="column" style={{ width: "60vw", marginTop: 180 }}>
        <D_Text>{t("common:seven")}</D_Text>
      </FlexBox>
    </PrivacyWrapper>
  );
}
