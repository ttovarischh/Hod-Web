import styled from "styled-components";
import { FlexBox } from "./FlexBox";
import { HeaderFooter } from "./StyledFont";
import { Link } from "react-router-dom";
import A_Icon from "./A_Icon";

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

const O_Footer = (props: any) => {
  return (
    <Footer>
      <Link to={`about`} style={{ textDecoration: "none" }}>
        <HeaderFooter>О проекте</HeaderFooter>
      </Link>
      <Link to={`policy`} style={{ textDecoration: "none" }}>
        <HeaderFooter>Политика конфиденциальности</HeaderFooter>
      </Link>
    </Footer>
  );
};

export default O_Footer;
