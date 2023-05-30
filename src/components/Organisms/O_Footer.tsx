import styled from "styled-components";
import { FlexBox, H_Text } from "../Common";
import { Link } from "react-router-dom";

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
`;

const O_Footer = (props: any) => {
  return (
    <Footer justifyContent="space-between">
      <FlexBox style={{ gap: 36 }}>
        <Link to={`about`} style={{ textDecoration: "none" }}>
          <H_Text medium>О проекте</H_Text>
        </Link>
        <Link to={`policy`} style={{ textDecoration: "none" }}>
          <H_Text medium>Политика конфиденциальности</H_Text>
        </Link>
      </FlexBox>
      <H_Text medium>Ru/En</H_Text>
    </Footer>
  );
};

export default O_Footer;
